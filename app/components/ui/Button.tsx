import Link from "next/link";

const buttonStyles = {
  primary: {
    light:
      "bg-purple-800 bg-opacity-50 hover:bg-opacity-70 border-2 border-purple-900 text-white",
    dark: "bg-purple-600 bg-opacity-60 hover:bg-opacity-80 border-2 border-purple-400 text-white",
  },
  secondary: {
    light:
      "bg-slate-200 hover:bg-slate-300 border-2 border-slate-400 text-slate-900",
    dark: "bg-slate-700 hover:bg-slate-600 border-2 border-slate-500 text-white",
  },
  outline: {
    light:
      "bg-transparent hover:bg-slate-100 border-2 border-slate-900 text-slate-900",
    dark: "bg-transparent hover:bg-slate-800 border-2 border-slate-300 text-slate-300",
  },
} as const;

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof buttonStyles;
  size?: keyof typeof sizeStyles;
  dark?: boolean;
  className?: string;
};

export const Button = ({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  dark = false,
  className = "",
}: ButtonProps) => {
  const theme = dark ? "dark" : "light";

  return (
    <Link
      href={href}
      className={`inline-block rounded-xl shadow-sm hover:shadow-lg transition-all ${buttonStyles[variant][theme]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Link>
  );
};
