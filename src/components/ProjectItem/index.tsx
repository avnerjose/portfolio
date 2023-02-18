import { GitHub, ExternalLink } from "react-feather";

import {
  Container,
  Content,
  ImageWrapper,
  LinksWrapper,
  TagsWrapper,
} from "./styles";
import { HTMLMotionProps } from "framer-motion";
import { Project } from "@/entities/Project";
import Image from "next/image";

interface ProjectItemProps extends HTMLMotionProps<"article"> {
  project: Project;
}

export function ProjectItem({
  project: { category, description, imageUrl, title, repoUrl, tags, webUrl },
  ...rest
}: ProjectItemProps) {
  return (
    <Container {...rest}>
      <ImageWrapper>
        <a href={webUrl ?? repoUrl} target="_blank">
          <Image fill alt={title} src={imageUrl ?? ""}  />
        </a>
      </ImageWrapper>
      <Content>
        <span>{category}</span>
        <h3>
          <a href={webUrl ?? repoUrl} target="_blank">
            {title}
          </a>
        </h3>
        <p>{description}</p>
        <TagsWrapper>
          {tags?.map((item) => (
            <span>{item}</span>
          ))}
        </TagsWrapper>
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
      </Content>
    </Container>
  );
}
