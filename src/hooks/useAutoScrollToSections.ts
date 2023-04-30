import { useEffect, useState, useRef } from "react";

export const useAutoScrollToSections = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          smoothScrollTo(targetId);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => observer.current?.observe(section));

    window.scroll({
      top: 0,
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  const smoothScrollTo = (targetId: string) => {
    if (isScrolling) return; // Prevent multiple animations

    setIsScrolling(true);

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const headerHeight = 85;
      const targetOffsetTop = targetSection.offsetTop - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = targetOffsetTop - startPosition;
      const duration = 500; // Adjust the duration as desired

      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;

        const progress = Math.min(elapsed / duration, 1);
        const easing = easeInOutQuad(progress);

        window.scrollTo(0, startPosition + distance * easing);

        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        } else {
          setIsScrolling(false); // Animation complete, enable scrolling again
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  const handleScroll = () => {
    const scrollDirection = getScrollDirection();
    if (scrollDirection === "up") {
      setIsScrolling(false); // Disable smooth scrolling when scrolling from bottom to top
    }
  };

  const getScrollDirection = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
      lastScrollPosition = currentScrollPosition;
      return "down";
    } else {
      lastScrollPosition = currentScrollPosition;
      return "up";
    }
  };

  let lastScrollPosition = window.pageYOffset;

  // Easing function for smooth animation
  const easeInOutQuad = (progress: number) => {
    return progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
