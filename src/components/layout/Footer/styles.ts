import { styled } from "stitches.config";

export const Container = styled("footer", {});

export const Content = styled("div", {
  display: "flex",
  alignItem: "center",
  paddingY: 32,
  paddingX: 24,
  gap: 32,
  maxWidth: "1120px",
  margin: "auto",

  "@md": {
    flexDirection: "column",
    gap: 8,
  },

  "& img": {
    width: 140,
  },

  "& span": {
    color: "$gray500",
  },
});
