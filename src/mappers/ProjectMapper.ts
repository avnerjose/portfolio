import { Project } from "@/entities/Project";
import { GetProjectsWithPaginationAndFilterQuery } from "@/graphql/generated";

export class ProjectMapper {
  public static getProjectsWithPaginationAndFilterQuery(
    query: GetProjectsWithPaginationAndFilterQuery | undefined
  ) {
    if (!query) {
      return null;
    }

    const {
      projects,
      projectsConnection: {
        pageInfo: { pageSize },
      },
    } = query;

    const results: Project[] = projects.map(
      ({ thumbnail, webUrl, ...rest }) => ({
        ...rest,
        webUrl: webUrl ?? undefined,
        imageUrl: thumbnail?.url,
      })
    );

    return {
      results,
      pageInfo: {
        totalResults: pageSize,
      },
    };
  }
}
