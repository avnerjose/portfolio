import { useEffect, useState } from "react";

export const enum Section {
  Hero = "hero",
  About = "about",
  Skills = "skills",
  Projects = "projects",
  Experience = "experience",
  Contact = "contact",
}

export const useSections = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Hero);
  let prevTime = new Date().getTime();

  const scrollingLudicrouslyFast = (ms = 100) => {
    const curTime = new Date().getTime();
    const timeDiff = curTime - prevTime;
    prevTime = curTime;

    return timeDiff < ms;
  };

  const goToPrev = () => {
    const sections = Array.from(document.getElementsByTagName("section")).map(
      (item) => item.id
    );
    console.log(sections);
    const currentIndex = sections.findIndex((item) => item === currentSection);
    const newIndex = currentIndex - 1;

    if (newIndex < 0) {
      return;
    }

    setCurrentSection(sections[newIndex] as Section);
  };

  const goToNext = () => {
    const sections = Array.from(document.getElementsByTagName("section")).map(
      (item) => item.id
    );
    const currentIndex = sections.findIndex((item) => item === currentSection);
    const newIndex = currentIndex + 1;

    if (newIndex > sections.length) {
      return;
    }
    console.log("Go to next");
    setCurrentSection(sections[newIndex] as Section);
  };

  const handleMouseWheel = (event: any) => {
    switch (Math.sign(event.deltaY)) {
      case 1:
        goToNext();
        break;
      case -1:
        goToPrev();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleMouseWheel, false);
    window.addEventListener("mousewheel", handleMouseWheel, false);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel, false);
      window.removeEventListener("mousewheel", handleMouseWheel, false);
    };
  }, []);

  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     return;
  //   }

  //   const percentHeightOfViewport = (section: HTMLElement): number => {
  //     const sectionHeight = section.offsetHeight;
  //     const viewportHeight =
  //       window.innerHeight || document.documentElement.clientHeight;
  //     const rect = section.getBoundingClientRect();
  //     const isTopEdgeInOrUnderViewport = rect.top > 0;

  //     let viewableHeight;
  //     if (isTopEdgeInOrUnderViewport) {
  //       const maxViewableHeight = viewportHeight - rect.top;

  //       viewableHeight = Math.min(sectionHeight, maxViewableHeight);
  //     } else {
  //       const remainingHeight = rect.bottom;

  //       viewableHeight = Math.min(remainingHeight, viewportHeight);
  //     }
  //     viewableHeight = Math.max(0, viewableHeight);

  //     return viewableHeight / viewportHeight;
  //   };

  //   const getCurrentSection = (): void => {
  //     const sections = document.getElementsByTagName("section");
  //     const sectionsArray = Array.from(sections).filter(
  //       (section) => section.id !== ""
  //     );
  //     const mostVisibleSection = {
  //       section: Section.About,
  //       viewportHeightPercent: 0,
  //     };

  //     sectionsArray.forEach((section) => {
  //       const viewportHeightPercent = percentHeightOfViewport(section);

  //       if (viewportHeightPercent >= mostVisibleSection.viewportHeightPercent) {
  //         mostVisibleSection.section = section.id as Section;
  //         mostVisibleSection.viewportHeightPercent = viewportHeightPercent;
  //       }
  //     });

  //     setCurrentSection(mostVisibleSection.section);
  //   };

  //   getCurrentSection();
  //   window.addEventListener("scroll", getCurrentSection);

  //   return () => {
  //     window.removeEventListener("scroll", getCurrentSection);
  //   };
  // }, []);

  return currentSection;
};
