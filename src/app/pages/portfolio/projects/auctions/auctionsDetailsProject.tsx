"use client";

import Image from "next/image";

export default function AuctionsDetailsProject() {

  return (

    // Auctions Section
    <section id="auctions" className="px-4 sm:px-8 md:px-16 2xl:px-32
                                      lg:pt-10 xl:pt-10 2xl:pt-10                                        
                                      mx-auto"
      >
        <h3 className="title-project mt-6">[Projet Enchères]</h3>

        <a
          href="https://github.com/YoCode35/Projet_Encheres"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-LinkInactive 
                      hover:text-LinkHover 
                      hover:underline
                      text-[3.5vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.3vw]
                      items-center
                      flex flex-col
                      mb-12`
          }
        >
          GitHub
        </a>

        <h4 className="project-description">Développement d’une Plateforme de « vente aux enchères d’objets de seconde main » (Java EE & SQL Server).</h4>

        <p className="unordered-list text-white mb-12">En cours de rédaction</p>

        <Image
          src="/img/ref_auctions.jpg"
          alt="Visuel de la page référençant une liste de séries"
          width={594}
          height={600}
          className="w-full mx-auto rounded-xl"
          priority
          style={{ maxWidth: "594px" }}
        />
      </section>
  );
}
