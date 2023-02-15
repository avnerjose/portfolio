import type { Variants } from "framer-motion";

export const itemFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
    },
  },
};
