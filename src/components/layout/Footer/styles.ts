import { styled } from "stitches.config";

export const Container = styled("footer", {});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingY: 32,
  paddingX: 24,
  gap: 8,
  maxWidth: "1120px",
  margin: "auto",

  "& img": {
    width: 140,
  },

  "& span": {
    color: "$gray500",
  },
});
