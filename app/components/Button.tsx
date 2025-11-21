import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-xl px-4 py-2 border shadow-sm hover:shadow-lg"
    >
      {children}
    </Link>
  );
}
