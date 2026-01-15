import { Resend } from "resend";
import { NextResponse } from "next/server";

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const hits = new Map<string, { count: number; ts: number }>();
const rateLimit = (key: string, limit = 5, windowMs = 60 * 1000) => {
  const now = Date.now();
  const current = hits.get(key);

  if (!current || now - current.ts > windowMs) {
    hits.set(key, { count: 1, ts: now });
    return true;
  }

  if (current.count >= limit) return false;

  current.count += 1;
  hits.set(key, current);
  return true;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    const hp = String(body.company_website ?? "").trim();
    if (hp.length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please add a bit more detail." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Message is too long." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL_TO;
    const from = process.env.CONTACT_EMAIL_FROM;

    if (!to || !from) {
      return NextResponse.json(
        { ok: false, error: "Server not configured" },
        { status: 500 }
      );
    }

    const subject = `New TechEland enquiry from ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    await resend.emails.send({
      from: from,
      to: [to],
      replyTo: email,
      subject: subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error?.message ?? "Unknown server error",
        details: error?.response?.data ?? error?.error ?? null,
      },
      { status: 500 }
    );
  }
}
