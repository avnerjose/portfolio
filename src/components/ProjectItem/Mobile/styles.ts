import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.article, {
  background: "$gray900",
  padding: 24,
  borderRadius: 8,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",

  "& + &": {
    marginTop: 24,
  },

  "& > span": {
    color: "$green400",
  },

  "& p": {
    color: "$white",
    marginTop: 16,
    marginBottom: 16,
  },
});

export const TagsWrapper = styled("div", {
  display: "flex",
  gap: 8,

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
