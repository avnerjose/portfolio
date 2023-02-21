"use client";

import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import { Button } from "@/components/Button";
import { NumberedHeading } from "@/components/NumberedHeading";
import { Paragraph } from "@/components/Paragraph";
import * as Variants from "./animations";
import { Container, Content, MainContent } from "./styles";

export function ContactSection() {
  const { ref: ref1 } = useParallax<HTMLImageElement>({ speed: -30 });
  const { ref: ref2 } = useParallax<HTMLImageElement>({ speed: -20 });
  const { ref: ref3 } = useParallax<HTMLImageElement>({ speed: -30 });
  const { ref: ref4 } = useParallax<HTMLImageElement>({ speed: -20 });

  return (
    <Container id="contact">
      <Content
        variants={Variants.content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <NumberedHeading
          variants={Variants.itemFromLeft}
          number={5}
          label="Contact"
        />
        <MainContent>
          <motion.h2 variants={Variants.itemFromBottom}>
            Let's get in touch
          </motion.h2>
          <Paragraph variants={Variants.itemFromBottom}>
            Got a question or proposal, or just want to say hello? Go ahead,
            I’ll try my best to get back to you!
          </Paragraph>
          <Button variants={Variants.itemFromBottom}>Contact me</Button>
        </MainContent>
      </Content>
      <img
        ref={ref1}
        src="/images/floatingLeftGreen.svg"
        alt="Floating symbols"
      />
      <img
        ref={ref2}
        src="/images/floatingLeftGray.svg"
        alt="Floating symbols"
      />
      <img
        ref={ref3}
        src="/images/floatingRightGreen.svg"
        alt="Floating symbols"
      />
      <img
        ref={ref4}
        src="/images/floatingRightGray.svg"
        alt="Floating symbols"
      />
    </Container>
  );
}
