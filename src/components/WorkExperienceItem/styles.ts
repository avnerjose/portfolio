import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled("article", {
  display: "flex",
  position: "relative",

  "& + &": {
    marginTop: 16,
  },
});

export const Trail = styled(motion.div, {
  display: "flex",
  height: 32,
  width: 32,
  background: "$green400",
  borderRadius: "50%",
  boxShadow: "0px 0px 50px 0px $green400",

  "&::after": {
    position: "absolute",
    content: "",
    display: "block",
    height: "calc(100% - 48px)",
    width: 2,
    background: "$gray500",
    bottom: 0,
    left: 80,

    "@lg": {
      left: 16,
    },
  },
});

export const YearFlag = styled(motion.span, {
  display: "flex",
  alignItems: "center",
  background: "$gray500",
  alignSelf: "flex-start",
  position: "relative",
  paddingX: 8,
  height: 32,
  marginRight: 16,

  "&::after": {
    position: "absolute",
    right: "-10px",
    content: "",
    width: 0,
    height: 0,
    borderTop: "16px solid transparent",
    borderBottom: "16px solid transparent",
    borderLeft: "10px solid $gray500  ",
  },

  "@lg": {
    display: "none",
  },
});

export const Content = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  marginLeft: 8,

  "& span": {
    color: "$green400",
    marginBottom: 8,
  },
});
