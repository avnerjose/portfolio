import type { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
    },
  },
};

export const button: Variants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * 3,
    },
  },
};

export const logo: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const menuIcon: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0 },
};
