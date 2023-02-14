import { useParallax } from "react-scroll-parallax";

import { NumberedHeading } from "@/components/NumberedHeading";
import { Button } from "@/components/Button";
import { Container, Content, MainContent } from "./styles";

export function ContactSection() {
  const { ref: ref1 } = useParallax<HTMLImageElement>({ speed: -30 });
  const { ref: ref2 } = useParallax<HTMLImageElement>({ speed: -20 });
  const { ref: ref3 } = useParallax<HTMLImageElement>({ speed: -30 });
  const { ref: ref4 } = useParallax<HTMLImageElement>({ speed: -20 });

  return (
    <Container>
      <Content>
        <NumberedHeading number={5} label="Contact" />
        <MainContent>
          <h2>Let's get in touch</h2>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead,
            I’ll try my best to get back to you!
          </p>
          <Button>Contact me</Button>
        </MainContent>
      </Content>
      <img
        ref={ref1}
        src="/images/floatingLeftGreen.svg"
        alt="Floating symbols"
      />
      <img
        ref={ref2}
        src="/images/floatingLeftGray.svg"
        alt="Floating symbols"
      />
      <img
        ref={ref3}
        src="/images/floatingRightGreen.svg"
        alt="Floating symbols"
      />
      <img
        ref={ref4}
        src="/images/floatingRightGray.svg"
        alt="Floating symbols"
      />
    </Container>
  );
}
