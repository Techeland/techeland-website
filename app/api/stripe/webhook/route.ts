import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature");

  if (!sig)
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId =
      (session.metadata?.supabase_user_id as string | undefined) ||
      (session.client_reference_id as string | undefined);

    if (!userId) return NextResponse.json({ ok: true });

    const subscriptionId = session.subscription as string;
    const sub = (await stripe.subscriptions.retrieve(
      subscriptionId
    )) as Stripe.Subscription;

    if ("deleted" in sub && sub.deleted) {
      return NextResponse.json({ received: true });
    }

    const subscription = sub as Stripe.Subscription;

    const status = subscription.status;
    const currentPeriodEnd = new Date(
      ((subscription as any).current_period_end ?? 0) * 1000
    ).toISOString();

    await supabaseAdmin.from("subscriptions").upsert(
      {
        user_id: userId,
        stripe_customer_id: (session.customer as string) ?? null,
        stripe_subscription_id: subscription.id,
        stripe_price_id: subscription.items.data[0]?.price.id ?? null,
        status,
        current_period_end: currentPeriodEnd,
      },
      { onConflict: "stripe_subscription_id" }
    );
  }

  if (
    event.type === "customer.subscription.updated" ||
    event.type === "customer.subscription.deleted"
  ) {
    const sub = event.data.object as Stripe.Subscription;

    const status = sub.status;
    const currentPeriodEnd = new Date(
      ((sub as any).current_period_end ?? 0) * 1000
    ).toISOString();

    await supabaseAdmin
      .from("subscripitions")
      .update({
        status,
        current_period_end: currentPeriodEnd,
        stripe_price_id: sub.items.data[0]?.price.id ?? null,
      })
      .eq("stripe_subscription_id", sub.id);
  }

  return NextResponse.json({ ok: true });
}
