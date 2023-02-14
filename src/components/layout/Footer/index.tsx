import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="Logo" />
        <span>&copy; {new Date().getFullYear()} All rights reserved</span>
      </Content>
    </Container>
  );
}
