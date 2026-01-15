import { Section } from "./Section";
import { Text } from "./ui/Text";

type BulletPointsProps = {
  title: string;
  description: string;
};

const BulletPoints = ({ title, description }: BulletPointsProps) => {
  return (
    <div>
      <div className="flex items-center py-3 gap-3">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500/10 text-emerald-700 font-semibold"></span>
        <div className="flex flex-col gap-1">
          <Text variant="large" dark>
            {title}
          </Text>
          <Text dark>{description}</Text>
        </div>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <Section
      title="About TechEland"
      subtitle="Why choose me for your web development needs"
    >
      <div className="rounded-2xl bg-slate-900/70 p-6 shadow-sm">
        <Text dark className="mb-4">
          TechEland is a UK-based web development service focused on helping
          small businesses and startups build modern, reliable websites. I
          specialise in React and Next.js, bringing the same tools used by large
          tech companies to small businesses - without unnecessary complexity or
          cost.
        </Text>
        <div>
          <BulletPoints
            title="Modern tech, not outdated builders"
            description="I use React and Next.js to build fast, future-proof websites."
          />
          <BulletPoints
            title="Direct access to the developer"
            description="No agencies, no account managers - you deal directly with me."
          />
          <BulletPoints
            title="Clear pricing & fast delivery"
            description="Straightforward quotes and realistic timelines."
          />
          <BulletPoints
            title="Built to grow with your business"
            description="Your site won’t need rebuilding in 6 months."
          />
        </div>
      </div>
    </Section>
  );
};
