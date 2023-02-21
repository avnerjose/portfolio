"use client";

import { HTMLMotionProps } from "framer-motion";
import { Heading, Span } from "./styles";

interface NumberedHeadingProps extends HTMLMotionProps<"h2"> {
  label: string;
  number: number;
}

export function NumberedHeading({
  label,
  number,
  ...rest
}: NumberedHeadingProps) {
  return (
    <Heading {...rest}>
      <Span>{number.toString().padStart(2, "0")}</Span> . {label}
    </Heading>
  );
}
