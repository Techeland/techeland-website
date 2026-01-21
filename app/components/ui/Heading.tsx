import { twMerge } from "tailwind-merge";

const headings = {
  h1: "text-5xl font-bold tracking-tight text-ink",
  h2: "text-4xl font-bold tracking-tight text-ink",
  h3: "text-sm font-mono tracking-wider uppercase mb-2 text-brand-sky",
  h4: "text-2xl font-semibold text-ink mb-2",
} as const;

type HeadingProps = {
  as: keyof typeof headings;
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ as, children, className = "" }: HeadingProps) => {
  const Component = as;
  return (
    <Component className={twMerge(headings[as], className)}>
      {children}
    </Component>
  );
};
