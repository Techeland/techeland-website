import { ArrowRight } from "lucide-react";
import { ViewState } from "../types";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiGooglecloud, SiTerraform, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";

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

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `/#${id}`);
};

export const Hero: React.FC = () => {
  return (
    <>
      <div className="lg:col-span-7 text-left">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-black leading-[1.1] mb-6">
          TechEland <br />
          <span className="text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
            Fast, modern websites for UK businesses
          </span>
          <br />
        </h1>
        <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-black leading-[1.1] mb-6">
          Websites that look professional and generate enquiries - built in
          days, not months
        </h3>
      </div>
      <div className="flex justify-center pt-10 gap-6 flex-wrap">
        <Button
          size="lg"
          href="#contact"
          onClick={(e: any) => {
            e?.preventDefault?.();
            scrollToId("contact");
          }}
        >
          <Text variant="large" className="text-center">
            Book a free 15-min call
          </Text>
        </Button>

        <Button
          size="lg"
          href="#services"
          onClick={(e: any) => {
            e?.preventDefault?.();
            scrollToId("services");
          }}
        >
          <Text variant="large" className="text-center">
            View services
          </Text>
        </Button>
      </div>

      <p className="text-center mt-3 text-sm text-black/60">
        Free • No pressure • Reply within 24 hours
      </p>

      <div className="flex justify-center">
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-wrap justify-center gap-6 opacity-70">
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
