"use client"; // Force l'utilisation côté client uniquement

import { useEffect, useState } from "react";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // On s'assure d'être côté client
  }, []);

  // On ne rend le contenu que lorsque le composant est côté client pour éviter les incohérences
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col justify-start items-center h-screen bg-[url('/img/colored_spots.png')] bg-no-repeat bg-center bg-[size:33%] bg-[position:center_0%] md:bg-[position:center_0%] bg-[position:center_-11%]">
      <h1 className="text-4xl font-bold text-navTitle text-shadow mt-[0px]">Plus d&apos;infos à propos</h1>
      <p className="text-white mt-4">De moi</p>
    </div>
  );
}

