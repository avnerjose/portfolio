import { styled } from "stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  padding: 24,
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

export const Paragraph = styled("p", {
  color: "$gray500",
  fontSize: 18,
  marginTop: 8,
  marginBottom: 32,
});
