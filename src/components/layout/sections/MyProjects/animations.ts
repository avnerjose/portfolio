import type { Variants } from "framer-motion";

export const list: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const itemFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

export const itemFromLeft: Variants = {
  hidden: {
    x: "-50%",
    opacity: 0,
  },
  show: (param: number = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: param * 0.2,
    },
  }),
};

export const itemFromRight: Variants = {
  hidden: {
    x: "50%",
    opacity: 0,
  },
  show: (param: number = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: param * 0.2,
    },
  }),
};
