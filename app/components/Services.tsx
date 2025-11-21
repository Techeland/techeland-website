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

export const Services: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm text-indigo-400 font-mono tracking-wider uppercase mb-2">
            Scope of Work
          </h2>
          <h3 className="text-4xl font-bold text-cyan-500 tracking-tight">
            Full-Cycle{" "}
            <span className="text-slate-700">Product Engineering</span>
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="   rounded-lg grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Large Item */}
          <div className="md:col-span-3 glass-panel rounded-2xl p-8 relative overflow-hidden group bg-slate-700/40 border-indigo-500/30 border">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code className="w-16 h-16 text-white" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-start">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/30">
                <Cpu className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Website Development
                </h4>

                <p className="text-slate-700 leading-relaxed max-w-md">
                  I build custom websites using React and Next.js - the same
                  technolgies used by top tech companies. Your site will load
                  quickly, work perfectly on all devices, and be simple to
                  update as your business grows. Ongoing support is also
                  available so you don't need to worry about maintenence
                </p>
                <br />
                <p className="text-slate-700 leading-relaxed max-w-md">
                  Perfect for:
                </p>
                <br />
                <ul className="space-y-4 text-slate-700 mb-8 flex-1">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                    <span>
                      Small businesses needing a professional online presence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                    <span>Startups launching their first website </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                    <span>
                      Companies wanting to replace outdated or slow sites
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tall Item */}
          <div className=" md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group border-slate-500/30 border bg-slate-700/40">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">
                Client Portals & Web Applications
              </h4>

              <p className="text-slate-700 leading-relaxed max-w-md">
                Whether you need a client login area, a booking system, internal
                dashboards or a full web application, I can design and build a
                solution that fits your workflows and itegrates with your
                existing tools.
              </p>
              <br />
              <p className="text-slate-700 leading-relaxed max-w-md">
                Perfect for:
              </p>
              <br />
              <ul className="space-y-4 text-slate-700 mb-8 flex-1">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                  <span>
                    Businesses wanting customers to log in and manage
                    information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                  <span>Teams needing internal tools to save time</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                  <span>Startups building their first MVP or SaaS product</span>
                </li>
              </ul>
              {/* <div className="text-sm font-mono text-cyan-400 pt-4 border-t border-white/10">
                Certified Cloud Architect
              </div> */}
            </div>
          </div>

          {/* Standard Item */}
          <div className=" md:col-span-4 glass-panel rounded-2xl p-8 hover:bg-white/5 bg-slate-700/40 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Cloud Hosting & Deployment (Google Cloud)
            </h4>
            <p className="text-slate-700 leading-relaxed">
              I deploy websites and applications using Google Cloud Platform
              (GCP). Your system will be secure, monitored and able to handle
              growth without downtime.
            </p>
            <br />
            <p className="text-slate-700 leading-relaxed max-w-md">Includes:</p>
            <br />
            <ul className="space-y-4 text-slate-700 mb-8 flex-1">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Cloud hosting setup</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Secure deployments</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Email, DNS and domain management</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Ongoing maintenance if needed</span>
              </li>
            </ul>
          </div>

          <div className=" md:col-span-1"></div>

          {/* Standard Item */}
          <div className="md:col-span-2 glass-panel rounded-2xl p-8 hover:bg-white/5 bg-slate-700/40 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                <Repeat className="w-6 h-6 text-pink-400" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Terraform (IaC)
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Using Terraform, I can set up your cloud infrastructure in a way
              that's repeatable, version-controlled and safe. If you ever want
              to migrate, scale or reproduce your environment, everything is
              clearly defined and automated.
            </p>
            <br />
            <p className="text-slate-700 leading-relaxed max-w-md">Benefits:</p>
            <br />
            <ul className="space-y-4 text-slate-700 mb-8 flex-1">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>No undocumented cloud setups</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Faster deployments</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Easier future upgrades</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Lower long-term costs</span>
              </li>
            </ul>
          </div>

          {/* Wide Item */}
          <div className="md:col-span-3 glass-panel rounded-2xl p-8  hover:border-slate-600 bg-slate-700/40 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Database Setup & Management
            </h4>
            <p className="text-slate-700 leading-relaxed">
              I help businesses design and set up databases that match their
              needs - whether that's a simple customer database or a more
              complex application backend.
            </p>
            <br />
            <p className="text-slate-700 leading-relaxed max-w-md">
              Technologies:
            </p>
            <br />
            <ul className="space-y-4 text-slate-700 mb-8 flex-1">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Firestore</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Supabase</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Postgres</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Edge databases/severless storage</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed max-w-md">Includes:</p>
            <br />
            <ul className="space-y-4 text-slate-700 mb-8 flex-1">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Data structure planning</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Secure setup</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>API integrations</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                <span>Long-term maintenance options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
