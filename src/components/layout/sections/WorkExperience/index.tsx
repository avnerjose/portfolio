import { NumberedHeading } from "@/components/NumberedHeading";
import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import * as Variants from "./animations";
import { Container, Content } from "./styles";

export function WorkExperienceSection() {
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
        {[...new Array(3)].map((_, i) => (
          <WorkExperienceItem key={i} animationDelay={i + 1} />
        ))}
      </Content>
    </Container>
  );
}
