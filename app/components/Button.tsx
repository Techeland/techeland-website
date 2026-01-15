import { SizeLimit } from "next";
import Link from "next/link";

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const baseClasses =
  "inline-block rounded-xl px-4 py-2 bg-purple-800 bg-opacity-50 hover:bg-opacity-10 border-2 border-purple-900 shadow-sm hover:shadow-lg";

type LinkButtonProps = {
  children: React.ReactNode;
  size: Size;
  href: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type NativeButtonProps = {
  children: React.ReactNode;
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
  const { size, className, children } = props;

  const classes = `${baseClasses} ${sizeClasses[size]} ${className ?? ""}`;

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
