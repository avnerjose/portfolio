"use client";
import { HTMLMotionProps } from "framer-motion";
import { Container } from "./styles";

interface SkillItemProps extends HTMLMotionProps<"div"> {
  label: string;
  imageUrl: string;
}

export function SkillItem({ imageUrl, label, ...rest }: SkillItemProps) {
  return (
    <Container {...rest}>
      <img src={imageUrl} alt={label} />
      <span>{label}</span>
    </Container>
  );
}
