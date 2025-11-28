import { Cloud, Cpu, Repeat, Zap, Lock } from "lucide-react";

type ServiceCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  label?: string;
  bullets?: string[];
  colour?: string;
};

const services: ServiceCardProps[] = [
  {
    title: "Website Development",
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    description:
      "I build custom websites using React and Next.js - the same technologies used by top tech companies. Your site will load quickly, work perfectly on all devices, and be simple to update as your business grows. Ongoing support is also available so you don't need to worry about maintenance",
    label: "Perfect for:",
    bullets: [
      "Small businesses needing a professional online presense",
      "Startups launching their first website",
      "Companies wanting to replace outdated or slow sites",
    ],
  },
  {
    title: "Client Portals & Web Applications",
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    description:
      "Whether you. need a client login area, a booking system, internal dashboards or a full web application, I can design an build a solution that fits your workflows and integrates with your exisiting tools.",
    label: "Perfect for:",
    bullets: [
      "Businesses wanting customers to log in and manage information",
      "Teams needing internal tools to save time",
      "Startups building their first MVP or SaaS product",
    ],
  },
  {
    title: "Cloud Hosting & Deployment (Google Cloud)",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    description:
      "I deploy websites and applications using Google Cloud Platform (GCP). Your system will be secure, monitored and able to handle growth without downtime.",
    label: "Includes:",
    bullets: [
      "Cloud hosting setup",
      "Secure deployments",
      "Email, DNS and domain management",
      "Ongoing maintenance if needed",
    ],
  },
  {
    title: "Terraform (IaC)",
    icon: <Repeat className="w-6 h-6 text-pink-400" />,
    description:
      "Using Terraform, I can set up your cloud infrastructure in a way that's repeatable, version-controlled and safe. If you ever want to migrate, scale or reproduce your environment, everything is clearly defined and automated.",
    label: "Benefits:",
    bullets: [
      "No undocumented cloud setups",
      "Faster deployments",
      "Easier future upgrades",
      "Lower long-term costs",
    ],
  },
  {
    title: "Database Setup & Management",
    icon: <Lock className="w-6 h-6 text-emerald-400" />,
    description:
      "I help businesses design and set up databases that match their needs - whether that's a simple customer database or a more complex application backend.",
    label: "Includes:",
    bullets: [
      "Data structure planning",
      "Secure setup",
      "API integrations",
      "Long-term maintenance options",
    ],
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
  label,
  bullets,
}) => {
  return (
    <article className="rounded-2xl border bg-white/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="w-12 h-12 rounded-lg bg-slate-900/5 flex items-center justify-center border border-slate-900/10 mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-700 leading-relaxed">{description}</p>

      {label && bullets && (
        <div className="mt-4">
          <p className="text-sm font-medium text-slate-900">{label}</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {bullets.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mt-1 mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 className="text-sm font-mono tracking-wider uppercase text-emerald-500">
            Services for small businesses and startups
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Practical web development and cloud services
          </h3>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
            From websites to full web applications, hosting, infrastructure and
            databases – I handle the full stack so you don’t have to manage
            multiple freelancers or agencies.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
