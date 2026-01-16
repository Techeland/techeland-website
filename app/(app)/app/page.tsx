import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";

export default async function AppDashboardPage() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getUser();

  // You can replace these with real DB queries later
  const sitesCount = 0;
  const openIncidentsCount = 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm opacity-70">Logged in as {data.user?.email}</p>
        </div>

        <Link
          href="/app/sites/new"
          className="rounded-xl border px-4 py-2 hover:bg-slate-50"
        >
          Add a website
        </Link>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-4">
          <div className="text-sm opacity-70">Websites monitored</div>
          <div className="mt-1 text-3xl font-semibold">{sitesCount}</div>
        </div>

        <div className="rounded-2xl border bg-white p-4">
          <div className="text-sm opacity-70">Open incidents</div>
          <div className="mt-1 text-3xl font-semibold">
            {openIncidentsCount}
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-4">
          <div className="text-sm opacity-70">Plan</div>
          <div className="mt-1 text-base font-semibold">Starter</div>
          <div className="text-sm opacity-70">Billing will be wired next</div>
        </div>
      </div>

      {/* Main panels */}
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border bg-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Your websites</h2>
            <Link href="/app/sites" className="text-sm underline opacity-80">
              View all
            </Link>
          </div>

          <div className="mt-4 text-sm opacity-70">
            You haven’t added any websites yet.
          </div>

          <div className="mt-4">
            <Link
              href="/app/sites/new"
              className="inline-block rounded-xl border px-3 py-2 hover:bg-slate-50"
            >
              Add your first website
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border bg-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent incidents</h2>
            <Link
              href="/app/incidents"
              className="text-sm underline opacity-80"
            >
              View all
            </Link>
          </div>

          <div className="mt-4 text-sm opacity-70">
            No incidents yet — once monitoring is enabled, you’ll see alerts
            here.
          </div>
        </section>
      </div>
    </div>
  );
}
