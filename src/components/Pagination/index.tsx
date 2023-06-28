import { PaginationItem } from "./PaginationItem";

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
    <ol className="flex gap-4 mt-4 list-none self-end">
      {pageNumbers.map((i) => (
        <PaginationItem
          label={i}
          key={i}
          isActive={i === currentPage}
          onClick={() => onPageChange(i)}
        />
      ))}
    </ol>
  );
}
