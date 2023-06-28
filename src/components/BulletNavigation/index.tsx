"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import * as Variants from "./animations";

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
    <nav className="hidden xl:flex fixed right-16 bottom-1/2 translate-y-[50%] z-50">
      <motion.ul
        className="hidden w-4 xl:flex flex-col items-center gap-4 list-none"
        variants={Variants.list}
        initial="hidden"
        animate="show"
      >
        {WEBSITE_SECTIONS.map((item) => (
          <motion.li variants={Variants.itemFromBottom} key={item.to}>
            <Link
              className="flex w-[10px] h-[10px] aspect-square border border-green-400 cursor-pointer transition-all duration-[0.2s] bg-green-400 rotate-45"
              activeClass="h-[12px] w-[12px] bg-transparent border border-green-400 rotate-0"
              to={item.to}
              smooth
              spy
              offset={-85}
            />
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
