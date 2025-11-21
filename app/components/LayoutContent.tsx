"use client";

import { useState } from "react";
import { ViewState } from "../types";
import { Navigation } from "./Navigation";
import Footer from "./Footer";

export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);

  return (
    <>
      <Navigation currentView={currentView} setView={setView} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
