import { ArrowRight } from "lucide-react";
import { ViewState } from "../types";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiGooglecloud, SiTerraform, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";

const iconLibrary: Record<string, IconType> = {
  react: FaReact,
  nextjs: RiNextjsFill,
  typescript: SiTypescript,
  gcp: SiGooglecloud,
  terraform: SiTerraform,
  postgres: BiLogoPostgresql,
};

const TechBadge = ({ icon, label }: { icon: string; label: string }) => {
  const IconComponent = iconLibrary[icon];
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        {/* <div className="absolute inset-0 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          {IconComponent && <IconComponent color="black" size={24} />}
        </div>
      </div>
      <span className="text-sm font-medium text-black align-middle">
        {label}
      </span>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <>
      <div className="lg:col-span-7 text-left">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-black leading-[1.1] mb-6">
          TechEland <br />
          <span className="text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-purple-700">
            Web development for UK businesses
          </span>
          <br />
        </h1>
        <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-black leading-[1.1] mb-6">
          Modern websites and custom web applications built with React and
          Next.js by a reliable UK-based developer.
        </h3>
      </div>
      <div className="flex justify-center align-top">
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <TechBadge icon="react" label="React" />
          <TechBadge icon="nextjs" label="Next.js" />
          <TechBadge icon="typescript" label="TypeScript" />
          <TechBadge icon="gcp" label="GCP" />
          <TechBadge icon="terraform" label="Terraform" />
          <TechBadge icon="postgres" label="Postgres" />
        </div>
      </div>
    </>
  );
};
