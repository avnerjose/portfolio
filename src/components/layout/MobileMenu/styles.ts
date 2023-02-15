import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.aside, {
  position: "fixed",
  background: "$gray800",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 14,

  width: "min(400px, 100vw)",
  maxHeight: "100vh",

  display: "flex",
  flexDirection: "column",

  "& svg": {
    color: "$green400",
    alignSelf: "flex-end",
    justifySelf: "flex-start",
  },

  "& button": {
    "&:nth-child(3)": {
      alignSelf: "center",
    },

    "&:first-child": {
      marginTop: 32,
      marginRight: 24,
      alignSelf: "flex-end",
      background: "transparent",
      border: "none",

      "&:focus": {
        outline: "$green400",
        outlineStyle: "dashed",
      },
    },
  },

  footer: {
    display: "flex",
    gap: "1rem",
    background: "$gray900",
    padding: "1rem",
    width: "100%",
    marginTop: "1rem",
    alignSelf: "center",
    "& svg": {
      color: "$gray500",
    },
  },
});

export const Menu = styled("nav", {
  flex: 1,

  "& ul": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontSize: 20,

    listStyle: "none",

    "& li": {
      marginTop: "1rem",

      "& span": {
        color: "$green400",
        fontWeight: "bold",
      },

      "& a": {
        textDecoration: "none",
        color: "$white",

        "&:focus": {
          color: "$green400",
          outline: "none",
        },
      },
    },
  },
});
