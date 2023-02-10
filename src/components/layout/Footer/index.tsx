import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <img src="/images/logo.svg" alt="Logo" />
      <span>&copy; {new Date().getFullYear()} All rights reserved</span>
    </Container>
  );
}
