import { Section } from "./Section";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

export const FinalCTA = () => {
  return (
    <Section title="">
      <div className=" flex gap-3 flex-col items-center rounded-2xl bg-slate-900/70 p-6 shadow-sm ">
        <Heading as="h2" className="text-slate-300">
          Have a project in mind?
        </Heading>
        <Text dark>
          Tell me what you’re trying to build and I’ll come back with a clear,
          honest next step. No pressure and no jargon.
        </Text>{" "}
        <Button size="lg">
          <Text variant="large" dark>
            Get in Touch
          </Text>
        </Button>
      </div>
    </Section>
  );
};
