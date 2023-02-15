import type { Variants } from "framer-motion";

export const list: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const itemFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
