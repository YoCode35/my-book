"use client";

import Image from "next/image";

export default function AuctionsDetailsProject() {
  return (
    // Auctions Section
    <section
      id="auctions"
      className="project-section"
    >
      <h3 className="title-project">[Projet Enchères]</h3>

      <a
        href="https://github.com/YoCode35/Projet_Encheres"
        target="_blank"
        rel="noopener noreferrer"
        className={`link-project-portfolio`}
      >
        GitHub
      </a>

      <h4 className="project-description">
        Développement d’un site d’enchères sous Java EE et SQL Server.
      </h4>

      <p className="unordered-list mb-8">
        <span className="block mb-6">Travail collaboratif de 4 développeurs.</span>

        <span className="block mb-6">Application Web organisée en couches, développée avec Java et SQL Server.</span>
      </p>

      <div className="unordered-list space-y-6 mb-12">
        <ul className="ml-0 list-none">
          <li><strong>1. Planification et Conception</strong>
            <ul className="ml-4">
              <li>- Création des tables</li>
              <li>- Gestion des utilisateurs</li>
              <li>
                - Les utilisateurs peuvent créer ou participer à des enchères.
              </li>
              <li>
                - Les enchères sont associées à des articles et peuvent appartenir à
                différentes catégories.
              </li>
            </ul>
          </li>
        </ul>
        <ul className="ml-0 list-none">
          <li><strong>2. Développement du Back-End</strong>
            <ul className="ml-4">
              <li>
                - Modélisation des entités utilisateurs, articles, catégories et
                enchères.
              </li>
              <li>
                - Gestion des utilisateurs : inscription, connexion, gestion des
                profils et des rôles.
              </li>
            </ul>
          </li>
        </ul>

        <ul className="ml-0 list-none">
          <li><strong>3. Développement du Front-End</strong>
            <ul className="ml-4">
              <li>- Page d’accueil</li>
              <li>- Pages de connexion et d’inscription</li>
              <li>- Détails de l’enchère</li>
              <li>- Gestion de profil utilisateur</li>
              <li>- Navigation et routes</li>
            </ul>
          </li>
        </ul>
      </div>

      <Image
        src="/img/auctions/ref_auctions.webp"
        alt="Page d'accueil du site de ventes aux enchères"
        width={594}
        height={600}
        className="img_portfolio"
        priority
      />
    </section>
  );
}
