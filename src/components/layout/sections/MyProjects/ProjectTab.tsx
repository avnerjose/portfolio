import {
  Categories,
  useGetProjectsWithPaginationAndFilterLazyQuery,
} from "@/graphql/generated";
import { ProjectItem } from "@/components/ProjectItem";
import { ProjectMapper } from "@/mappers/ProjectMapper";
import { useMediaQuery } from "react-responsive";
import { ProjectItemMobile } from "@/components/ProjectItem/Mobile";
import * as Variants from "./animations";
import { useEffect, useMemo, useState } from "react";
import { Pagination } from "@/components/Pagination";
import * as Tabs from "@radix-ui/react-tabs";
import { useLanguage } from "@/hooks/useLanguage";

interface ProjectTabProps {
  tabValue: string;
  categories: Categories[];
  isSelected: boolean;
}

export function ProjectTab({
  categories,
  tabValue,
  isSelected,
}: ProjectTabProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const { locale } = useLanguage();
  const skip = useMemo(() => currentPage * projectsPerPage - projectsPerPage, [
    currentPage,
    projectsPerPage,
  ]);
  const [
    getProjects,
    { data },
  ] = useGetProjectsWithPaginationAndFilterLazyQuery({
    variables: {
      categories,
      projectsPerPage,
      skip,
      locale: [locale],
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

  useEffect(() => {
    if (isSelected) {
      getProjects();
    }
  }, [categories, projectsPerPage, skip]);

  return (
    <Tabs.Content
      className="flex flex-col overflow-hidden data-[state=active]:py-8"
      value={tabValue}
    >
      {projectsList}
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        resultsPerPage={projectsPerPage}
        totalResults={mappedData?.pageInfo.totalResults ?? 0}
      />
    </Tabs.Content>
  );
}
