import { NumberedHeading } from "@/components/NumberedHeading";
import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import { Container, Content } from "./styles";

export function WorkExperienceSection() {
  return (
    <Container id="experience">
      <Content>
        <NumberedHeading number={4} label="Work Experience" />
        {[...new Array(2)].map((_, i) => (
          <WorkExperienceItem key={i} />
        ))}
      </Content>
    </Container>
  );
}
