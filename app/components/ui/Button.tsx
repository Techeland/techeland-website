import Link from "next/link";

type ButtonStyles = "primary" | "secondary" | "outline";
type Theme = "light" | "dark";
type Size = "sm" | "md" | "lg";

const buttonStyles = {
  primary: {
    light:
      "bg-brand-teal hover:opacity-90 border border-brand-teal/20 text-onBrand",
    dark: "bg-brand-teal hover:opacity-90 border border-brand-teal/20 text-onBrand",
  },
  secondary: {
    light:
      "bg-slate-200 hover:bg-slate-300 border border-slate-300 text-slate-900",
    dark: "bg-surface hover:bg-surface/80 border border-line text-ink",
  },
  outline: {
    light:
      "bg-transparent hover:bg-slate-100 border border-slate-900 text-slate-900",
    dark: "bg-transparent hover:bg-brand-sky/10 border border-brand-sky/50 text-ink",
  },
} as const;

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-2xl transition-colors shadow-sm hover:shadow-md";

type LinkButtonProps = {
  children: React.ReactNode;
  variant?: ButtonStyles;
  theme?: Theme;
  size: Size;
  href: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type NativeButtonProps = {
  children: React.ReactNode;
  variant?: ButtonStyles;
  theme?: Theme;
  size: Size;
  href?: never;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

const isLinkButton = (props: ButtonProps): props is LinkButtonProps => {
  return (props as LinkButtonProps).href !== undefined;
};

export const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    theme = "dark",
    size,
    className,
    children,
  } = props;

  const classes = `${baseClasses} ${sizeClasses[size]} ${
    buttonStyles[variant][theme]
  } ${className ?? ""}`;

  if (isLinkButton(props)) {
    const { href, target, rel, onClick } = props;

    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  const { type = "button", disabled, onClick } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
};
