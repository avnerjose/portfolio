import { motion } from "framer-motion";
import { styled } from "stitches.config";

export const Container = styled("section", {
  background: "$gray800",
  position: "relative",
  overflow: "hidden",

  "#tsparticles": {
    position: "absolute",
    zIndex: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const Content = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 85px)",
  paddingX: 24,
  paddingY: 32,
  textAlign: "center",
  maxWidth: "1120px",
  margin: "auto",
});

export const MainContent = styled(motion.div, {
  display: "flex",
  gap: 16,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  width: "70%",
  // background: "$gray800",
  zIndex: 1,

  "& h2": {
    fontSize: 65,
  },
  "& p": {
    color: "$gray500",
    fontSize: 20,
  },

  "@md": {
    "& h2": {
      fontSize: 40,
    },
    "& p": {
      fontSize: 18,
    },
    width: "100%",
  },
});

export const ContactForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1rem",
  alignItems: "center",
  maxWidth: "500px",

  ".validation-error": {
    alignSelf: "flex-start",
    color: "red",
  },

  "& input, & textarea": {
    width: "100%",
    background: "$gray900",
    border: "none",
    padding: "1rem",
    color: "$white",
    borderRadius: "0.5rem",

    "&:focus": {
      outline: "1px solid $green400",
    },
  },

  "& textarea": {
    height: "120px",
    resize: "none",
  },

  "& button": {
    alignSelf: "center",
  },
});
