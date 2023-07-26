import { GitHub, ExternalLink } from "react-feather";

import { HTMLMotionProps, motion } from "framer-motion";
import { Project } from "@/entities/Project";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";

interface ProjectItemMobileProps extends HTMLMotionProps<"article"> {
  project: Project;
}

export function ProjectItemMobile({
  project: { category, description, title, repoUrl, tags, webUrl, imageUrl },
  ...rest
}: ProjectItemMobileProps) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang, "home");

  const tagsList = tags?.map((tag) => (
    <span className="text-gray-400" key={tag}>
      {tag}
    </span>
  ));

  return (
    <motion.article
      className="bg-gray-900 p-6 rounded-lg bg-no-repeat bg-cover relative mb-6"
      {...rest}
      style={{
        backgroundImage: `linear-gradient(
      rgba(20, 20, 27, 0.90), 
      rgba(20, 20, 27, 0.90)
        ),
        url('${imageUrl}')`,
      }}
    >
      <span className="text-green-400">{t(category)}</span>
      <h3>{title}</h3>
      <p className="text-white my-4">{description}</p>
      <div className="flex gap-2">{tagsList}</div>
      <div className="flex mt-4 gap-2">
        <a aria-label="Github repository" href={repoUrl}>
          <GitHub className="text-white" size={32} />
        </a>
        {webUrl && (
          <a aria-label="Deployed website" href={webUrl}>
            <ExternalLink className="text-white" size={32} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
