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
      <body className="bg-base text-ink antialiased">{children}</body>
    </html>
  );
}
