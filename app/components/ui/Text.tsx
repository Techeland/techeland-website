const textStyles = {
  body: {
    light: "text-base text-slate-700 leading-relaxed",
    dark: "text-base text-slate-300 leading-relaxed",
  },
  small: {
    light: "text-sm text-slate-600",
    dark: "text-sm text-slate-400",
  },
  large: {
    light: "text-lg font-bold text-slate-700",
    dark: "text-lg font-bold text-slate-300",
  },
  muted: {
    light: "text-sm text-slate-500",
    dark: "text-sm text-slate-400",
  },
  tags: {
    light: "mt-3 text-xs font-mono uppercase tracking-wide text-emerald-700",
    dark: "mt-3 text-xs font-mono uppercase tracking-wide text-emerald-300",
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
  dark = false,
  children,
  className = "",
}: TextProps) => {
  const theme = dark ? "dark" : "light";
  return (
    <Component className={`${textStyles[variant][theme]} ${className}`}>
      {children}
    </Component>
  );
};
