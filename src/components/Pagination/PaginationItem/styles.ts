import { styled } from "stitches.config";

export const Container = styled("button", {
  height: 40,
  width: 40,
  border: "2px solid $green400",
  fontWeight: "bold",
  fontSize: 20,
  borderRadius: 8,
  cursor: "pointer",

  variants: {
    state: {
      active: {
        color: "$white",
        background: "$green400",
      },
      inactive: {
        color: "$gray500",
        background: "transparent",
      },
    },
  },

  defaultVariants: {
    state: "inactive",
  },
});
