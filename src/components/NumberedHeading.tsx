"use client";

import { HTMLMotionProps, motion } from "framer-motion";

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
    <motion.h2
      className="flex items-center w-full font-bold whitespace-nowrap text-[26px] relative self-start after:block after:relative after:top-1/2 after:content-[''] after:h-[2px] after:bg-gray-500 after:ml-5 after:w-full after:sm:w-[300px]"
      {...rest}
    >
      <span className="text-green-400 mr-2">
        {number.toString().padStart(2, "0")}
      </span>{" "}
      . {label}
    </motion.h2>
  );
}
