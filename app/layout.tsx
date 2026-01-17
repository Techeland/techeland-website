import { siteMeta } from "@/lib/seo";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-800 antialiased">{children}</body>
    </html>
  );
}
