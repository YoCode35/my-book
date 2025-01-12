"use client";

import useDotsPerRow from "../../components/useResponsiveDots";
import DotsRectangle from "../../components/DotsRectangle";

export default function Portfolio() {

  const dotsPerRow = useDotsPerRow();

  return (
    <div
      className="bg-cover
                 bg-no-repeat
                 bg-[url('/img/colored_spots.png')]
                 pb-24"
    >
      <DotsRectangle
        className=" w-full
                    w-[100%]
                    relative sm:relative md:relative lg:relative
                    top-[0] sm:top-[0] md:top-[0] lg:top-[0]
                    right-0 sm:right-0 md:right-0 lg:right-0                      
                    h-[55px]
                    z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <h2 id="portfolio" className="title-page
                                    text-2xl sm:text-3xl md:text-4xl
                                    pt-16 sm:pt-20 md:pt-24 lg:pt-8
                                    mb-12"
      >
        Portfolio
      </h2>
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
