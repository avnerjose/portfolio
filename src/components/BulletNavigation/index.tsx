import { Link } from "react-scroll";
import { Container } from "./styles";

const WEBSITE_SECTIONS = [
  { label: "Hero", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

export function BulletNavigation() {
  return (
    <Container>
      <ul>
        {WEBSITE_SECTIONS.map((item) => (
          <li key={item.to}>
            <Link to={item.to} smooth spy activeClass="active" offset={-85}/>
          </li>
        ))}
      </ul>
    </Container>
  );
}
