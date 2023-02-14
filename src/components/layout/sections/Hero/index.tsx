import { Button } from "@/components/Button";
import { Paragraph } from "@/components/Paragraph";
import { Container, Content, Span, TechBubble, Title } from "./styles";
import { useParallax } from "react-scroll-parallax";

export function HeroSection() {
  const { ref: ref1 } = useParallax<HTMLDivElement>({ speed: -10 });
  const { ref: ref2 } = useParallax<HTMLDivElement>({ speed: -4 });
  const { ref: ref3 } = useParallax<HTMLDivElement>({ speed: -40 });

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
        <TechBubble ref={ref1}>
          <img src="/images/react.svg" alt="ReactJS" />
        </TechBubble>
        <TechBubble ref={ref2} size="medium">
          <img src="/images/typescript.svg" alt="Typescript" />
        </TechBubble>
        <TechBubble ref={ref3} size="small">
          <img src="/images/html.svg" alt="HTML" />
        </TechBubble>
      </Content>
    </Container>
  );
}
