import { useState, useEffect } from "react";

export default function useDotsPerRow() {
  const [dotsPerRow, setDotsPerRow] = useState(40);

  useEffect(() => {
    const updateDots = () => {
      if (window.innerWidth < 640) {
        setDotsPerRow(20);
      } else if (window.innerWidth < 1024) {
        setDotsPerRow(30);
      } else {
        setDotsPerRow(50);
      }
    };

    updateDots(); // Initialize on mount
    window.addEventListener("resize", updateDots);

    return () => window.removeEventListener("resize", updateDots); // Cleanup on unmount
  }, []);

  return dotsPerRow;
}