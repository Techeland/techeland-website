import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

export type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;

  /** optional: lets you alternate backgrounds easily */
  tone?: "base" | "surface";
};

export const Section = ({
  id,
  title,
  subtitle,
  children,
  tone = "surface",
}: SectionProps) => {
  const bg = tone === "surface" ? "bg-surface" : "bg-base";

  return (
    <section id={id} className={`py-16 sm:py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="mb-10 sm:mb-12 max-w-3xl">
            {title && (
              <Heading as="h2" className="leading-[1.1] tracking-tight">
                {title}
              </Heading>
            )}

            {subtitle && (
              <Text
                variant="subtitle"
                className="mt-3 text-muted text-lg sm:text-xl leading-relaxed"
              >
                {subtitle}
              </Text>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
};
