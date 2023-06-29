"use client";

import { useEffect, useState } from "react";
import { BarChart } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/Button";
import { useLanguage } from "@/hooks/useLanguage";
import { useGetResumeQuery } from "@/graphql/generated";
import * as Variants from "./animations";
import useScrollDirection from "@/hooks/useScrollDirection";
import { useTranslation } from "@/app/i18n/client";

const WEBSITE_SECTIONS = [
  { to: "about" },
  { to: "skills" },
  { to: "projects" },
  { to: "experience" },
  { to: "contact" },
];

export function Header() {
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(-1);
  const [hideHeader, setHideHeader] = useState(false);
  const { locale, lang } = useLanguage();
  const { data } = useGetResumeQuery({
    variables: {
      locale: [locale],
    },
  });
  const resumeUrl = data?.resumes[0].file?.url;
  const scrollDirection = useScrollDirection();
  const { t } = useTranslation(lang, "home");

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const handleOpenMobileMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  const handleSetActive = (to: string) => {
    const index = WEBSITE_SECTIONS.findIndex((item) => item.to === to);
    setActiveSection(index);
  };

  const handleSetInactive = (to: string) => {
    const index = WEBSITE_SECTIONS.findIndex((item) => item.to === to);
    setActiveSection(index + 1);
  };

  const handleOpenResumeFile = () => window.open(resumeUrl, "_blank");

  useEffect(() => {
    setShowLogo(true);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (scrollDirection === "down") {
        setHideHeader(true);
      } else if (scrollDirection === "up") {
        setHideHeader(false);
      }
    }
  }, [scrollDirection]);

  return (
    <header
      className={classNames(
        "fixed right-0 left-0 z-[100] min-h-[85px] transition-all ease-main-button duration-[500ms]",
        {
          "bg-gray-900": Math.abs(activeSection) % 2 === 1,
          "bg-gray-800": Math.abs(activeSection) % 2 === 0,
          "top-0": !hideHeader,
          "top-[-100%]": hideHeader,
        }
      )}
    >
      <div className="max-w-[1120px] py-4 px-6 m-auto flex items-center justify-between">
        {showLogo && (
          <Link to="hero" className="cursor-pointer" smooth spy offset={-85}>
            <motion.img
              variants={Variants.logo}
              initial="hidden"
              animate="show"
              src={`/images/${isMobile ? "logoIcon.svg" : "logo.svg"}`}
              className="h-[52px] md:h-[unset]"
              alt="Logo"
            />
          </Link>
        )}
        {isMobile && showLogo ? (
          <motion.div
            variants={Variants.menuIcon}
            initial="hidden"
            animate="show"
          >
            <BarChart
              className="text-green-400 cursor-pointer rotate-[270deg] focus:outline-green-400 focus:outline-dashed"
              size={32}
              onClick={handleOpenMobileMenu}
            />
          </motion.div>
        ) : (
          <nav className="flex items-center gap-4 lg:gap-6">
            <motion.ul
              className="flex list-none gap-4 lg:gap-6"
              variants={Variants.container}
              initial="hidden"
              animate="show"
            >
              {WEBSITE_SECTIONS.map((item, i) => (
                <motion.li variants={Variants.listItem} key={i}>
                  <Link
                    to={item.to}
                    smooth
                    spy
                    offset={-85}
                    activeClass="before:content-['<'] before:text-green-400 after:content-['/>'] after:text-green-400"
                    className="text-white text-lg cursor-pointer transition-all duration-[0.2s] hover:text-green-400"
                    onSetActive={handleSetActive}
                    onSetInactive={handleSetInactive}
                  >
                    {t(item.to)}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <Button
              variants={Variants.button}
              onClick={handleOpenResumeFile}
              initial="hidden"
              animate="show"
              size="small"
            >
              {t("resume")}
            </Button>
          </nav>
        )}
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            onClose={handleCloseMobileMenu}
            setActiveSection={setActiveSection}
            resumeUrl={resumeUrl ?? ""}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
