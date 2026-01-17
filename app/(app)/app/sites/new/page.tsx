import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

export default function NewSitePage() {
  async function createSite(formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    let baseUrl = String(formData.get("base_url") || "").trim();

    if (!name || !baseUrl) return;

    // Normalize URL (basic)
    if (!/^https?:\/\//i.test(baseUrl)) {
      baseUrl = `https://${baseUrl}`;
    }
    // Remove trailing slash for uniqueness consistency
    baseUrl = baseUrl.replace(/\/+$/, "");

    const supabase = await supabaseServer();
    const { data: userData, error: userErr } = await supabase.auth.getUser();

    if (userErr || !userData.user) {
      redirect("/login?next=/app/sites/new");
    }

    const { error } = await supabase.from("sites").insert({
      user_id: userData.user.id,
      name,
      base_url: baseUrl,
      is_active: true,
    });

    // If duplicate or format fails, you can improve later.
    if (error) {
      // For now just throw to see it in dev
      throw new Error(error.message);
    }

    redirect("/app/sites");
  }

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Add a website</h1>
        <p className="text-sm opacity-70">
          We’ll start with uptime monitoring. More checks coming next.
        </p>
      </div>

      <form
        action={createSite}
        className="space-y-4 rounded-2xl border bg-white p-5"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium">Website name</label>
          <input
            name="name"
            className="w-full rounded-xl border p-3"
            placeholder="My Business"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Website URL</label>
          <input
            name="base_url"
            className="w-full rounded-xl border p-3"
            placeholder="example.com or https://example.com"
            required
          />
          <p className="text-xs opacity-60">
            Tip: include https:// — we’ll add it if you don’t.
          </p>
        </div>

        <button className="rounded-xl border px-4 py-2 hover:bg-slate-50">
          Save website
        </button>
      </form>
    </div>
  );
}
