import { styled } from "stitches.config";

export const Container = styled("ul", {
  position: "fixed",
  bottom: 200,
  left: "4rem",
  listStyle: "none",

  "& a": {
    color: "$gray500",
  },

  "& li": {
    transition: "all 0.2s",
    "&:hover": {
      transform: "translateY(-5px)",

      "& a": {
        color: "$green400",
      },
    },
  },

  "&::before": {
    position: "absolute",
    content: "",
    background: "$gray500",
    width: 1,
    height: 200,
    top: "100%",
    left: "50%",
  },

  "@lg": {
    display: "none",
  },
});
