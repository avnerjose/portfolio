import type { Variants } from "framer-motion";

export const gridContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemFromTop: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      type: "spring",
    },
  }),
};

export const itemFromFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};
