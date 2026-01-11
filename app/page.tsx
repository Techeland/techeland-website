"use client";

import { AboutSection } from "./components/About";
import { FinalCTA } from "./components/FinalCTA";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ServicesGrid } from "./components/ServicesGrid";

export default function Home() {
  return (
    <>
      <section id="top" className="py-12 scroll-mt-24">
        <div className="container">
          <Hero />
        </div>
      </section>
      <section id="services" className="py-1 scroll-mt-24">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>
      <section id="about" className="py-1 scroll-mt-24">
        <div className="container">
          <AboutSection />
        </div>
      </section>
      <section id="how-it-works" className="py-1 scroll-mt-24">
        <div className="container">
          <HowItWorks />
        </div>
      </section>
      <section id="contact" className="py-1 scroll-mt-24">
        <div className="container">
          <FinalCTA />
        </div>
      </section>
    </>
  );
}
