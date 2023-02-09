import { Container } from "./styles";

interface SkillItemProps {
  label: string;
  imageUrl: string;
}

export function SkillItem({ imageUrl, label }: SkillItemProps) {
  return (
    <Container>
      <img src={imageUrl} alt={label} />
      <span>{label}</span>
    </Container>
  );
}
