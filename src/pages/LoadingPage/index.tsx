import { AnimatedLogoIcon } from "@/components/AnimatedLogoIcon";
import { Container, LogoContainer } from "./styles";

export function LoadingPage() {
  return (
    <Container>
      <LogoContainer>
        <AnimatedLogoIcon />
      </LogoContainer>
    </Container>
  );
}
