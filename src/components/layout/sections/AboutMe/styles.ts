import { styled } from "stitches.config";

export const Container = styled("section", {
  background: "$gray800",
});

export const Content = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  minHeight: "100vh",
  paddingX: 24,
  paddingY: 32,
  maxWidth: "1120px",
  margin: "auto",

  "& h2": {
    marginBottom: 32,
  },

  "@md": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const Avatar = styled("figure", {
  alignSelf: "center",
  justifySelf: "center",
  marginTop: 40,
  position: "relative",
  height: 350,
  width: 350,

  "@md": {
    height: 170,
    width: 170,
    alignSelf: "center",
  },

  "@lg": {
    height: 200,
    width: 200,
  },

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
