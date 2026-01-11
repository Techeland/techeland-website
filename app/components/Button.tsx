import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  href?: string;
};

export const Button = ({ children, size, href = "#" }: ButtonProps) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Link
      href={href}
      className={`inline-block rounded-xl px-4 py-2 bg-purple-800 bg-opacity-50 hover:bg-opacity-10 border-2 border-purple-900 shadow-sm hover:shadow-lg ${sizeClasses[size]}`}
    >
      {children}
    </Link>
  );
};
