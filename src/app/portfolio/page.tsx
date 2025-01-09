"use client";
import { useState, useEffect } from "react";
import DotsRectangle from "../../components/DotsRectangle";

export default function Portfolio() {

  const [dotsPerRow, setDotsPerRow] = useState(40); // Valeur par défaut

  useEffect(() => {
    const updateDots = () => {
      if (window.innerWidth < 640) {
        setDotsPerRow(20); // Mobile
      } else if (window.innerWidth < 1024) {
        setDotsPerRow(30); // Tablette
      } else {
        setDotsPerRow(50); // Desktop
      }
    };

    updateDots(); // Initial call
    window.addEventListener("resize", updateDots); // Écoute des redimensionnements

    return () => window.removeEventListener("resize", updateDots); // Nettoyage
  }, []);

  return (
    <div
      className="bg-cover
                 bg-no-repeat
                 bg-[url('/img/colored_spots.png')]
                 pb-24"
    >

      {/* DotsRectangle Components */}
      <DotsRectangle
        className=" w-full
                      w-[100%]
                      relative sm:relative md:relative lg:relative
                      top-[-50] sm:top-[-60] md:top-[-50] lg:top-[-50]
                      right-0 sm:right-0 md:right-0 lg:right-0
                      mt-6 sm:mt-8 md:mt-12 bg-transparent
                      h-[55px]
                      z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="rgba(128,0,128,1)"
      />

      <h1 id="portfolio" className="page-title
                                    text-2xl sm:text-3xl md:text-4xl
                                    mb-12"
      >
        Portfolio
      </h1>
      <div className="px-4 sm:px-8 md:px-16
                      max-w-screen-lg
                      mx-auto"
      >
        <p className="text-white text-center font-quicksand">
          Mes réalisations
        </p>
      </div>
    </div>
  );
}
