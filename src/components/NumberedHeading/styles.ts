import { styled } from "stitches.config";

export const Heading = styled("h2", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  whiteSpace: "nowrap",

  fontSize: 26,
  position: "relative",
  alignSelf: "flex-start",

  "&::after": {
    display: "block",
    position: "relative",
    top: "50%",
    width: "300px",
    content: "",
    height: 2,
    background: "$gray500",
    marginLeft: 20,
  },

  "@sm": {
    "&::after": {
      width: "100%",
    },
  },
});

export const Span = styled("span", {
  color: "$green400",
  marginRight: "0.5rem",
});
