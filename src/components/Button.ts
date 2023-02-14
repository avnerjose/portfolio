import { styled } from "stitches.config";

export const Button = styled("button", {
  background: "transparent",
  border: "3px solid $green400",
  color: "$green400",
  fontWeight: "bold",
  paddingY: 16,
  paddingX: 64,
  borderRadius: 8,
  transition: "ease-in-out 0.2s",
  cursor: "pointer",

  "&:hover": {
    background: "$green400",
    color: "$white",
  },

  "&:focus": {
    outline: "$green400",
    background: "rgba(21,193,150,0.2)",
  },
});
