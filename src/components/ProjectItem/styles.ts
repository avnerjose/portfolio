import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.article, {
  display: "grid",

  gridTemplateColumns: "repeat(12,1fr)",

  "& img": {
    width: "100%",
  },

  "& + &": {
    marginTop: "2rem",
  },

  "&:nth-of-type(2n+1)": {
    "> div:first-child": {
      gridArea: "1 / 1 / -1 / 7",
      gridColumn: "1 / 8",
    },
    "> div:last-child": {
      textAlign: "right",
      gridArea: "1 / 6 / -1 / -1",

      "& div:last-child": {
        justifyContent: "flex-end",
      },

      "& div:not(last-child)": {
        justifyContent: "flex-end",
      },
    },
  },
});

export const ImageWrapper = styled("div", {
  gridColumn: "1 / 8",
  gridArea: "1 / 6 / -1 / -1",
  position: "relative",
  height: "fit-content",

  "&:hover": {
    "&::before": {
      content: "none",
    },
  },

  "&::before": {
    position: "absolute",
    content: "",
    inset: 0,
    background: "rgba(20,20,27,0.5)",
  },
});

export const Content = styled("div", {
  position: "relative",
  gridColumn: "7  / -1",
  gridArea: "1 / 1 / -1 / 7",

  "> span": {
    color: "$green400",
  },

  "& h3": {
    fontSize: 28,
    marginTop: "1rem",
    marginBottom: "1rem",

    "& a": {
      color: "$white",
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  "& p": {
    background: "$gray900",
    padding: "1rem",
    borderRadius: 8,
  },
});

export const TagsWrapper = styled("div", {
  display: "flex",
  gap: 8,
  marginTop: "1rem",

  "& span": {
    color: "$gray500",
  },
});

export const LinksWrapper = styled("div", {
  display: "flex",
  marginTop: 16,
  gap: 8,

  "& svg": {
    color: "$white",
  },
});
