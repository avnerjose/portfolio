import { GitHub, ExternalLink } from "react-feather";
import { HTMLMotionProps, motion } from "framer-motion";
import { Project } from "@/entities/Project";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";

interface ProjectItemProps extends HTMLMotionProps<"article"> {
  project: Project;
}

export function ProjectItem({
  project: { category, description, imageUrl, title, repoUrl, tags, webUrl },
  ...rest
}: ProjectItemProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang, "home");

  return (
    <motion.article
      className="project-item grid grid-cols-[repeat(12,1fr)] mb-[2rem]"
      {...rest}
    >
      <div className="col-[1/8] image-wrapper relative h-[fit-content] hover:before:content-none before:absolute before:content-[''] before:inset-0 before:z-[1] before:bg-[rgba(20,20,27,0.5)]">
        <a
          className="block aspect-[16/9] relative rounded-lg overflow-hidden"
          href={webUrl ?? repoUrl}
          target="_blank"
        >
          <Image className="w-full" fill alt={title} src={imageUrl ?? ""} />
        </a>
      </div>
      <div className="relative col-[7/-1] content z-[2]">
        <span className="text-green-400">{t(category)}</span>
        <h3 className="text-[28px] my-4">
          <a
            className="text-white decoration-none hover:underline"
            href={webUrl ?? repoUrl}
            target="_blank"
          >
            {title}
          </a>
        </h3>
        <p className="w-full bg-gray-900 p-4 rounded-lg">{description}</p>
        <div className="flex gap-2 mt-4">
          {tags?.map((item) => (
            <span className="text-gray-400" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex mt-4 gap-2">
          <a aria-label="github repository" href={repoUrl}>
            <GitHub className="text-white" size={32} />
          </a>
          {webUrl && (
            <a aria-label="deployed webiste" href={webUrl}>
              <ExternalLink className="text-white" size={32} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
