import { styled } from "stitches.config";

export const Container = styled("header", {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  background: "$gray900",
});

export const Content = styled("div", {
  maxWidth: "1120px",
  paddingY: 32,
  paddingX: 24,
  margin: "auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

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

export const Navigation = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: 24,

  "@lg": {
    gap: 16,
  },

  "& ul": {
    display: "flex",
    listStyle: "none",
    gap: 24,

    "@lg": {
      gap: 16,
    },

    "& a": {
      textDecoration: "none",
      color: "$white",
      fontSize: 18,
    },
  },
});
