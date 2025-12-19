import { Section } from "./Section";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

type HowItWorksProps = {
  number: string;
  title: string;
  description: string;
};

const HowItWorksStep = ({ number, title, description }: HowItWorksProps) => {
  return (
    <div className="rounded-2xl bg-slate-900/70 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 font-semibold">
          {number}
        </span>
        <Heading as="h4">{title}</Heading>
      </div>
      <Text dark className="pt-3">
        {description}
      </Text>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <Section
      title="How it works"
      subtitle="A simple process that keeps you in the loop without drowning you in technical details."
    >
      <div className="grid gap-20 md:grid-cols-1">
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
          description="I'll develop the solution in stages with regular updates so you always know what’s happening and what’s coming next."
        />
        <HowItWorksStep
          number="4"
          title="Launch and support"
          description="Once live, I can provide ongoing maintenance, improvements and support — so your system stays secure and reliable."
        />
      </div>
    </Section>
  );
};
