import { useEffect } from "react";
import { GitHub, Linkedin, X } from "react-feather";
import { Link } from "react-scroll";

import { Button } from "@/components/Button";
import * as Variants from "./animations";
import { Container, Menu } from "./styles";

interface MobileMenuProps {
  onClose: () => void;
}

const WEBSITE_SECTIONS = [
  { label: "About me", to: "about" },
  { label: "Skills and tools", to: "skills" },
  { label: "My Projects", to: "projects" },
  { label: "Work Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

export function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    document.body.classList.add("blur");

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("blur");
    };
  }, []);

  return (
    <Container
      tabIndex={1}
      variants={Variants.menu}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <button onClick={onClose}>
        <X size={32} />
      </button>
      <Menu>
        <ul>
          {WEBSITE_SECTIONS.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                onClick={onClose}
                smooth
                spy
                offset={-85}
                delay={200}
              >
                <span>{i + 1}.</span> {item.label}
                <span>.</span>
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
      <Button>Resume</Button>
      <footer>
        <a href="https://github.com/avnerjose" target="_blank">
          <GitHub size={20} />
        </a>
        <a href="https://linkedin.com/in/avnerjose" target="_blank">
          <Linkedin size={20} />
        </a>
      </footer>
    </Container>
  );
}
