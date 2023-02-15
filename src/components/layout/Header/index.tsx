import { useEffect, useState } from "react";
import { BarChart } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Button } from "@/components/Button";
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
    <Container>
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
                  <Link to={item.to} smooth spy offset={-85} activeClass="active">
                    {item.label}
                  </Link>
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
