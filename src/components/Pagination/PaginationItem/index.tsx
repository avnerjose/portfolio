import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface PaginationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: number;
  isActive?: boolean;
}

export function PaginationItem({
  isActive = false,
  label,
  ...rest
}: PaginationItemProps) {
  return (
    <Container {...rest} state={isActive ? "active" : "inactive"}>
      {label}
    </Container>
  );
}
