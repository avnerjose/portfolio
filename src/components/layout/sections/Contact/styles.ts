import { styled } from "stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  paddingX: 24,
  paddingY: 32,
  background: "$gray800",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",

  "& img": {
    position: "absolute",
  },

  "& img:nth-child(3)": {
    top: 120,
    left: -100,
  },
  "& img:nth-child(4)": {
    top: 100,
    left: -140,
  },
  "& img:nth-child(5)": {
    top: 100,
    right: -100,
  },
  "& img:nth-child(6)": {
    top: 100,
    right: -160,
  },
});

export const Content = styled("div", {
  display: "flex",
  gap: 16,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  width: "70%",

  "& h2": {
    fontSize: 40,
  },

  "& p": {
    color: "$gray500",
  },
});