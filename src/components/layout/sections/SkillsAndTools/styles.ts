import { styled } from "stitches.config";

export const Container = styled("section", {});

export const Content = styled("div", {
  minHeight: "100vh",
  paddingX: 16,
  paddingY: 32,
  maxWidth: "1120px",
  margin: "auto",

  "span[type='next'], span[type='prev']": {
    background: "$green400",
    opacity: 1,

    "&::before": {
      borderColor: "$white",
    },
  },
});
