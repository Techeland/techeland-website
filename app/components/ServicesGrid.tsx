import React from "react";
import {
  Cloud,
  Layout,
  Lock,
  Zap,
  Repeat,
  Code,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

type ServiceCardProps = {
  title: string;
  description: string;
  amount: string;
  tags: string[];
  fromLabel?: string;
  recurring?: string;
  href?: string;
  icon: React.ReactNode;
  tone?: "teal" | "sky";
};

const ServiceCard = ({
  title,
  description,
  amount,
  tags,
  fromLabel = "From",
  recurring = "",
  href = "/services",
  icon,
  tone = "teal",
}: ServiceCardProps) => {
  const toneClasses =
    tone === "teal"
      ? "bg-brand-teal/10 border-brand-teal/20 text-brand-teal"
      : "bg-brand-sky/10 border-brand-sky/20 text-brand-sky";

  return (
    <Link
      href={href}
      className="
        group rounded-2xl border border-line/85 bg-surface/40 p-7 shadow-soft/30 backdrop-blur
        hover:bg-base/45 hover:border-line flex flex-col hover:-translate-y-0.5 transition-all
      "
    >
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${toneClasses}`}
      >
        {icon}
      </div>
      <Heading as="h4" className="mb-1 leading-tight">
        {title}
      </Heading>
      <Text className="mt-3 text-muted flex-1">{description}</Text>
      <div className="mt-6 flex items-end justify-between gap-4 pt-3 border-t border-line/60">
        <div className="flex items-baseline gap-2 min-w-0">
          <Text as="span" className="text-muted text-sm">
            {fromLabel}
          </Text>
          <Text
            as="span"
            className="text-ink font-semibold tracking-tight text-xl sm:text-2xl leading-none"
          >
            {amount}
          </Text>
          {recurring && (
            <Text
              as="span"
              className="text-muted font-medium tracking-tight text-sm leading-none"
            >
              {recurring}
            </Text>
          )}
        </div>

        <div className="flex flex-wrap justify-end gap-2 max-w-[45%]">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-sky/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-56 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full
                  bg-[radial-gradient(circle,rgba(45,212,191,0.08),transparent_65%)] blur-3xl"
        />
        <div
          className="absolute -top-64 left-2/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full
                  bg-[radial-gradient(circle,rgba(56,189,248,0.06),transparent_65%)] blur-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/70 to-surface" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Heading as="h3">Services for small businesses and startups</Heading>
          <Heading as="h2">
            Websites and tools built for speed, reliability and enquiries
          </Heading>
          <Text variant="subtitle">
            A quick overview of what I offer. For more detail, view the services
            page.
          </Text>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Simple websites"
            description="Fast, professional sites built to generate enquiries — ideal for local services, trades, and small businesses."
            amount="£250"
            tags={["Design", "Build"]}
            icon={<Layout className="h-6 w-6" />}
            tone="teal"
            href="/services"
          />

          <ServiceCard
            title="Portals & ecommerce"
            description="Client portals, dashboards and online selling — tailored to how your business operates."
            amount="£500"
            tags={["Portals", "Shops"]}
            icon={<Globe className="h-6 w-6" />}
            tone="sky"
            href="/services"
          />

          <ServiceCard
            title="Monitoring & care"
            description="Ongoing monitoring, updates and support to keep your website fast, secure and online. Cancel anytime."
            amount="£30"
            recurring="/ month"
            tags={["Support", "Uptime"]}
            icon={<Lock className="h-6 w-6" />}
            tone="teal"
            fromLabel=""
            href="/services#care"
          />
        </div>
      </div>
    </section>
  );
};
