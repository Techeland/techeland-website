import { twMerge } from "tailwind-merge";

const headings = {
  h1: "font-heading text-5xl sm:text-7xl font-extrabold text-ink leading-[1.05] tracking-[-0.03em]",
  h2: "font-heading text-3xl sm:text-4xl font-bold text-ink leading-[1.15] tracking-[-0.02em]",
  h3: "font-mono text-xs uppercase text-brand-sky mb-4 tracking-[0.22em]",
  h4: "font-heading text-xl sm:text-2xl font-semibold text-ink leading-[1.25] tracking-normal mb-2",
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
