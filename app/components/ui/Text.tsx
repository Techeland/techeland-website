import { twMerge } from "tailwind-merge";

const textStyles = {
  body: {
    dark: "font-sans text-base leading-relaxed text-muted",
    light: "font-sans text-base leading-relaxed text-slate-700",
  },
  small: {
    dark: "font-sans text-sm text-muted/90",
    light: "font-sans text-sm text-slate-600",
  },
  large: {
    dark: "font-sans text-lg font-semibold",
    light: "font-sans text-lg font-semibold",
  },
  subtitle: {
    dark: "font-sans text-lg sm:text-xl font-medium text-muted leading-relaxed",
    light:
      "font-sans text-lg sm:text-xl font-medium text-muted leading-relaxed",
  },
  muted: {
    dark: "font-sans text-sm text-muted",
    light: "font-sans text-sm text-slate-500",
  },
  tags: {
    dark: "font-mono mt-3 text-xs uppercase tracking-[0.18em] text-brand-sky",
    light: "font-mono mt-3 text-xs uppercase tracking-[0.18em] text-slate-700",
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
