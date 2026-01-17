import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";

export default async function AppDashboardPage() {
  const supabase = await supabaseServer();
  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();

  if (userErr) {
    throw new Error(userErr.message);
  }

  const { data: sites, error: sitesErr } = await supabase
    .from("sites")
    .select("id,name,base_url,is_active,created_at")
    .order("created_at", { ascending: false });

  if (sitesErr) throw new Error(sitesErr.message);

  // You can replace these with real DB queries later
  const totalSites = sites?.length || 0;
  const activeSites = (sites ?? []).filter((s) => s.is_active).length;
  const pausedSites = totalSites - activeSites;

  const recentSites = (sites ?? []).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm opacity-70">Logged in as {user?.email}</p>
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
          <div className="mt-1 text-3xl font-semibold">{totalSites}</div>
        </div>

        <div className="rounded-2xl border bg-white p-4">
          <div className="text-sm opacity-70">Active monitoring</div>
          <div className="mt-1 text-3xl font-semibold">{activeSites}</div>
          <div className="mt-1 text-sm opacity-70">{pausedSites} paused</div>
        </div>

        <div className="rounded-2xl border bg-white p-4">
          <div className="text-sm opacity-70">Open incidents</div>
          <div className="mt-1 text-3xl font-semibold">0</div>
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
            <h2 className="font-semibold">Recent websites</h2>
            <Link href="/app/sites" className="text-sm underline opacity-80">
              View all
            </Link>
          </div>

          {recentSites.length ? (
            <div className="mt-4 divide-y">
              {recentSites.map((s) => (
                <div
                  key={s.id}
                  className="py-3 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="font-medium truncate">{s.name}</div>
                    <div className="text-sm opacity-70 truncate">
                      {s.base_url}
                    </div>
                  </div>
                  <div className="text-sm opacity-70">
                    {s.is_active ? "Active" : "Paused"}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 text-sm opacity-70">
              You haven’t added any websites yet.
              <div className="mt-3">
                <Link className="underline" href="/app/sites/new">
                  Add your first website
                </Link>
              </div>
            </div>
          )}
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
            No incidents yet — once uptime checks are running, you’ll see alerts
            here.
          </div>
        </section>
      </div>
    </div>
  );
}
