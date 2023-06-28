"use client";
import { useRef } from "react";
import Carousel from "react-grid-carousel";

import { SkillItem } from "@/components/SkillItem";
import { NumberedHeading } from "@/components/NumberedHeading";
import * as Variants from "./animations";

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
    <section id="skills" ref={sectionRef}>
      <div className="min-h-screen px-4 py-8 max-w-[1120px] m-auto">
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
          mobileBreakpoint={100}
          cols={4}
          rows={2}
          responsiveLayout={[
            {
              breakpoint: 410,
              cols: 1,
              rows: 2,
            },
            {
              breakpoint: 550,
              cols: 2,
              rows: 2,
            },
            {
              breakpoint: 768,
              cols: 3,
              rows: 3,
            },
          ]}
        >
          {SKILLS_AND_TOOLS.map(({ id, imageUrl, label }, index) => (
            <Carousel.Item key={id}>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
