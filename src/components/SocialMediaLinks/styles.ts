import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.ul, {
  position: "fixed",
  left: "4rem",
  listStyle: "none",
  transition: "all 0.2s",

  "& a": {
    color: "$gray500",
  },

  "& li": {
    transition: "all 0.2s",
    "&:hover": {
      transform: "translateY(-5px)",

      "& a": {
        color: "$green400",
      },
    },
  },

  "&::before": {
    position: "absolute",
    content: "",
    background: "$gray500",
    width: 1,
    height: 200,
    top: "100%",
    left: "50%",
  },

  "@lg": {
    display: "none",
  },

  variants: {
    position: {
      default: {
        bottom: 200,
      },
      dislocated: {
        bottom: 289,
      },
    },
  },

  defaultVariants: {
    position: "default",
  },
});
