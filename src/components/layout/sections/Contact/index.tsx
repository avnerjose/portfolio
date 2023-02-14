import { NumberedHeading } from "@/components/NumberedHeading";
import { Container, Content, MainContent } from "./styles";
import { Button } from "@/components/Button";

export function ContactSection() {
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
      <img src="/images/floatingLeftGreen.svg" alt="Floating symbols" />
      <img src="/images/floatingLeftGray.svg" alt="Floating symbols" />
      <img src="/images/floatingRightGreen.svg" alt="Floating symbols" />
      <img src="/images/floatingRightGray.svg" alt="Floating symbols" />
    </Container>
  );
}
