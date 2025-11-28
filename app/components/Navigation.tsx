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
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navigation: React.FC<NavigationProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Floating Nav */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center">
        <nav className=" bg-accent flex items-center px-2 p-2 rounded-full glass-panel shadow-2xl shadow-black/50">
          <Link
            className="flex items-center cursor-pointer px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
            href="/"
          >
            <Cpu className="h-5 w-5 text-indigo-400 mr-2" />
            <span className="font-bold text-slate-200 tracking-tight text-sm">
              TechEland
            </span>
          </Link>

          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <div className="flex items-center space-x-1">
            {navItems.slice(1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 " +
                    (isActive
                      ? "text-slate-100 bg-white/10 shadow-inner"
                      : "text-slate-200 hover:text-white hover:bg-white/5")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
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
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-slate-100 bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
