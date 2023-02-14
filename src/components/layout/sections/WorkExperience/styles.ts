import { styled } from "stitches.config";

export const Container = styled("section", {});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  paddingX: 24,
  paddingY: 32,
  maxWidth: "1120px",
  margin: "auto",

  "& h2": {
    marginBottom: 32,
  },
});
