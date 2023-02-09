import { styled } from "stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  paddingX: 24,
  paddingY: 32,

  "& h2": {
    marginBottom: 32,
  },
});
