import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled("section", {
  background: "$gray800",
  overflow: "hidden",
});

export const Content = styled(motion.div, {
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

export const Avatar = styled(motion.figure, {
  alignSelf: "center",
  justifySelf: "center",
  marginTop: 40,
  position: "relative",
  height: 350,
  width: 350,

  "& img": {
    borderRadius: "50%",
    outline: "10px solid $green400",
  },

  svg: {
    position: "absolute",
    top: 60,
    left: 50,
    width: 250,
    height: 195,
    transform: "scale(2)",
  },

  "@lg": {
    height: 200,
    width: 200,

    svg: {
      top: 0,
      left: -10,
      transform: "scale(1.5)",
    },
  },

  "@md": {
    height: 170,
    width: 170,
    alignSelf: "center",

    svg: {
      top: -20,
      left: -30,
      transform: "scale(1.1)",
    },
  },
});
