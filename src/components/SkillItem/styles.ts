import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  background: "$gray800",
  padding: 16,
  aspectRatio: "1/1",
  width: "100%",
  maxWidth: 250,

  "& span": {
    fontWeight: "bold",
    marginTop: 24,
  },
});
