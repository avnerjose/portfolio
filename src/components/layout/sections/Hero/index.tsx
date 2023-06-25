"use client";

import { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";

import { Button } from "@/components/Button";
import { Paragraph } from "@/components/Paragraph";
import * as Variants from "./animations";
import {
  Container,
  Content,
  Span,
  TechBubble,
  Title,
  Subtitle,
} from "./styles";
import { ComponentWithTranslation } from "@/contracts";
import { useTranslation } from "@/app/i18n/client";
import { HeroPattern } from "@/components/HeroPattern";

export function HeroSection({ lang }: ComponentWithTranslation) {
  const { t } = useTranslation(lang, "home");
  const sectionRef = useRef(null);
  const { ref: ref1 } = useParallax<HTMLDivElement>({ speed: -10 });
  const { ref: ref2 } = useParallax<HTMLDivElement>({ speed: -4 });
  const { ref: ref3 } = useParallax<HTMLDivElement>({ speed: -40 });

  return (
    <Container id="hero" ref={sectionRef}>
      <HeroPattern />
      <Content variants={Variants.content} initial="hidden" animate="show">
        <Span variants={Variants.itemFromBottom}>{t("myNameIs")}</Span>
        <Title variants={Variants.itemFromBottom}>Avner José.</Title>
        <Subtitle color="gray" variants={Variants.itemFromBottom}>
          {t("occupation")}
        </Subtitle>
        <Paragraph variants={Variants.itemFromBottom}>
          {t("description")}
        </Paragraph>
        <Button variants={Variants.itemFromBottom}>{t("contactMe")}</Button>
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
