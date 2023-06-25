import { styled } from "stitches.config";
import { motion } from "framer-motion";
import { Fragment } from "react";

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
    left: 16,
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

export const WorkExperienceTitle = styled(motion.h3, {
  color: "$green400",
  fontWeight: "bold",
  fontSize: 28,
});

export const JobContainer = styled(motion.div, {
  "& + &": {
    marginTop: 16,
  },
});

export const JobTitle = styled(motion.h4, {
  fontSize: 22,
  fontWeight: "normal",
});
