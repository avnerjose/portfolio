import { styled } from "stitches.config";

export const Container = styled("section", {
  minHeight: "100vh",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 24,
  maxWidth: "1120px",
  margin: "auto",
  minHeight: "100vh",

  "& p": {
    marginBottom: 32,
  },

  "& button": {
    alignSelf: "flex-start",
  },
});

export const Span = styled("span", {
  color: "$green400",
  marginBottom: 8,
});

export const Title = styled("h1", {
  fontSize: 75,
  fontWeight: "bold",

  "@md": {
    fontSize: 40,
    lineHeight: "50px",
  },

  "@lg": {
    fontSize: 50,
  },

  variants: {
    color: {
      white: {
        color: "$white",
      },
      gray: {
        color: "$gray500",
      },
    },
  },

  defaultVariants: {
    color: "white",
  },
});
