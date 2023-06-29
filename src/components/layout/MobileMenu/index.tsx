import { useEffect } from "react";
import { GitHub, Linkedin, X } from "react-feather";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { Button } from "@/components/Button";
import * as Variants from "./animations";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";

interface MobileMenuProps {
  onClose: () => void;
  setActiveSection: (p: number) => void;
  resumeUrl: string;
}

const WEBSITE_SECTIONS = [
  { label: "aboutMe", to: "about" },
  { label: "skillsAndTools", to: "skills" },
  { label: "myProjects", to: "projects" },
  { label: "workExperience", to: "experience" },
  { label: "contact", to: "contact" },
];

export function MobileMenu({
  onClose,
  setActiveSection,
  resumeUrl,
}: MobileMenuProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang, "home");

  const handleLinkClick = (to: string) => {
    const index = WEBSITE_SECTIONS.findIndex((item) => item.to === to);

    setActiveSection(index);
    onClose();
  };

  const handleOpenResumeFile = () => window.open(resumeUrl, "_blank");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    document.body.classList.add("blur-body");

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("blur-body");
    };
  }, []);

  return (
    <motion.aside
      className="fixed bg-gray-800 top-0 right-0 bottom-0 z-[100] w-[min(400px,100vw)] max-h-[100vh] flex flex-col"
      tabIndex={1}
      variants={Variants.menu}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <button
        className="mt-8 mr-6 self-end bg-transparent border-none focus:outline-green-400 focus:outline-dashed"
        onClick={onClose}
      >
        <X className="text-green-400 self-end justify-self-start" size={32} />
      </button>
      <nav className="flex-1">
        <ul className="flex flex-col items-center justify-center w-full text-[20px]">
          {WEBSITE_SECTIONS.map((item, i) => (
            <li className="mt-4" key={i}>
              <Link
                to={item.to}
                onClick={() => handleLinkClick(item.to)}
                smooth
                spy
                offset={-85}
                delay={200}
                className="text-white focus:text-green-400 focus:outline-none"
              >
                <span className="text-green-400 font-bold">{i + 1}.</span>{" "}
                {t(item.label)}
                <span className="text-green-400 font-bold">.</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button onClick={handleOpenResumeFile} className="self-center">
        Resume
      </Button>
      <footer className="flex gap-4 bg-gray-900 p-4 w-full mt-4 self-center">
        <a href="https://github.com/avnerjose" target="_blank">
          <GitHub className="text-gray-500" size={20} />
        </a>
        <a href="https://linkedin.com/in/avnerjose" target="_blank">
          <Linkedin className="text-gray-500" size={20} />
        </a>
      </footer>
    </motion.aside>
  );
}
