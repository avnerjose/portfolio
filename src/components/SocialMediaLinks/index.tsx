import { GitHub, Linkedin } from "react-feather";
import { Container } from "./styles";

export function SocialMediaLinks() {
  return (
    <Container>
      <li>
        <a href="https://github.com/avnerjose" target="_blank">
          <GitHub />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/avnerjose" target="_blank">
          <Linkedin />
        </a>
      </li>
    </Container>
  );
}
