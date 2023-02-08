import { styled } from "stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  paddingX: 24,
  paddingY: 32,
  background: "$gray800",

  "& h2": {
    marginBottom: 32,
  },
});

export const Avatar = styled("figure", {
  alignSelf: "center",
  marginTop: 40,
  position: "relative",
  height: 170,
  width: 170,

  "& img": {
    borderRadius: "50%",
    outline: "10px solid $green400",
  },

  "&::before": {
    backgroundImage: "url('/images/avatarShapes.svg')",
    backgroundRepeat: "no-repeat",
    content: " ",
    position: "absolute",
    top: -32,
    left: -32,
    width: 250,
    height: 195,
  },
});
