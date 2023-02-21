"use client";

import { useParallax } from "react-scroll-parallax";

import { Button } from "@/components/Button";
import { Paragraph } from "@/components/Paragraph";
import * as Variants from "./animations";
import { Container, Content, Span, TechBubble, Title } from "./styles";

export function HeroSection() {
  const { ref: ref1 } = useParallax<HTMLDivElement>({ speed: -10 });
  const { ref: ref2 } = useParallax<HTMLDivElement>({ speed: -4 });
  const { ref: ref3 } = useParallax<HTMLDivElement>({ speed: -40 });

  return (
    <Container id="hero">
      <Content variants={Variants.content} initial="hidden" animate="show">
        <Span variants={Variants.itemFromLeft}>Hi, my name is</Span>
        <Title variants={Variants.itemFromBottom}>Avner José.</Title>
        <Title color="gray" variants={Variants.itemFromBottom}>
          I'm a Frontend Developer.
        </Title>
        <Paragraph variants={Variants.itemFromRight}>
          Currently located in Brazil. I’m a Computer Engineering student in my
          last year of college and also a web developer passionate about
          building websites and apps.
        </Paragraph>
        <Button variants={Variants.itemFromBottom}>Contact me</Button>
        <TechBubble variants={Variants.itemFromTop1} ref={ref1}>
          <img src="/images/react.svg" alt="ReactJS" />
        </TechBubble>
        <TechBubble variants={Variants.itemFromTop2} ref={ref2} size="medium">
          <img src="/images/typescript.svg" alt="Typescript" />
        </TechBubble>
        <TechBubble variants={Variants.itemFromTop3} ref={ref3} size="small">
          <img src="/images/html.svg" alt="HTML" />
        </TechBubble>
      </Content>
    </Container>
  );
}
