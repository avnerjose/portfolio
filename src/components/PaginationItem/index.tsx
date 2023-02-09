import { Container } from "./styles";

interface PaginationItemProps {
  label: number;
  isActive?: boolean;
}

export function PaginationItem({
  isActive = false,
  label,
}: PaginationItemProps) {
  return (
    <Container state={isActive ? "active" : "inactive"}>{label}</Container>
  );
}
