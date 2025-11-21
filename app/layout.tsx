import { siteMeta } from "@/lib/seo";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import { LayoutContent } from "./components/LayoutContent";

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-800 antialiased">
        <LayoutContent>
          <main className="py-12">
            <div className="container">{children}</div>
          </main>
        </LayoutContent>
      </body>
    </html>
  );
}
