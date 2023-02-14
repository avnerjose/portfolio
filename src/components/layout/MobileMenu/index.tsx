import { useEffect } from "react";
import { GitHub, Linkedin, X } from "react-feather";
import { Button } from "@/components/Button";

import { Container, Menu } from "./styles";

interface MobileMenuProps {
  onClose: () => void;
}

const WEBSITE_SECTIONS = [
  "About me",
  "Skills and tools",
  "My projects",
  "Work Experience",
  "Contact",
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
    <Container tabIndex={1}>
      <button onClick={onClose}>
        <X size={32} />
      </button>
      <Menu>
        <ul>
          {WEBSITE_SECTIONS.map((item, i) => (
            <li key={i}>
              <a href="">
                <span>{i + 1}.</span> {item}
                <span>.</span>
              </a>
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
