import { Button } from "@/components/Button";
import { Container, Content, Span, Title } from "./styles";
import { Paragraph } from "@/components/Paragraph";

export function HeroSection() {
  return (
    <Container>
      <Content>
        <Span>Hi, my name is</Span>
        <Title>Avner José.</Title>
        <Title color="gray">I'm a Frontend Developer.</Title>
        <Paragraph>
          Currently located in Brazil. I’m a Computer Engineering student in my
          last year of college and also a web developer passionate about
          building websites and apps.
        </Paragraph>
        <Button>Contact me</Button>
      </Content>
    </Container>
  );
}
