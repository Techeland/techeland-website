"use client";
import React, { useState } from "react";
import { Menu, X, Code2, Cpu } from "lucide-react";
import { ViewState } from "../types";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const navItems = [
  { label: "Home", id: "top" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Contact", id: "contact" },
];

export const Navigation: React.FC<NavigationProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Close mobile menu so layout doesn't shift after scrolling
    setIsOpen(false);

    // Smooth scroll
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Update URL hash without navigation
    window.history.replaceState(null, "", `/#${id}`);
  };

  return (
    <>
      {/* Desktop Floating Nav */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center">
        <nav className=" bg-base/70 backdrop-blur flex items-center px-2 p-2 rounded-full glass-panel shadow-2xl shadow-brand-teal/50">
          <button
            onClick={() => scrollToId("top")}
            className="flex items-center cursor-pointer px-4 py-2 rounded-full hover:text-brand-teal transition-colors"
            type="button"
          >
            <Cpu className="h-5 w-5 text-indigo-400 mr-2" />
            <span className="font-bold text-slate-200 tracking-tight text-sm">
              TechEland
            </span>
          </button>

          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.slice(1).map((item) => {
                const isActive = pathname === "/";
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToId(item.id)}
                    className={
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 " +
                      (isActive
                        ? "text-slate-200 hover:text-brand-teal hover:bg-white/5"
                        : "text-slate-200 hover:text-white hover:bg-white/5")
                    }
                    type="button"
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Bar (Standard sticky for usability) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass-panel border-b-0">
        <div className="  bg-accent flex items-center justify-between px-4 h-16">
          <Link
            className="flex items-center text-slate-100"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Cpu className="h-6 w-6 text-indigo-400 mr-2" />
            <span className="font-bold text-lg  text-slate-200">TechEland</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-accent border-b border-slate-800 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToId(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors text-slate-300 hover:text-white hover:bg-white/5"
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
