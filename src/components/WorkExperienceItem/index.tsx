import * as Variants from "./animations";

import { Paragraph } from "../Paragraph";
import { formatDate } from "@/utils/format-date";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

interface WorkExperienceItem {
  animationDelay: number;
  workExperience: {
    title: string;
    jobs: Array<{
      name: string;
      startDate: Date;
      endDate?: Date;
      description: string[];
    }>;
  };
}

export function WorkExperienceItem({
  workExperience: { title, jobs },
  animationDelay,
}: WorkExperienceItem) {
  const { lang } = useLanguage();
  const sortedJobs = [...jobs]?.sort(
    (j1, j2) =>
      new Date(j2.startDate).getTime() - new Date(j1.startDate).getTime()
  );

  return (
    <article className="flex relative mb-4">
      <motion.div
        className="flex h-8 w-8 bg-green-400 rounded-full shadow-trail after:absolute after:content-[''] after:block after:h-[calc(100%-48px)] after:w-[2px] after:bg-gray-500 after:bottom-0 after:left-4"
        variants={Variants.itemFromBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={animationDelay}
      />
      <motion.div
        className="flex flex-col flex-1 ml-2"
        variants={Variants.content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={animationDelay}
      >
        <motion.h3 className="text-green-400 font-bold text-2xl">
          {title}
        </motion.h3>
        {sortedJobs?.map((job) => (
          <motion.div
            className="mb-4"
            variants={Variants.itemFromBottom}
            key={job.name.trim()}
          >
            <motion.h4 className="text-[22px]">
              {job.name} | {formatDate(new Date(job.startDate), lang)} -{" "}
              {job.endDate ? formatDate(new Date(job.endDate), lang) : "Now"}{" "}
            </motion.h4>
            {job.description.map((item, i) => (
              <Paragraph color="gray" size="small" key={i}>
                {item}
              </Paragraph>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </article>
  );
}
