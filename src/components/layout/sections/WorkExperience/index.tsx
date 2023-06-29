"use client";

import { useRef } from "react";
import { NumberedHeading } from "@/components/NumberedHeading";
import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import { useGetWorkExperiencesQuery } from "@/graphql/generated";
import * as Variants from "./animations";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";

export function WorkExperienceSection() {
  const { lang, locale } = useLanguage();
  const { t } = useTranslation(lang, "home");
  const { data } = useGetWorkExperiencesQuery({
    variables: {
      locale: [locale],
    },
  });
  const sectionRef = useRef(null);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="flex flex-col min-h-screen px-6 py-8 max-w-[1120px] m-auto">
        <NumberedHeading
          variants={Variants.itemFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          number={4}
          label={t("workExperience")}
        />
        <div className="h-8" />
        {data?.workExperiences.map((workExperience, i) => (
          <WorkExperienceItem
            key={workExperience.id}
            animationDelay={i + 1}
            workExperience={workExperience}
          />
        ))}
      </div>
    </section>
  );
}
