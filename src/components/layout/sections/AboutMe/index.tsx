"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { Paragraph } from "@/components/Paragraph";
import { NumberedHeading } from "@/components/NumberedHeading";
import * as Variants from "./animation";
import { Avatar, Container, Content } from "./styles";

export function AboutMeSection() {
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
          <Paragraph variants={Variants.itemFromBottom}>
            Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu
            diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit
            viverra amet a urna penatibus tortor tincidunt odio. Adipiscing
            aliquet arcu viverra neque leo neque fusce sed.
          </Paragraph>
          <Paragraph variants={Variants.itemFromBottom}>
            Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu
            diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit
            viverra amet a urna penatibus tortor tincidunt odio. Adipiscing
            aliquet arcu viverra neque leo neque fusce sed.
          </Paragraph>
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
