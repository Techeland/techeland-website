"use client";

import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <Hero />
        </div>
      </section>

      <Services />
    </>
  );
}
