import { styled } from "stitches.config";

export const Container = styled("article", {
  display: "flex",
  position: "relative",

  "& + &": {
    marginTop: 16,
  },
});

export const Trail = styled("div", {
  display: "flex",
  height: 32,
  width: 32,
  background: "$green400",
  borderRadius: "50%",

  "&::after": {
    position: "absolute",
    content: "",
    display: "block",
    height: "calc(100% - 48px)",
    width: 2,
    background: "$gray500",
    bottom: 0,
    left: 16,
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  marginLeft: 8,

  "& span": {
    color: "$green400",
    marginBottom: 8,
  },
});
