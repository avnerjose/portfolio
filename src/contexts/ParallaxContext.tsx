"use client";
import { PropsWithChildren } from "react";
import { ParallaxProvider as ParallaxProviderLib } from "react-scroll-parallax";

export const ParallaxProvider = ({ children }: PropsWithChildren) => {
  return <ParallaxProviderLib>{children}</ParallaxProviderLib>;
};
