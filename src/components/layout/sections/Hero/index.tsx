import { Button } from "@/components/Button";
import { Container, Paragraph, Span, Title } from "./styles";

export function HeroSection() {
  return (
    <Container>
      <Span>Hi, my name is</Span>
      <Title>Avner José.</Title>
      <Title color="gray">I'm a Frontend Developer.</Title>
      <Paragraph>
        Currently located in Brazil. I’m a Computer Engineering student in my
        last year of college and also a web developer passionate about building
        websites and apps.
      </Paragraph>
      <Button>Contact me</Button>
    </Container>
  );
}
