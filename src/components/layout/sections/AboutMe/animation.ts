import type {Variants} from "framer-motion";

export const content: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

export const itemFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const itemFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
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
  },
};
