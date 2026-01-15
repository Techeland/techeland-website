import { twMerge } from "tailwind-merge";

const headings = {
  h1: "",
  h2: "text-4xl font-bold text-slate-900 tracking-tight",
  h3: "text-sm text-yellow-400 font-mono tracking-wider uppercase mb-2",
  h4: "text-2xl font-semibold text-white mb-2",
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
