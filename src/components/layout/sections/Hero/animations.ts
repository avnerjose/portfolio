import type { Variants } from "framer-motion";

export const content: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

export const itemFromBottom: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const itemFromTop1: Variants = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    y: 50,
    opacity: 1,
  },
};

export const itemFromTop2: Variants = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  show: {
    y: -10,
    opacity: 1,
  },
};

export const itemFromTop3: Variants = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    y: 120,
    opacity: 1,
  },
};

export const itemFromRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const itemFromLeft: Variants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};
