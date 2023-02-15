import type { Variants } from "framer-motion";

export const content: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const itemFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const itemFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
