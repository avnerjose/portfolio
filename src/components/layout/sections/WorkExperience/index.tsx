import { NumberedHeading } from "@/components/NumberedHeading";
import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import { useGetWorkExperiencesQuery } from "@/graphql/generated";
import * as Variants from "./animations";
import { Container, Content } from "./styles";

export function WorkExperienceSection() {
  const { data } = useGetWorkExperiencesQuery();
  return (
    <Container id="experience">
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
            key={workExperience.id}
            animationDelay={i + 1}
            workExperience={workExperience}
          />
        ))}
      </Content>
    </Container>
  );
}
