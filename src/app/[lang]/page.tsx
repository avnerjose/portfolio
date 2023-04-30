"use client";

import { BulletNavigation } from "@/components/BulletNavigation";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { AboutMeSection } from "@/components/layout/sections/AboutMe";
import { ContactSection } from "@/components/layout/sections/Contact";
import { HeroSection } from "@/components/layout/sections/Hero";
import { MyProjectsSection } from "@/components/layout/sections/MyProjects";
import { SkillsAndToolsSection } from "@/components/layout/sections/SkillsAndTools";
import { WorkExperienceSection } from "@/components/layout/sections/WorkExperience";
import { useDetectReachedScrollBottom } from "@/hooks/useDetectReachedScrollBottom";
import { useEffect } from "react";

interface HomeProps {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: HomeProps) {
  const hasReachedBottom = useDetectReachedScrollBottom({
    offset: 89,
  });

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  return (
    <>
      <HeroSection lang={lang} />
      <AboutMeSection lang={lang} />
      <SkillsAndToolsSection />
      <MyProjectsSection />
      <WorkExperienceSection />
      <ContactSection />
      <BulletNavigation />
      <SocialMediaLinks variant={hasReachedBottom ? "dislocated" : "default"} />
    </>
  );
}
