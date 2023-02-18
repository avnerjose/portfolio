import { motion } from "framer-motion";
import { styled } from "stitches.config";

export const Container = styled(motion.ol, {
  display: "flex",
  gap: 16,
  marginTop: 16,
  listStyle: "none",
  alignSelf: "flex-end",
});
