"use client";

export default function Portfolio() {

  return (
    <section
      id="portfolio" // Ajout de l'ancre pour permettre un lien direct vers cette section
      className="flex flex-col justify-start items-center h-screen bg-[url('/img/colored_spots.png')] bg-no-repeat bg-center bg-[size:33%] bg-[position:center_0%] md:bg-[position:center_0%] bg-[position:center_-11%]"
    >
      <div style={{ height: '50px' }}></div>
      <h1 className="text-4xl font-bold text-navTitle text-shadow mt-[0px]">
        Portfolio
      </h1>
      <p className="text-white mt-4">Mes réalisations</p>
    </section>
  );
}
