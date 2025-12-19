import Link from "next/link";
import { ServicesGrid } from "../components/ServicesGrid";

// Adjust these imports to match your project structure
// e.g. import { Services as ServicesGrid } from "@/components/Services";

export const metadata = {
  title: "Services | TechEland",
  description:
    "Web development services for UK businesses: React/Next.js websites and web applications, Google Cloud deployment, Terraform infrastructure, and database setup.",
};

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function HowItWorksStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 font-semibold">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{q}</h3>
      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{a}</div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono tracking-wider uppercase text-emerald-600">
              Services
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Web development services for UK businesses
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Practical websites, custom web applications, and cloud
              infrastructure — built with React, Next.js and Google Cloud. No
              agencies or outsourcing. Just direct access to a reliable UK-based
              developer.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>React &amp; Next.js</Pill>
              <Pill>Web apps &amp; portals</Pill>
              <Pill>Google Cloud (GCP)</Pill>
              <Pill>Terraform</Pill>
              <Pill>Firestore / Postgres</Pill>
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Discuss a project
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section
        title="How I can help"
        subtitle="Most clients come to me for a website, a web app, or a system that needs hosting and a database. I can handle the full stack end-to-end."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Built for non-technical teams
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              You don’t need to know the tech. I’ll explain options clearly,
              give honest guidance, and keep things simple — while still
              building robust software under the hood.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              One developer, end-to-end delivery
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Website, web app, database, hosting and deployments — you don’t
              need to coordinate multiple contractors. You get a single point of
              contact and consistent delivery.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Typical projects I build
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
            <li>• Marketing websites and landing pages</li>
            <li>• Client portals and secure login areas</li>
            <li>• Internal dashboards and admin tools</li>
            <li>• Booking, quoting or request systems</li>
            <li>• MVPs for early-stage SaaS products</li>
            <li>• Cloud setup, deployments and maintenance</li>
          </ul>
        </div>
      </Section>

      {/* Services grid */}
      <section id="services" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Services
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              Click any service to discuss what you need — even if you’re not
              sure where to start.
            </p>
          </header>

          {/* Anchor targets (so /services#... works cleanly) */}
          <div className="sr-only">
            <span id="website-development" />
            <span id="client-portals-web-apps" />
            <span id="cloud-hosting-deployment" />
            <span id="terraform-iac" />
            <span id="database-setup-management" />
          </div>

          {/* Your existing detailed services cards */}
          <ServicesGrid />
        </div>
      </section>

      {/* How it works */}
      <Section
        title="How it works"
        subtitle="A simple process that keeps you in the loop without drowning you in technical details."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <HowItWorksStep
            number="1"
            title="Quick call and requirements"
            description="We’ll talk through what you need, what success looks like, and what constraints matter (budget, timelines, existing systems)."
          />
          <HowItWorksStep
            number="2"
            title="Clear plan and proposal"
            description="I’ll outline the recommended approach, scope, costs, and a realistic delivery plan — written in plain English."
          />
          <HowItWorksStep
            number="3"
            title="Build and feedback"
            description="I develop the solution in stages with regular updates so you always know what’s happening and what’s coming next."
          />
          <HowItWorksStep
            number="4"
            title="Launch and support"
            description="Once live, I can provide ongoing maintenance, improvements and support — so your system stays secure and reliable."
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently asked questions"
        subtitle="Answers to the common questions I hear from small businesses and non-technical teams."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FAQItem
            q="Do you work with small budgets?"
            a={
              <>
                Yes — I’m used to working with small businesses and startups.
                I’ll suggest an approach that fits your budget and prioritises
                what matters most, then we can build iteratively.
              </>
            }
          />
          <FAQItem
            q="Do I need to know the tech stack?"
            a={
              <>
                Not at all. I’ll explain options in plain English and recommend
                what’s best for your goals. You’ll always understand what we’re
                building and why.
              </>
            }
          />
          <FAQItem
            q="Can you take over an existing site or app?"
            a={
              <>
                Usually, yes. I can review your current setup, suggest
                improvements, and either maintain it or rebuild parts of it
                depending on what’s needed.
              </>
            }
          />
          <FAQItem
            q="Do you provide ongoing support after launch?"
            a={
              <>
                Yes. I can provide maintenance and improvements as-needed or on
                a simple monthly retainer, depending on what suits your
                business.
              </>
            }
          />
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-white p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Have a project in mind?
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              Tell me what you’re trying to build and I’ll come back with a
              clear, honest next step. No pressure and no jargon.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Contact TechEland
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
