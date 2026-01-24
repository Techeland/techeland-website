"use client";

import React, { useState } from "react";
import { Section } from "./Section";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

type FormState = "idle" | "submitting" | "success" | "error";

export const FinalCTA = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const [state, setState] = useState<FormState>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      company_website: String(data.get("company_website") ?? "").trim(),
    };
    console.log(payload);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json?.error || "Failed");

      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <Section title="">
      <div className="rounded-2xl bg-slate-900/70 p-6 shadow-sm border border-white/10">
        <div className="text-center">
          <Heading as="h2" className="text-slate-200">
            Have a project in mind?
          </Heading>
          <Text className="mt-2 text-slate-300">
            Tell me what you’re trying to build and I’ll come back with a clear,
            honest next step. No pressure and no jargon.
          </Text>
        </div>

        <div className="mt-6 grid  gap-4 items-start">
          {/* LEFT: Booking panel */}
          <div className="self-start rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-surface/20 to-brand-sky/20">
            <Heading as="h3">Book a free 15-min call</Heading>
            <Text className="mt-2 text-slate-300">
              Quick chat to understand what you need and suggest the best next
              step.
            </Text>

            <div className="mt-6 flex flex-col gap-3">
              <Button size="lg" href={calendlyUrl || "#"}>
                <Text variant="large" className="text-center text-inherit">
                  Book with Calendly
                </Text>
              </Button>

              <Button
                size="lg"
                href="mailto:hello@techeland.co.uk?subject=TechEland%20enquiry"
              >
                <Text variant="large" className="text-center text-inherit">
                  Email: hello@techeland.co.uk
                </Text>
              </Button>

              <p className="text-sm text-slate-300/80 mt-2">
                Free • No commitment • Reply within 24 hours
              </p>
            </div>
          </div>

          {/* RIGHT: Form panel (dark, matches system) */}
          <div className="rounded-2xl p-6 border border-white/10 bg-slate-950/40">
            <Heading as="h3">Send a message</Heading>
            <Text className="mt-1 text-slate-300">
              Prefer email-style contact? Fill this in and I’ll get back to you.
            </Text>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200">
                  What do you need?
                </label>
                <select
                  name="service"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                  defaultValue="Website"
                >
                  <option value="Website">Website build / redesign</option>
                  <option value="Care">Website care / maintenance</option>
                  <option value="WebApp">Web app / portal</option>
                  <option value="NotSure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                  placeholder="Tell me a bit about what you’re looking for, any links, and your timeframe."
                />
              </div>

              <Button size="lg" type="submit">
                <Text variant="large" className="text-center text-inherit">
                  {state === "submitting" ? "Sending…" : "Send message"}
                </Text>
              </Button>

              {state === "success" && (
                <p className="text-sm text-emerald-300">
                  Sent! I’ll get back to you within 24 hours.
                </p>
              )}

              {state === "error" && (
                <p className="text-sm text-red-300">
                  Something went wrong sending that. Please email
                  hello@techeland.co.uk instead.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
