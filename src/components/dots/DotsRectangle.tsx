import { useState, useEffect } from "react";

type DotsRectangleProps = {
  className?: string;
  dotColor?: string;
  rows?: number;
  dotsPerRow?: number; // ✅ Permet d'override
  width?: string;
  height?: string;
};

export default function DotsRectangle({
  className = "",
  dotColor = "#fff000",
  rows = 3,
  dotsPerRow, // Utilisation facultative
  width = "100%",
  height = "55px",
}: DotsRectangleProps) {
  const [calculatedDots, setCalculatedDots] = useState(40);

  useEffect(() => {
    if (dotsPerRow !== undefined) return; // ✅ Si dotsPerRow est fourni, ne fait rien

    const updateDots = () => {
      if (window.innerWidth < 640) {
        setCalculatedDots(20);
      } else if (window.innerWidth < 1024) {
        setCalculatedDots(30);
      } else {
        setCalculatedDots(50);
      }
    };

    updateDots();
    window.addEventListener("resize", updateDots);
    return () => window.removeEventListener("resize", updateDots);
  }, [dotsPerRow]); // 🔹 Ajout de dotsPerRow comme dépendance

  return (
    <div
      className={`w-full ${className}`}
      style={{ width, height }}
    >
      <div className="w-full h-full flex flex-col justify-between items-center">
        {[...Array(rows)].map((_, index) => (
          <div key={index} className="flex justify-between w-full">
            {[...Array(dotsPerRow ?? calculatedDots)].map((_, pointIndex) => ( // 🔹 Utilisation conditionnelle
              <span
                key={pointIndex}
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: dotColor }}
              ></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
