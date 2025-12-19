"use client";

import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ServicesGrid } from "./components/ServicesGrid";

export default function Home() {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <Hero />
        </div>
      </section>
      <section className="py-1">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <HowItWorks />
        </div>
      </section>
    </>
  );
}
