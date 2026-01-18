"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = supabaseClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/app";

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [loading, setLoading] = useState(false);

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // Keep this - it’s still useful, but OTP verify will be your main path
        emailRedirectTo: `${
          window.location.origin
        }/callback?next=${encodeURIComponent(next)}`,
      },
    });

    setLoading(false);

    if (error) return alert(error.message);
    setStep("code");
  }

  async function verifyCode(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: token.trim(),
      type: "email",
    });

    setLoading(false);

    if (error) {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push(next);
        return;
      }
      alert(error.message);
      return;
    }

    router.push(next);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>

        {step === "email" ? (
          <form onSubmit={sendCode} className="space-y-3">
            <p className="text-sm opacity-80">We’ll send you a 6-digit code.</p>
            <input
              className="w-full rounded-xl border p-3"
              placeholder="you@business.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="w-full rounded-xl border p-3" disabled={loading}>
              {loading ? "Sending..." : "Send code"}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyCode} className="space-y-3">
            <p className="text-sm opacity-80">
              Enter the 6-digit code we emailed to {email}.
            </p>
            <input
              className="w-full rounded-xl border p-3 tracking-widest text-center"
              placeholder="123456"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              inputMode="numeric"
              required
            />
            <button className="w-full rounded-xl border p-3" disabled={loading}>
              {loading ? "Verifying..." : "Verify & continue"}
            </button>

            <button
              type="button"
              className="w-full rounded-xl border p-3"
              onClick={() => setStep("email")}
            >
              Use a different email
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
