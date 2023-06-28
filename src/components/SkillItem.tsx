"use client";
import { HTMLMotionProps, motion } from "framer-motion";

interface SkillItemProps extends HTMLMotionProps<"div"> {
  label: string;
  imageUrl: string;
}

export function SkillItem({ imageUrl, label, ...rest }: SkillItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center self-center bg-gray-800 p-4 aspect-square w-full mw-[250px]"
      {...rest}
    >
      <img src={imageUrl} alt={label} />
      <span className="font-bold mt-6">{label}</span>
    </motion.div>
  );
}
