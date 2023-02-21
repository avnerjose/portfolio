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

export default function Home() {
  const hasReachedBottom = useDetectReachedScrollBottom({
    offset: 89,
  });

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsAndToolsSection />
      <MyProjectsSection />
      <WorkExperienceSection />
      <ContactSection />
      <BulletNavigation />
      <SocialMediaLinks variant={hasReachedBottom ? "dislocated" : "default"} />
    </>
  );
}
