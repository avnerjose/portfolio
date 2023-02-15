import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Paragraph = styled(motion.p, {
  marginTop: 8,

  variants: {
    color: {
      gray: {
        color: "$gray500",
      },
      white: {
        color: "$white",
      },
    },
    size: {
      big: {
        fontSize: 20,
        "@md": {
          fontSize: 18,
        },
      },
      small: {
        fontSize: 16,
      },
    },
  },

  defaultVariants: {
    color: "gray",
    size: "big",
  },
});
