import React from "react";
import {
  Cloud,
  Layout,
  Lock,
  Zap,
  Repeat,
  Code,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Heading as="h3">Services for small businesses and startups</Heading>
          <Heading as="h2">
            Practical web development and cloud services
          </Heading>
          <Text variant="large" dark>
            A quick overview of what I can help you build. For full details,
            visit the services page.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-[minmax(220px,auto)]">
          {/* Website Development */}
          <Link
            href="/#services"
            className="md:col-span-3 glass-panel rounded-2xl p-8 relative overflow-hidden
                       group bg-slate-900/70 border border-slate-700 hover:border-brand-teal
                       transition-transform hover:-translate-y-0.5"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code className="w-14 h-14 text-slate-100" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/40">
                <Cpu className="w-6 h-6 text-red-300" />
              </div>
              <Heading as="h4">Website Development</Heading>
              <Text dark>
                Custom React &amp; Next.js websites that load quickly, look
                professional and are easy to update.
              </Text>
              <Text variant="tags" dark>
                React · Next.js · TypeScript
              </Text>
            </div>
          </Link>

          {/* Web Apps & Portals */}
          <Link
            href="/#services"
            className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden
                       group bg-slate-900/70 border border-slate-700 hover:border-brand-teal
                       transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/40">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <Heading as="h4">Web Apps &amp; Client Portals</Heading>
              <Text dark>
                Secure login areas, dashboards and tools tailored to how your
                business actually works.
              </Text>
              <Text variant="tags" dark>
                Portals · Dashboards · Internal tools
              </Text>
            </div>
          </Link>

          {/* Cloud Hosting */}
          <Link
            href="/#services"
            className="md:col-span-4 glass-panel rounded-2xl p-8
                       bg-slate-900/70 border border-slate-700 hover:border-brand-teal
                       transition-transform hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40">
                <Cloud className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
            <Heading as="h4">
              Cloud Hosting &amp; Deployment (Google Cloud)
            </Heading>
            <Text dark>
              Reliable, secure deployments on Google Cloud Platform so your site
              or app is always available and ready to grow.
            </Text>
            <Text variant="tags" dark>
              GCP · CI/CD · Domains &amp; DNS
            </Text>
          </Link>

          {/* Terraform */}
          <Link
            href="/#services"
            className="md:col-span-2 glass-panel rounded-2xl p-8
                       bg-slate-900/70 border border-slate-700 hover:border-brand-teal
                       transition-transform hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center border border-pink-500/40">
                <Repeat className="w-6 h-6 text-pink-300" />
              </div>
            </div>
            <Heading as="h4">Infrastructure as Code (Terraform)</Heading>
            <Text dark>
              Fully scripted cloud infrastructure that’s repeatable, auditable
              and easy to change over time.
            </Text>
            <Text variant="tags" dark>
              Terraform · GCP · Automation
            </Text>
          </Link>

          {/* Databases */}
          <Link
            href="/#services"
            className="md:col-span-3 glass-panel rounded-2xl p-8
                       bg-slate-900/70 border border-slate-700 hover:border-brand-teal
                       transition-transform hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                <Lock className="w-6 h-6 text-emerald-300" />
              </div>
            </div>
            <Heading as="h4">Database Setup &amp; Management</Heading>
            <Text dark>
              Designing and managing databases for customer data, internal
              systems or full application backends.
            </Text>
            <Text variant="tags" dark>
              Firestore · Postgres · Supabase · Serverless
            </Text>
          </Link>
        </div>
      </div>
    </section>
  );
};
