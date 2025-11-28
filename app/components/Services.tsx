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

export const Services: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm text-emerald-400 font-mono tracking-wider uppercase mb-2">
            Services for small businesses and startups
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
            Practical web development and cloud services
          </h3>
          <p className="mt-3 max-w-2xl text-slate-200 text-sm sm:text-base">
            A quick overview of what I can help you build. For full details,
            visit the services page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-[minmax(220px,auto)]">
          {/* Website Development */}
          <Link
            href="/services#website-development"
            className="md:col-span-3 glass-panel rounded-2xl p-8 relative overflow-hidden
                       group bg-slate-900/70 border border-slate-700 hover:border-emerald-400/60
                       transition-transform hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code className="w-14 h-14 text-slate-100" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/40">
                <Cpu className="w-6 h-6 text-red-300" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                Website Development
              </h4>
              <p className="text-sm text-slate-200 max-w-md">
                Custom React &amp; Next.js websites that load quickly, look
                professional and are easy to update.
              </p>
              <p className="mt-3 text-xs font-mono uppercase tracking-wide text-emerald-300">
                React · Next.js · TypeScript
              </p>
            </div>
          </Link>

          {/* Web Apps & Portals */}
          <Link
            href="/services#client-portals-web-apps"
            className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden
                       group bg-slate-900/70 border border-slate-700 hover:border-emerald-400/60
                       transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/40">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                Web Apps &amp; Client Portals
              </h4>
              <p className="text-sm text-slate-200 max-w-md">
                Secure login areas, dashboards and tools tailored to how your
                business actually works.
              </p>
              <p className="mt-3 text-xs font-mono uppercase tracking-wide text-emerald-300">
                Portals · Dashboards · Internal tools
              </p>
            </div>
          </Link>

          {/* Cloud Hosting */}
          <Link
            href="/services#cloud-hosting-deployment"
            className="md:col-span-4 glass-panel rounded-2xl p-8
                       bg-slate-900/70 border border-slate-700 hover:border-emerald-400/60
                       transition-transform hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40">
                <Cloud className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Cloud Hosting &amp; Deployment (Google Cloud)
            </h4>
            <p className="text-sm text-slate-200 max-w-xl">
              Reliable, secure deployments on Google Cloud Platform so your site
              or app is always available and ready to grow.
            </p>
            <p className="mt-3 text-xs font-mono uppercase tracking-wide text-emerald-300">
              GCP · CI/CD · Domains &amp; DNS
            </p>
          </Link>

          {/* Terraform */}
          <Link
            href="/services#terraform-iac"
            className="md:col-span-2 glass-panel rounded-2xl p-8
                       bg-slate-900/70 border border-slate-700 hover:border-emerald-400/60
                       transition-transform hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center border border-pink-500/40">
                <Repeat className="w-6 h-6 text-pink-300" />
              </div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Infrastructure as Code (Terraform)
            </h4>
            <p className="text-sm text-slate-200 max-w-md">
              Fully scripted cloud infrastructure that’s repeatable, auditable
              and easy to change over time.
            </p>
            <p className="mt-3 text-xs font-mono uppercase tracking-wide text-emerald-300">
              Terraform · GCP · Automation
            </p>
          </Link>

          {/* Databases */}
          <Link
            href="/services#database-setup-management"
            className="md:col-span-3 glass-panel rounded-2xl p-8
                       bg-slate-900/70 border border-slate-700 hover:border-emerald-400/60
                       transition-transform hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                <Lock className="w-6 h-6 text-emerald-300" />
              </div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Database Setup &amp; Management
            </h4>
            <p className="text-sm text-slate-200 max-w-xl">
              Designing and managing databases for customer data, internal
              systems or full application backends.
            </p>
            <p className="mt-3 text-xs font-mono uppercase tracking-wide text-emerald-300">
              Firestore · Postgres · Supabase · Serverless
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
