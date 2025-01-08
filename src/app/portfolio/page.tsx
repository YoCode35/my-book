"use client";

export default function Portfolio() {
  return (
    <div
      className="bg-cover
                 bg-no-repeat
                 bg-[url('/img/colored_spots.png')]
                 pb-24"
    >
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
        <p className="text-white mt-4 text-center">
          Mes réalisations
        </p>
      </div>
    </div>
  );
}
