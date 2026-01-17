"use client";
import { useState } from "react";

export default function PricingPage() {
  const [loading, setLoading] = useState<"monthly" | "yearly" | null>(null);

  async function start(plan: "monthly" | "yearly") {
    setLoading(plan);
    const res = await fetch("/api/stripe/create-checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ plan }),
    });
    setLoading(null);

    if (!res.ok) {
      alert("Could not start checkout");
      return;
    }

    const { url } = await res.json();
    window.location.href = url;
  }

  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Website Protection Plan</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 space-y-3">
          <div className="text-xl font-semibold">Monthly</div>
          <div className="text-3xl font-bold">£39</div>
          <button
            onClick={() => start("monthly")}
            className="rounded-xl border px-4 py-2 hover:bg-slate-50"
            disabled={loading === "monthly"}
          >
            {loading === "monthly" ? "Loading..." : "Start monthly"}
          </button>
        </div>

        <div className="rounded-2xl border bg-white p-6 space-y-3">
          <div className="text-xl font-semibold">Yearly</div>
          <div className="text-3xl font-bold">£349</div>
          <button
            onClick={() => start("yearly")}
            className="rounded-xl border px-4 py-2 hover:bg-slate-50"
            disabled={loading === "yearly"}
          >
            {loading === "yearly" ? "Loading..." : "Start yearly"}
          </button>
        </div>
      </div>
    </div>
  );
}
