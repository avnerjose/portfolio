import { GitHub, ExternalLink } from "react-feather";

import { Container, LinksWrapper, TagsWrapper } from "./styles";

interface ProjectItemMobileProps {
  project: {
    category: string;
    name: string;
    description: string;
    tags: string[];
    imageUrl: string;
    repoUrl: string;
    webUrl?: string;
  };
}

export function ProjectItemMobile({
  project: { category, description, name, repoUrl, tags, webUrl, imageUrl },
}: ProjectItemMobileProps) {
  const tagsList = tags.map((tag) => <span key={tag}>{tag}</span>);

  return (
    <Container
      css={{
        backgroundImage: `linear-gradient(
      rgba(20, 20, 27, 0.95), 
      rgba(20, 20, 27, 0.95)
        ),
        url('${imageUrl}')`,
      }}
    >
      <span>{category}</span>
      <h3>{name}</h3>
      <p>{description}</p>
      <TagsWrapper>{tagsList}</TagsWrapper>
      <LinksWrapper>
        <a href={repoUrl}>
          <GitHub size={32} />
        </a>
        {webUrl && (
          <a href={webUrl}>
            <ExternalLink size={32} />
          </a>
        )}
      </LinksWrapper>
    </Container>
  );
}
