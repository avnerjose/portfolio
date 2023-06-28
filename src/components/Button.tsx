import React, { PropsWithChildren, useEffect, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import classNames from "classnames";
import { Link, LinkProps } from "react-scroll";

interface ComponentProps extends PropsWithChildren {
  size?: "big" | "small";
  as?: "button" | "link";
}

type ButtonProps = ComponentProps & (HTMLMotionProps<"button"> | LinkProps);

export function Button({
  children,
  size = "big",
  as = "button",
  ...rest
}: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timeout);
  }, []);

  switch (as) {
    case "button":
      return (
        <motion.button
          {...(rest as HTMLMotionProps<"button">)}
          className={classNames(
            "text-green-400 font-bold relative bg-transparent z-[1] select-none cursor-pointer border border-green-400 rounded-[4px] inline-block focus:outline focus:outline-green-400 focus:shadow-main-button focus:translate-x-main-button focus:translate-y-main-button hover:outline-none hover:shadow-main-button translate-x-main-button translate-y-main-button transition-all ease-main-button duration-[0.25s] " +
              rest.className,
            {
              "py-4 px-16": size === "big",
              "py-4 px-8": size === "small",
            }
          )}
        >
          {children}
        </motion.button>
      );
    case "link":
      return (
        <Link
          {...(rest as any)}
          className={classNames(
            "text-green-400 font-bold relative bg-transparent z-[1] select-none cursor-pointer border border-green-400 rounded-[4px] inline-block focus:outline focus:outline-green-400 focus:shadow-main-button focus:translate-x-main-button focus:translate-y-main-button hover:outline-none hover:shadow-main-button translate-x-main-button translate-y-main-button transition-all ease-main-button duration-[0.25s]",
            {
              "py-4 px-16": size === "big",
              "py-4 px-8": size === "small",
            }
          )}
        >
          {children}
        </Link>
      );
  }
}
