import { ReactNode } from "react";
import { LayoutContent } from "../components/LayoutContent";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutContent>
      <main className="py-12">
        <div className="container">{children}</div>
      </main>
    </LayoutContent>
  );
}
