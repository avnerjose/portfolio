import { styled } from "stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  padding: 24,

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
  "@md": {
    fontSize: 40,
    lineHeight: "50px",
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
