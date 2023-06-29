"use client";

import { useParallax } from "react-scroll-parallax";

import { Paragraph } from "@/components/Paragraph";
import { Button } from "@/components/Button";
import { HeroPattern } from "@/components/HeroPattern";
import { useTranslation } from "@/app/i18n/client";
import { useLanguage } from "@/hooks/useLanguage";
import * as Variants from "./animations";
import { useRef } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang, "home");
  const sectionRef = useRef(null);
  const { ref: ref1 } = useParallax<HTMLDivElement>({ speed: -10 });
  const { ref: ref2 } = useParallax<HTMLDivElement>({ speed: -4 });
  const { ref: ref3 } = useParallax<HTMLDivElement>({ speed: -40 });

  return (
    <section className="relative overflow-hidden w-screen" id="hero" ref={sectionRef}>
      <HeroPattern />
      <motion.div
        className="flex flex-col justify-center p-6 max-w-[1120px] m-auto min-h-screen overflow-hidden z-10"
        variants={Variants.content}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className="text-green-400 mb-2"
          variants={Variants.itemFromLeft}
        >
          {t("myNameIs")}
        </motion.span>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 z-10"
          variants={Variants.itemFromBottom}
        >
          Avner José.
        </motion.h1>
        <motion.p
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 mb-4 z-10" 
          color="gray"
          variants={Variants.itemFromBottom}
        >
          {t("occupation")}
        </motion.p>
        <Paragraph variants={Variants.itemFromRight}>
          {t("description")}
        </Paragraph>
        <div className="mt-8 z-10">
          <Button as="link" to="contact" smooth spy offset={-85}>
            {t("contactMe")}
          </Button>
        </div>
        <motion.div
          className="hidden lg:flex items-center justify-center rounded-full bg-gray-800 absolute h-[184px] w-[184px] top-[40px] right-[140px] shadow-tech-bubble z-50"
          variants={Variants.itemFromTop1}
          ref={ref1}
        >
          <img className="h-[124px]" src="/images/react.svg" alt="ReactJS" />
        </motion.div>
        <motion.div
          className="hidden lg:flex items-center justify-center rounded-full bg-gray-800 absolute h-[156px] w-[156px] top-[72%] right-[320px] shadow-tech-bubble z-50"
          variants={Variants.itemFromTop2}
          ref={ref2}
        >
          <img src="/images/typescript.svg" alt="Typescript" />
        </motion.div>
        <motion.div
          className="hidden lg:flex items-center justify-center rounded-full bg-gray-800 absolute h-[124px] w-[124px] top-[5%] right-[520px] shadow-tech-bubble z-50"
          variants={Variants.itemFromTop3}
          ref={ref3}
        >
          <img src="/images/html.svg" alt="HTML" />
        </motion.div>
      </motion.div>
    </section>
  );
}
