import { Section } from "./Section";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

type HowItWorksProps = {
  number: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const HowItWorksStep = ({
  number,
  title,
  description,
  children,
}: HowItWorksProps) => {
  return (
    <>
      <div className="relative mt-10">
        <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.08),transparent_60%)]" />
        <div className="relative grid gap-8">
          <div className="relative pl-14">
            {/* connector line */}
            <div className="absolute left-4 top-0 h-full w-px bg-line/70" />

            {/* number badge */}
            <div className="absolute left-0 top-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/12 border border-brand-teal/25 text-brand-teal font-semibold">
                {number}
              </span>
            </div>

            {/* card */}
            <div className="rounded-2xl border border-line/70 bg-base/35 p-6 shadow-soft/30 backdrop-blur hover:bg-base/45 transition-colors">
              <div className="flex items-center gap-3">
                <Heading as="h4" className="mb-0">
                  {title}
                </Heading>
              </div>

              <Text className="pt-3 text-muted">{description}</Text>

              {children ? <div className="pt-4">{children}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const HowItWorks = () => {
  return (
    <Section
      title="How it works"
      subtitle="A simple, transparent process — clear scope, clear pricing, and no long-term lock-ins."
    >
      <div className="mt-10 grid gap-8">
        <HowItWorksStep
          number="1"
          title="Free discovery call"
          description="A short, no-pressure call to understand your business, goals and requirements. If I’m not the right fit, I’ll tell you honestly."
        />

        <HowItWorksStep
          number="2"
          title="Fixed scope & pricing"
          description="You’ll receive a clear outline of what’s included, how long it will take, and the total cost."
        >
          <ul className="mt-2 space-y-2">
            {[
              "What will be built",
              "What’s included",
              "Timeline and key milestones",
              "Total cost (no surprises)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-sky/80" />
                <Text as="span" className="text-ink/85">
                  {item}
                </Text>
              </li>
            ))}
          </ul>

          <Text className="mt-4 text-ink/80">
            No vague estimates. No surprise charges.
          </Text>
        </HowItWorksStep>

        <HowItWorksStep
          number="3"
          title="Build & feedback"
          description="I’ll design and build your site or portal, sharing progress and gathering feedback as we go. Most standard websites are completed in days, not months."
        />

        <HowItWorksStep
          number="4"
          title="Launch & handover"
          description="Once approved, your site goes live. You’ll get a handover and guidance on what’s next — including how to update content and request changes."
        />

        <HowItWorksStep
          number="5"
          title="Ongoing care (optional)"
          description="If you choose a care plan, I’ll keep your site monitored, updated and supported — so you don’t have to worry about downtime or maintenance. Cancel anytime."
        />
      </div>
    </Section>
  );
};
