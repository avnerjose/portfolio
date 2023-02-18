import { motion } from "framer-motion";

import * as Variants from "./animations";
import { Container, Content, Trail, YearFlag } from "./styles";
import { Paragraph } from "../Paragraph";

interface WorkExperienceItem {
  animationDelay: number;
  workExperience: {
    title: string;
    description: string[];
    company: string;
    startDate: Date;
    endDate?: Date;
  };
}

export function WorkExperienceItem({
  workExperience: { title, description, company, startDate, endDate },

  animationDelay,
}: WorkExperienceItem) {
  return (
    <Container>
      <YearFlag
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={Variants.itemFromLeft}
        custom={animationDelay}
      >
        {endDate ? endDate.getFullYear() : new Date().getFullYear()}
      </YearFlag>
      <Trail
        variants={Variants.itemFromBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={animationDelay}
      />
      <Content
        variants={Variants.content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={animationDelay}
      >
        <motion.h3 variants={Variants.itemFromLeft}>{title}</motion.h3>
        <motion.span variants={Variants.itemFromLeft}>{company}</motion.span>
        {description.map((item, i) => (
          <Paragraph
            variants={Variants.itemFromLeft}
            color="white"
            size="small"
            key={i}
          >
            {item}
          </Paragraph>
        ))}
      </Content>
    </Container>
  );
}
