import { BulletNavigation } from "@/components/BulletNavigation";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutMeSection } from "@/components/layout/sections/AboutMe";
import { ContactSection } from "@/components/layout/sections/Contact";
import { HeroSection } from "@/components/layout/sections/Hero";
import { MyProjectsSection } from "@/components/layout/sections/MyProjects";
import { SkillsAndToolsSection } from "@/components/layout/sections/SkillsAndTools";
import { WorkExperienceSection } from "@/components/layout/sections/WorkExperience";
import { useDetectReachedScrollBottom } from "@/hooks/useDetectReachedScrollBottom";
import Head from "next/head";

export default function Home() {
  const hasReachedBottom = useDetectReachedScrollBottom({
    offset: 89,
  });

  return (
    <>
      <Head>
        <title>Portfolio | Avner José</title>
      </Head>
      <Header />
      <HeroSection />
      <AboutMeSection />
      <SkillsAndToolsSection />
      <MyProjectsSection />
      <WorkExperienceSection />
      <ContactSection />
      <Footer />
      <BulletNavigation />
      <SocialMediaLinks variant={hasReachedBottom ? "dislocated" : "default"} />
    </>
  );
}
