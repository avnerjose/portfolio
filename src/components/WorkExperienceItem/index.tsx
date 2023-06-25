import { motion } from "framer-motion";

import * as Variants from "./animations";
import {
  Container,
  Content,
  Trail,
  WorkExperienceTitle,
  JobTitle,
  JobContainer,
} from "./styles";
import { Paragraph } from "../Paragraph";
import { formatDate } from "@/utils/format-date";
import { useEffect } from "react";

interface WorkExperienceItem {
  locale: string;
  animationDelay: number;
  workExperience: {
    title: string;
    jobs: Array<{
      name: string;
      startDate: Date;
      endDate?: Date;
      description: string[];
    }>;
  };
}

export function WorkExperienceItem({
  workExperience: { title, jobs },
  locale,
  animationDelay,
}: WorkExperienceItem) {
  const sortedJobs = [...jobs]?.sort(
    (j1, j2) =>
      new Date(j2.startDate).getTime() - new Date(j1.startDate).getTime()
  );

  return (
    <Container>
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
        <WorkExperienceTitle>{title}</WorkExperienceTitle>
        {sortedJobs?.map((job) => (
          <JobContainer
            variants={Variants.itemFromBottom}
            key={job.name.trim()}
          >
            <JobTitle>
              {job.name} | {formatDate(new Date(job.startDate), locale)} -{" "}
              {job.endDate ? formatDate(new Date(job.endDate), locale) : "Now"}{" "}
            </JobTitle>
            {job.description.map((item, i) => (
              <Paragraph color="gray" size="small" key={i}>
                {item}
              </Paragraph>
            ))}
          </JobContainer>
        ))}
      </Content>
    </Container>
  );
}
