import { motion } from "framer-motion";

import {
  Categories,
  useGetProjectsWithPaginationAndFilterQuery,
} from "@/graphql/generated";
import { ProjectItem } from "@/components/ProjectItem";
import { PaginationItem } from "@/components/Pagination/PaginationItem";
import { ProjectMapper } from "@/mappers/ProjectMapper";
import { useMediaQuery } from "react-responsive";
import { ProjectItemMobile } from "@/components/ProjectItem/Mobile";
import * as Variants from "../animations";
import { Container } from "./styles";
import { useMemo, useState } from "react";
import { Pagination } from "@/components/Pagination";

interface ProjectTabProps {
  tabValue: string;
  categories: Categories[];
}

export function ProjectTab({ categories, tabValue }: ProjectTabProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const skip = useMemo(() => currentPage * projectsPerPage - projectsPerPage, [
    currentPage,
    projectsPerPage,
  ]);
  const { data } = useGetProjectsWithPaginationAndFilterQuery({
    variables: {
      categories,
      projectsPerPage,
      skip,
    },
  });
  const mappedData = ProjectMapper.getProjectsWithPaginationAndFilterQuery(
    data
  );

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const ProjectItemComponent = isMobile ? ProjectItemMobile : ProjectItem;

  const projectsList = mappedData?.results?.map((project, i) => (
    <ProjectItemComponent
      key={project.id}
      project={project}
      custom={i}
      variants={i % 2 !== 0 ? Variants.itemFromRight : Variants.itemFromLeft}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    />
  ));

  return (
    <Container className="TabsContent" value={tabValue}>
      {projectsList}
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        resultsPerPage={projectsPerPage}
        totalResults={mappedData?.pageInfo.totalResults ?? 0}
      />
    </Container>
  );
}
