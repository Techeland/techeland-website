import { ReactNode } from "react";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getUser();

  const { data: sub } = await supabase
    .from("subscriptions")
    .select("status,current_period_end")
    .maybeSingle();

  const active = sub?.status === "active" || sub?.status === "trialing";

  if (!active) {
    redirect("/pricing?subscribe=1");
  }

  return (
    <div className="min-h-screen bg-primary text-slate-800">
      {/* Top bar */}
      <header className="border-b border-slate-200/60 bg-white/60 backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/app" className="font-semibold">
            Website Protection
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <span className="opacity-70">{data.user?.email}</span>

            <form action="/signout" method="post">
              <button className="rounded-xl border px-3 py-1.5 hover:bg-slate-50">
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="container py-6">{children}</div>
    </div>
  );
}
