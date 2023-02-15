import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled("section", {});

export const Content = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 24,
  maxWidth: "1120px",
  margin: "auto",
  minHeight: "100vh",
  position: "relative",
  transformStyle: "preserve-3d",
  "-webkit-transform": "preserver-3d",

  "& p": {
    marginBottom: 32,
  },

  "& button": {
    alignSelf: "flex-start",
  },
});

export const Span = styled(motion.span, {
  color: "$green400",
  marginBottom: 8,
});

export const Title = styled(motion.h1, {
  fontSize: 75,
  fontWeight: "bold",

  "@md": {
    fontSize: 40,
    lineHeight: "50px",
  },

  "@lg": {
    fontSize: 50,
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

export const TechBubble = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "$gray800",
  boxShadow: "1px 10px 10px rgba(0,0,0,0.25)",
  position: "absolute",

  variants: {
    size: {
      small: {
        height: 124,
        width: 124,
        top: "5%",
        right: 400,
      },
      medium: {
        height: 156,
        width: 156,
        top: "72%",
        right: 320,
      },
      big: {
        height: 184,
        width: 184,
        top: 40,
        right: 140,

        "& img": {
          height: 124,
        },
      },
    },
  },

  "@lg": {
    display: "none",
  },

  defaultVariants: {
    size: "big",
  },
});
