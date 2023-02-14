import { styled } from "stitches.config";

export const Container = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",

  top: 0,
  right: 0,
  left: 0,
  paddingY: 32,
  paddingX: 24,
  zIndex: 10,
  background: "$gray900",

  "@md": {
    "& img": {
      height: 52,
    },
  },

  "& > svg": {
    color: "$green400",
    transform: "rotate(270deg)",
  },

  "& svg": {
    "&:focus": {
      outline: "$green400",
      outlineStyle: "dashed",
    },
  },
});
