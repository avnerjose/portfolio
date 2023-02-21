"use client";

import { useState, useEffect } from "react";

interface useDetectReachedScrollBottomProps {
  offset?: number;
}

export function useDetectReachedScrollBottom({
  offset = 0,
}: useDetectReachedScrollBottomProps) {
  const [hasReachedBottom, setHasReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset + offset;
      if (windowBottom >= docHeight) {
        if (!hasReachedBottom) {
          setHasReachedBottom(true);
        }
      } else {
        if (hasReachedBottom) {
          setHasReachedBottom(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasReachedBottom]);

  return hasReachedBottom;
}
