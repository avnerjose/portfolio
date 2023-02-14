import { useEffect, useState } from "react";
import { BarChart } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "@/components/layout/MobileMenu";

import { Container, Content } from "./styles";

export function Header() {
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <BarChart size={32} onClick={handleOpenMobileMenu} />
      </Content>
      {isMobileMenuOpen && <MobileMenu onClose={handleCloseMobileMenu} />}
    </Container>
  );
}
