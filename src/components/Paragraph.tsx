import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import classname from "classnames";

interface ParagraphProps extends HTMLMotionProps<"p"> {
  color?: "gray" | "white";
  size?: "big" | "small";
}

export function Paragraph({
  children,
  color = "gray",
  size = "big",
  ...rest
}: ParagraphProps) {
  return (
    <motion.p
      {...rest}
      className={classname("mt-2", {
        "text-gray-500": color === "gray",
        "text-white": color === "white",
        "text-[18px] md:text-xl": size === "big",
        "text-base": size === "small",
      })}
    >
      {children}
    </motion.p>
  );
}
