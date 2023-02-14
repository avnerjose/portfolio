import { styled } from "stitches.config";

export const Button = styled("button", {
  background: "transparent",
  border: "3px solid $green400",
  color: "$green400",
  fontWeight: "bold",

  borderRadius: 8,
  transition: "ease-in-out 0.2s",
  cursor: "pointer",

  "&:hover": {
    background: "rgba(21,193,150,0.2)",
  },

  "&:focus": {
    outline: "$green400",
    background: "rgba(21,193,150,0.2)",
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
