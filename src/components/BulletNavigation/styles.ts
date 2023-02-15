import { styled } from "stitches.config";

export const Container = styled("nav", {
  position: "fixed",
  right: "4rem",
  bottom: "50%",
  transform: "translateY(50%)",

  "& ul": {
    width: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    listStyle: "none",
  },

  "& a": {
    display: "flex",
    height: 10,
    width: 10,
    border: "1px solid $green400",
    cursor: "pointer",
    transition: "all 0.2s",
    background: "$green400",
    transform: "rotate(45deg)",

    "&.active": {
      height: 16,
      width: 16,
      background: "transparent",
      border: "1px solid $green400",
      transform: "rotate(0)",
    },
  },

  "@xl": {
    display: "none",
  },
});
