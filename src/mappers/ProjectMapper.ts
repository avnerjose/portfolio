import { Project } from "@/entities/Project";
import { GetProjectsWithPaginationAndFilterQuery } from "@/graphql/generated";

export class ProjectMapper {
  public static projectsWithPaginationQueryToDomain(
    query: GetProjectsWithPaginationAndFilterQuery
  ) {
    const { projects: queryProjects } = query;

    const projects: Project[] = queryProjects.map(
      ({ thumbnail, webUrl, ...rest }) => ({
        ...rest,
        webUrl: webUrl ?? undefined,
        imageUrl: thumbnail?.url,
      })
    );

    return projects;
  }
}
