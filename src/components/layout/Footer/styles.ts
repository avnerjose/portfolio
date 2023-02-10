import { styled } from "stitches.config";

export const Container = styled("footer", {
  display: "flex",
  flexDirection: "column",
  paddingY: 32,
  paddingX: 24,
  gap: 8,

  "& img": {
    width: 140,
  },

  "& span": {
    color: "$gray500",
  },
});
