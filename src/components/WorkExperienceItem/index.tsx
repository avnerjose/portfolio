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
import { useLanguage } from "@/hooks/useLanguage";

interface WorkExperienceItem {
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
  animationDelay,
}: WorkExperienceItem) {
  const { lang } = useLanguage();
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
              {job.name} | {formatDate(new Date(job.startDate), lang)} -{" "}
              {job.endDate ? formatDate(new Date(job.endDate), lang) : "Now"}{" "}
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
