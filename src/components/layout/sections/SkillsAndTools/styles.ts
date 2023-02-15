import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled("section", {});

export const Content = styled("div", {
  minHeight: "100vh",
  paddingX: 16,
  paddingY: 32,
  maxWidth: "1120px",
  margin: "auto",
});

export const SkillsWrapper = styled(motion.div, {
  display: "grid",
  gap: 8,
  gridTemplateColumns: "repeat(4,1fr)",
  marginTop: 32,

  "@lg": {
    gridTemplateColumns: "repeat(3,1fr)",
  },

  "@md": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
});
