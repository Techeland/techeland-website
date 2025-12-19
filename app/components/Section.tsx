import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

export type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Section = ({ id, title, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Heading as="h2">{title}</Heading>
          {subtitle && (
            <Text variant="large" dark>
              {subtitle}
            </Text>
          )}
        </header>
        {children}
      </div>
    </section>
  );
};
