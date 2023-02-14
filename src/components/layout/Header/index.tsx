import { useEffect, useState } from "react";
import { BarChart } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrollDirection } from "@/hooks/useScrollDirection";

import { Container, Content, Navigation } from "./styles";
import { Button } from "@/components/Button";

const WEBSITE_SECTIONS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export function Header() {
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const handleOpenMobileMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setShowLogo(true);
  }, []);

  return (
    <Container visibility={scrollDirection === "down" ? "hidden" : "visible"}>
      <Content>
        {showLogo && (
          <img
            src={`/images/${isMobile ? "logoIcon.svg" : "logo.svg"}`}
            alt="Logo"
          />
        )}
        {isMobile && showLogo ? (
          <BarChart size={32} onClick={handleOpenMobileMenu} />
        ) : (
          <Navigation>
            <ul>
              {WEBSITE_SECTIONS.map((item, i) => (
                <li key={i}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
            <Button size="small">Resume</Button>
          </Navigation>
        )}
      </Content>
      {isMobileMenuOpen && <MobileMenu onClose={handleCloseMobileMenu} />}
    </Container>
  );
}
