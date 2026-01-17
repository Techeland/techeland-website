import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";

export default async function SitesPage() {
  const supabase = await supabaseServer();

  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;

  const { data: sites, error } = await supabase
    .from("sites")
    .select("id,name,base_url,is_active,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Websites</h1>
          <p className="text-sm opacity-70">
            {user?.email ? `Logged in as ${user.email}` : ""}
          </p>
        </div>

        <Link
          href="/app/sites/new"
          className="rounded-xl border px-4 py-2 hover:bg-slate-50"
        >
          Add website
        </Link>
      </div>

      {sites?.length ? (
        <div className="rounded-2xl border bg-white">
          <div className="divide-y">
            {sites.map((s) => (
              <div key={s.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm opacity-70">{s.base_url}</div>
                </div>
                <div className="text-sm opacity-70">
                  {s.is_active ? "Active" : "Paused"}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border bg-white p-6">
          <p className="opacity-70">No websites yet.</p>
          <div className="mt-3">
            <Link className="underline" href="/app/sites/new">
              Add your first website
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
