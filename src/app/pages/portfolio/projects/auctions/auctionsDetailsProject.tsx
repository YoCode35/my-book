"use client";

import Image from "next/image";

export default function AuctionsDetailsProject() {
  return (
    // Auctions Section
    <section
      id="auctions"
      className="px-4 sm:px-8 md:px-16 2xl:px-32
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
                    mb-12`}
      >
        GitHub
      </a>

      <h4 className="project-description">
        Développement d’un site d’enchères sous Java EE et SQL Server.
      </h4>

      <p className="text-white mb-8">
        <span className="block mb-6">Travail collaboratif de 4 développeurs.</span> 

        <span className="block mb-6">Application Web organisée en couches, développée en Java et SQL Server.</span>
      </p>

      <div className="text-white space-y-6 mb-12">
        <h5 className="font-semibold text-lg">1. Planification et Conception</h5>
        <ul className="list-disc list-inside">
          <li>Création des tables</li>
          <li>Gestion des utilisateurs</li>
          <li>
            Les utilisateurs peuvent créer ou participer à des enchères.
          </li>
          <li>
            Les enchères sont associées à des articles et peuvent appartenir à
            différentes catégories.
          </li>
        </ul>

        <h5 className="font-semibold text-lg">2. Développement du Back-End</h5>
        <ul className="list-disc list-inside">
          <li>
            Modélisation des entités utilisateurs, articles, catégories et
            enchères.
          </li>
          <li>
            Gestion des utilisateurs : inscription, connexion, gestion des
            profils et des rôles.
          </li>
        </ul>

        <h5 className="font-semibold text-lg">3. Développement du Front-End</h5>
        <ul className="list-disc list-inside">
          <li>Page d’accueil</li>
          <li>Pages de connexion et d’inscription</li>
          <li>Détails de l’enchère</li>
          <li>Gestion de profil utilisateur</li>
          <li>Navigation et routes</li>
        </ul>
      </div>

      <Image
        src="/img/auctions/ref_auctions.jpg"
        alt="Page d'accueil du site de ventes aux enchères"
        width={594}
        height={600}
        className="img_portfolio"
        priority
        style={{ maxWidth: "594px" }}
      />
    </section>
  );
}
