"use client";

import Image from "next/image";

export default function SeriesDetailsProject() {


  return (
    <div>

      {/* Series Section */}
      <section id="series"
        className="px-4 sm:px-8 md:px-16 2xl:px-32
                lg:pt-10 xl:pt-10 2xl:pt-10                                        
                mx-auto"
      >
        <h3 className="title-project">[Projet Series]</h3>

        <a
          href="https://github.com/YoCode35/Series"
          target="_blank"
          rel="noopener noreferrer" // Security
          className={`text-LinkInactive 
                hover:text-LinkHover 
                hover:underline
                text-[3.5vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.3vw]
                items-center
                flex flex-col
                mb-12`}
        >
          https://github.com/YoCode35/Series
        </a>

        <h4 className="project-description">Développement d’une Plateforme « de service de streaming en ligne de séries » (Symfony & MySQL).</h4>

        <p className="unordered-list text-white mb-12">En cours de rédaction</p>

        <Image
          src="/img/ref_series-list.png"
          alt="Visuel de la page référençant une liste de séries"
          width={790}
          height={363}
          className="w-full mx-auto rounded-xl"
          priority
          style={{ maxWidth: "790px" }}
        />

        <Image
          src="/img/ref_series_details.png"
          alt="Visuel de la page présentant une série"
          width={790}
          height={363}
          className="w-full mx-auto rounded-xl"
          priority
          style={{ maxWidth: "790px" }}
        />
      </section>

    </div>
  );
}
