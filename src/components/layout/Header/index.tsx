import { useEffect, useState } from "react";
import { BarChart } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/Button";
import * as Variants from "./animations";
import { Container, Content, Navigation } from "./styles";

const WEBSITE_SECTIONS = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

export function Header() {
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(-1);

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

  useEffect(() => {
    setShowLogo(true);
  }, []);

  return (
    <Container
      color={Math.abs(activeSection) % 2 === 1 ? "darkGray" : "lightGray"}
    >
      <Content>
        {showLogo && (
          <motion.img
            variants={Variants.logo}
            initial="hidden"
            animate="show"
            src={`/images/${isMobile ? "logoIcon.svg" : "logo.svg"}`}
            alt="Logo"
          />
        )}
        {isMobile && showLogo ? (
          <motion.div
            variants={Variants.menuIcon}
            initial="hidden"
            animate="show"
          >
            <BarChart size={32} onClick={handleOpenMobileMenu} />
          </motion.div>
        ) : (
          <Navigation>
            <motion.ul
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
                    activeClass="active"
                    onSetActive={handleSetActive}
                    onSetInactive={handleSetInactive}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <Button
              variants={Variants.button}
              initial="hidden"
              animate="show"
              size="small"
            >
              Resume
            </Button>
          </Navigation>
        )}
      </Content>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            onClose={handleCloseMobileMenu}
            setActiveSection={setActiveSection}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}
