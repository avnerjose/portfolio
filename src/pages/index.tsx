import { AboutMeSection } from "@/components/layout/sections/AboutMe";
import { HeroSection } from "@/components/layout/sections/Hero";
import { SkillsAndToolsSection } from "@/components/layout/sections/SkillsAndTools";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsAndToolsSection />
    </>
  );
}
