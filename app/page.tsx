"use client";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Section from "./components/Section";
import { ViewState } from "./types";
import { Navigation } from "./components/Navigation";
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
