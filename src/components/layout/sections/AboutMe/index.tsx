"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { Paragraph } from "@/components/Paragraph";
import { NumberedHeading } from "@/components/NumberedHeading";
import * as Variants from "./animation";
import { Avatar, Container, Content } from "./styles";
import { Locale, useGetAboutMeQuery } from "@/graphql/generated";
import { ComponentWithTranslation } from "@/contracts";

export function AboutMeSection({ lang }: ComponentWithTranslation) {
  const { data } = useGetAboutMeQuery({
    variables: {
      locale: [lang.split("-")[0] as Locale],
    },
  });

  return (
    <Container id="about">
      <Content>
        <motion.div
          variants={Variants.content}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <NumberedHeading
            variants={Variants.itemFromLeft}
            number={1}
            label="About me"
          />
          {data?.aboutMes[0].content.map((item, i) => (
            <Paragraph key={i} variants={Variants.itemFromBottom}>
              {item}
            </Paragraph>
          ))}
        </motion.div>
        <Avatar
          variants={Variants.itemFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image src="https://github.com/avnerjose.png" alt="Avner José" fill />
        </Avatar>
      </Content>
    </Container>
  );
}
