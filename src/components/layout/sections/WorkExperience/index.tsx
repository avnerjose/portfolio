"use client";

import { useRef } from "react";
import { NumberedHeading } from "@/components/NumberedHeading";
import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import { useGetWorkExperiencesQuery } from "@/graphql/generated";
import * as Variants from "./animations";
import { Container, Content } from "./styles";
import { ComponentWithTranslation } from "@/contracts";

export function WorkExperienceSection({ lang }: ComponentWithTranslation) {
  const { data } = useGetWorkExperiencesQuery();
  const sectionRef = useRef(null);

  return (
    <Container id="experience" ref={sectionRef}>
      <Content>
        <NumberedHeading
          variants={Variants.itemFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          number={4}
          label="Work Experience"
        />
        {data?.workExperiences.map((workExperience, i) => (
          <WorkExperienceItem
            locale={lang}
            key={workExperience.id}
            animationDelay={i + 1}
            workExperience={workExperience}
          />
        ))}
      </Content>
    </Container>
  );
}
