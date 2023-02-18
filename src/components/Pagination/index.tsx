import { motion } from "framer-motion";

import * as Variants from "./animations";
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
    <Container
      variants={Variants.list}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    >
      {pageNumbers.map((i) => (
        <motion.li key={i} variants={Variants.itemFromBottom}>
          <PaginationItem
            label={i}
            isActive={i === currentPage}
            onClick={() => onPageChange(i)}
          />
        </motion.li>
      ))}
    </Container>
  );
}
