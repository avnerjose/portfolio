import { styled } from "stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray800",
  padding: 16,
  aspectRatio: "1/1",
  width: "100%",
  maxWidth: 250,

  "& span": {
    fontWeight: "bold",
    marginTop: 24,
  },
});
