import type { Variants } from "framer-motion";

export const menu: Variants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      type: "just",
    },
  },
};
