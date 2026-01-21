import { twMerge } from "tailwind-merge";

const textStyles = {
  body: {
    light: "text-base leading-relaxed text-slate-700", // only if you still have light sections
    dark: "text-base leading-relaxed text-muted",
  },
  small: {
    light: "text-sm text-slate-600",
    dark: "text-sm text-muted/90",
  },
  large: {
    light: "text-lg font-bold text-slate-900",
    dark: "text-lg font-bold text-ink",
  },
  muted: {
    light: "text-sm text-slate-500",
    dark: "text-sm text-muted",
  },
  tags: {
    light: "mt-3 text-xs font-mono uppercase tracking-wide text-slate-700",
    dark: "mt-3 text-xs font-mono uppercase tracking-wide text-brand-sky",
  },
} as const;

type TextProps = {
  as?: "p" | "span" | "div";
  variant?: keyof typeof textStyles;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Text = ({
  as: Component = "p",
  variant = "body",
  dark = true,
  children,
  className = "",
}: TextProps) => {
  const theme = dark ? "dark" : "light";
  return (
    <Component className={twMerge(textStyles[variant][theme], className)}>
      {children}
    </Component>
  );
};
