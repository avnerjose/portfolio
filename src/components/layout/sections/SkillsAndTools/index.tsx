import { SkillItem } from "@/components/SkillItem";
import { NumberedHeading } from "@/components/NumberedHeading";
import { Container, Content, SkillsWrapper } from "./styles";

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
  return (
    <Container id="skills">
      <Content>
        <NumberedHeading number={2} label="Skills and tools" />
        <SkillsWrapper>
          {SKILLS_AND_TOOLS.map(({ id, imageUrl, label }) => (
            <SkillItem key={id} imageUrl={imageUrl} label={label} />
          ))}
        </SkillsWrapper>
      </Content>
    </Container>
  );
}
