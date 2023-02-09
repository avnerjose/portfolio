import { NumberedHeading } from "@/components/NumberedHeading";
import { Container } from "./styles";
import { WorkExperienceItem } from "@/components/WorkExperienceItem";

export function WorkExperienceSection() {
  return (
    <Container>
      <NumberedHeading number={4} label="Work Experience" />
      {[...new Array(2)].map(() => (
        <WorkExperienceItem />
      ))}
    </Container>
  );
}
