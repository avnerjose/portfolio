import { motion } from "framer-motion";

import {
  Categories,
  useGetProjectsWithPaginationAndFilterQuery,
} from "@/graphql/generated";
import { ProjectItem } from "@/components/ProjectItem";
import { PaginationItem } from "@/components/PaginationItem";
import { ProjectMapper } from "@/mappers/ProjectMapper";
import { useMediaQuery } from "react-responsive";
import { ProjectItemMobile } from "@/components/ProjectItem/Mobile";
import * as Variants from "../animations";
import { Container } from "./styles";

interface ProjectTabProps {
  tabValue: string;
  categories: Categories[];
}

export function ProjectTab({ categories, tabValue }: ProjectTabProps) {
  const { data } = useGetProjectsWithPaginationAndFilterQuery({
    variables: {
      categories,
    },
  });
  const convertedData = data
    ? ProjectMapper.projectsWithPaginationQueryToDomain(data)
    : null;
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const ProjectItemComponent = isMobile ? ProjectItemMobile : ProjectItem;

  const projectsList = convertedData?.map((project, i) => (
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
      <motion.ul
        variants={Variants.list}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
      >
        <motion.li variants={Variants.itemFromBottom}>
          <PaginationItem label={1} isActive />
        </motion.li>
        <motion.li variants={Variants.itemFromBottom}>
          <PaginationItem label={2} />
        </motion.li>
        <motion.li variants={Variants.itemFromBottom}>
          <PaginationItem label={3} />
        </motion.li>
      </motion.ul>
    </Container>
  );
}
