"use client";

import { GitHub, Linkedin } from "react-feather";
import { motion } from "framer-motion";
import classNames from "classnames";

import * as Variants from "./animations";

interface SocialMediaLinksProps {
  variant?: "default" | "dislocated";
}

export function SocialMediaLinks({
  variant = "default",
}: SocialMediaLinksProps) {
  return (
    <motion.ul
      className={classNames(
        "hidden fixed lg:flex flex-col gap-2 left-[4rem] list-none transition-all duration-[0.2s] before:absolute before:content-[''] before:bg-gray-500 before:w-[1px] before:h-[200px] before:top-full before:left-1/2",
        {
          "bottom-[200px]": variant === "default",
          "bottom-[289px]": variant === "dislocated",
        }
      )}
      variants={Variants.list}
      initial="hidden"
      animate="show"
    >
      <motion.li
        className="transition-all duration-[0.2s] hover:translate-y-main-button"
        variants={Variants.itemFromBottom}
      >
        <a
          className="text-gray-500 hover:text-green-400"
          href="https://github.com/avnerjose"
          target="_blank"
        >
          <GitHub aria-label="github" />
        </a>
      </motion.li>
      <motion.li
        className="transition-all duration-[0.2s] hover:translate-y-main-button"
        variants={Variants.itemFromBottom}
      >
        <a
          className="text-gray-500 hover:text-green-400"
          href="https://linkedin.com/in/avnerjose"
          target="_blank"
        >
          <Linkedin aria-label="linkedin" />
        </a>
      </motion.li>
    </motion.ul>
  );
}
