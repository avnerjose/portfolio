import { PaginationItem } from "./PaginationItem";
import { Container } from "./styles";

interface PaginationProps {
  totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  onPageChange: (p: number) => void;
}

export function Pagination({
  currentPage,
  totalResults,
  onPageChange,
  resultsPerPage,
}: PaginationProps) {
  const pageAmount = Math.ceil(totalResults / resultsPerPage);
  const pageNumbers = [...new Array(pageAmount)].map((_, i) => i + 1);

  return (
    <Container>
      {pageNumbers.map((i) => (
        <PaginationItem
          label={i}
          isActive={i === currentPage}
          onClick={() => onPageChange(i)}
        />
      ))}
    </Container>
  );
}
