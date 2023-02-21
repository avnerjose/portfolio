"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import * as Variants from "./animations";
import { Container } from "./styles";

const WEBSITE_SECTIONS = [
  { label: "Hero", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

export function BulletNavigation() {
  return (
    <Container>
      <motion.ul variants={Variants.list} initial="hidden" animate="show">
        {WEBSITE_SECTIONS.map((item) => (
          <motion.li variants={Variants.itemFromBottom} key={item.to}>
            <Link to={item.to} smooth spy activeClass="active" offset={-85} />
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  );
}
