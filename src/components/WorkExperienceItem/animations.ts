import type { Variants } from "framer-motion";

export const content: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (param: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delay: param * 0.2,
      delayChildren: param * 0.2,
    },
  }),
};

export const itemFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: -700,
  },
  show: (param: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: param * 0.5,
    },
  }),
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
