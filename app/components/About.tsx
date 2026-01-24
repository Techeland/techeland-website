import { Section } from "./Section";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { Gauge, ArrowRightLeft, Speech } from "lucide-react";

type BulletPointsProps = {
  title: string;
  description: string;
};

type TrustCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tone: string;
};

const BulletPoints = ({ title, description }: BulletPointsProps) => {
  return (
    <div>
      <div className="flex items-start gap-3 py-4 border-b border-line/40 last:border-b-0">
        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-brand-teal/40 ring-1 ring-brand-teal/30" />{" "}
        <div className="flex flex-col gap-1">
          <Text as="p" className="text-ink/90 font-semibold tracking-tight">
            {title}
          </Text>
          <Text className="text-muted">{description}</Text>
        </div>
      </div>
    </div>
  );
};

const TrustCards = ({
  title,
  description,
  icon,
  tone = "teal",
}: TrustCardProps) => {
  const toneClasses =
    tone === "teal"
      ? "bg-brand-teal/10 border-brand-teal/20 text-brand-teal"
      : "bg-brand-sky/10 border-brand-sky/20 text-brand-sky";
  return (
    <div className="relative rounded-2xl border border-line/70 bg-base/30 p-6 backdrop-blur">
      <Heading as="h4" className="mb-2 pr-14 leading-tight tracking-tight">
        {title}
      </Heading>
      <div
        className={`absolute top-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${toneClasses}`}
      >
        {icon}
      </div>
      <Text>{description}</Text>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <Section
      title="About TechEland"
      subtitle="Built by a full-time software engineer - delivered like a product, not a template"
    >
      <div className="rounded-2xl border border-line/70 bg-base/35 p-8 shadow-soft/30 backdrop-blur">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Text className="text-muted">
              I'm Matt - a UK based software engineer building fast, reliable
              websites and client portals for small businesses that want
              professional results without agency.
            </Text>

            <Text className="text-muted">
              I work with a small number of clients at a time so delivery stays
              quick and communication stays clear. I build with the same
              approach I use in my day job; clear requirements, clean code,
              performance-first and sensible tooling so your site is easy to
              maintain and grow. If you need changes later, you won't be
              starting from scratch.
            </Text>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-line/70 bg-surface/30 px-3 py-1 text-xs text-ink/85">
                Full-time software engineer
              </span>
              <span className="rounded-full border border-line/70 bg-surface/30 px-3 py-1 text-xs text-ink/85">
                React/Next.js specialist
              </span>
              <span className="rounded-full border border-line/70 bg-surface/30 px-3 py-1 text-xs text-ink/85">
                UK-based, direct contact
              </span>
              <span className="rounded-full border border-line/70 bg-surface/30 px-3 py-1 text-xs text-ink/85">
                Performance + SEO focused
              </span>
            </div>
            <Text className="text-muted">
              Experience across production systems and real-world business
              tooling.
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <TrustCards
              title="Experience that transfers"
              description="I work on production systems and real-world tooling so your site is built with reliability, security and maintainability in mind."
              icon={<ArrowRightLeft className="w-6 h-6" />}
              tone="teal"
            />
            <TrustCards
              title="Built for speed"
              description="Fast loan times, clean structure, and a solid fouundation for SEO and enquiries. No bloated page builders."
              icon={<Gauge className="w-6 h-6" />}
              tone="sky"
            />
            <TrustCards
              title="Clear communication"
              description="You'll get updates, timelines and honest advice. If something isn't worth your money, I'll tell you."
              icon={<Speech className="w-6 h-6" />}
              tone="teal"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
