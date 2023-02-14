import { styled } from "stitches.config";

export const Container = styled("section", {});

export const Content = styled("div", {
  minHeight: "100vh",
  paddingX: 16,
  paddingY: 32,
  maxWidth: "1120px",
  margin: "auto",
});

export const SkillsWrapper = styled("div", {
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
