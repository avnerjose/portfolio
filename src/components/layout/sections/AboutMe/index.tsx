"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Paragraph } from "@/components/Paragraph";
import { NumberedHeading } from "@/components/NumberedHeading";
import * as Variants from "./animation";
import { Locale, useGetAboutMeQuery } from "@/graphql/generated";
import { AnimatedAvatarShapes } from "@/components/AnimatedAvatarShapes";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";

export function AboutMeSection() {
  const { locale, lang } = useLanguage();
  const { t } = useTranslation(lang, "home");
  const { data } = useGetAboutMeQuery({
    variables: {
      locale: [locale],
    },
  });
  const sectionRef = useRef(null);

  return (
    <section
      className="bg-gray-800 overflow-hidden"
      id="about"
      ref={sectionRef}
    >
      <motion.div className="flex flex-col justify-center md:grid grid-cols-[repeat(2,1fr)] min-h-[calc(100vh-85px)] px-6 py-8 max-w-[1120px] m-auto">
        <motion.div
          variants={Variants.content}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <NumberedHeading
              variants={Variants.itemFromLeft}
              number={1}
              label={t("aboutMe")}
            />
          </div>
          {data?.aboutMes[0].content.map((item, i) => (
            <Paragraph key={i} color="light-gray" variants={Variants.itemFromBottom}>
              {item}
            </Paragraph>
          ))}
        </motion.div>
        <div className="mb-5 w-full h-full flex items-center justify-center">
          <motion.figure
            className="self-center justify-center mt-[40px] relative h-[170px] w-[170px] lg:h-[350px] lg:w-[350px] md:h-[200px] md:w-[200px]"
            variants={Variants.itemFromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatedAvatarShapes className="absolute top-[-20px] left-[-30px] w-[250px] h-[195px] scale-[1.1] lg:top-[60px] lg:left-[50px] lg:scale-[2] md:top-0 md:left-[-10px] md:scale-[1.5]" />
            <Image
              className="rounded-full outline outline-[10px] outline-green-400"
              src="https://github.com/avnerjose.png"
              alt="Avner José"
              fill
              sizes="100%"
            />
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
}
