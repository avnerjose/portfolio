import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Button = styled(motion.button, {
  color: "$green400",
  fontWeight: "bold",
  position: "relative",
  background: "transparent",
  zIndex: 1,
  transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  userSelect: "none",
  cursor: "pointer",
  transformStyle: "preserve-3d",
  border: "1px solid $green400",
  borderRadius: 4,
  transitionDelay: "100ms",
  display: "inline-block",

  "&:focus": {
    outline: "$green400",
    boxShadow: "4px 4px 0 0 $green400",
    transform: "translate(-5px, -5px) !important",
  },

  "&:hover": {
    outline: "none",
    boxShadow: "4px 4px 0 0 $green400",
    transform: "translate(-5px, -5px) !important",
  },

  variants: {
    size: {
      big: {
        paddingY: 16,
        paddingX: 64,
      },
      small: {
        paddingY: 16,
        paddingX: 32,
      },
    },
  },

  defaultVariants: {
    size: "big",
  },
});
