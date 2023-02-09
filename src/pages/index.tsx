import { AboutMeSection } from "@/components/layout/sections/AboutMe";
import { HeroSection } from "@/components/layout/sections/Hero";
import { MyProjectsSection } from "@/components/layout/sections/MyProjects";
import { SkillsAndToolsSection } from "@/components/layout/sections/SkillsAndTools";
import { WorkExperienceSection } from "@/components/layout/sections/WorkExperience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsAndToolsSection />
      <MyProjectsSection />
      <WorkExperienceSection />
    </>
  );
}
