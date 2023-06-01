"use client";
import { useRef } from "react";
import Carousel from "react-grid-carousel";

import { SkillItem } from "@/components/SkillItem";
import { NumberedHeading } from "@/components/NumberedHeading";
import * as Variants from "./animations";
import { Container, Content } from "./styles";

const SKILLS_AND_TOOLS = [
  {
    id: 1,
    label: "ReactJS",
    imageUrl: "/images/react.svg",
  },
  {
    id: 2,
    label: "Typescript",
    imageUrl: "/images/typescript.svg",
  },
  {
    id: 3,
    label: "HTML & CSS",
    imageUrl: "/images/htmlCss.svg",
  },
  {
    id: 4,
    label: "NextJS",
    imageUrl: "/images/next.svg",
  },
  {
    id: 5,
    label: "Git",
    imageUrl: "/images/git.svg",
  },
  {
    id: 6,
    label: "Jest",
    imageUrl: "/images/jest.svg",
  },
  {
    id: 7,
    label: "Storybook",
    imageUrl: "/images/storybook.svg",
  },
  {
    id: 8,
    label: "Cypress",
    imageUrl: "/images/cypress.svg",
  },
];

export function SkillsAndToolsSection() {
  const sectionRef = useRef(null);

  return (
    <Container id="skills" ref={sectionRef}>
      <Content>
        <NumberedHeading
          variants={Variants.itemFromFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          number={2}
          label="Skills and tools"
        />

        <Carousel
          containerStyle={{
            marginTop: 32,
          }}
          cols={4}
          rows={3}
          responsiveLayout={[
            {
              breakpoint: 550,
              cols: 1,
              rows: 3,
              gap: 0,
            },
            {
              breakpoint: 768,
              cols: 3,
              rows: 3,
              gap: 10,
            },
            {
              breakpoint: 800,
              cols: 3,
              rows: 3,
              gap: 0,
            },
          ]}
        >
          {SKILLS_AND_TOOLS.map(({ id, imageUrl, label }, index) => (
            <Carousel.Item key={id}>
              <SkillItem
                key={id}
                variants={Variants.itemFromTop}
                imageUrl={imageUrl}
                label={label}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                custom={index % (4 * 2)}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}
