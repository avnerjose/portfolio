import { useState, useEffect } from "react";

const useScrollDirection = (threshold = 20) => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDifference = currentScrollY - prevScrollY;

      if (scrollDifference > threshold) {
        setScrollDirection("down");
      } else if (prevScrollY > currentScrollY) {
        setScrollDirection("up");
      } else {
        setScrollDirection(null);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrollDirection;
};

export default useScrollDirection;
