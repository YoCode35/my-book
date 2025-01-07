"use client"; // Force l'utilisation côté client uniquement

export default function About() {

  return (
    <div className="flex flex-col justify-start items-center h-screen bg-[url('/img/colored_spots.png')] bg-no-repeat bg-center bg-[size:33%] bg-[position:center_0%] md:bg-[position:center_0%] bg-[position:center_-11%]">
      <div style={{ height: '50px' }}></div>
      <h1 id="about" className="text-4xl font-bold text-navTitle text-shadow mt-[0px]">
        Plus d&apos;infos à propos
      </h1>
      <p className="text-white mt-4">De moi</p>
    </div>
  );
}
