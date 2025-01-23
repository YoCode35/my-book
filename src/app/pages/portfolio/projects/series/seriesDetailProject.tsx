"use client";

import Image from "next/image";

export default function SeriesDetailsProject() {


  return (
    <div>

      {/* Series Section */}
      <section id="series" className="px-4 sm:px-8 md:px-16 2xl:px-32
                                      lg:pt-10 xl:pt-10 2xl:pt-10                                        
                                      mx-auto"
      >
        <h3 className="title-project mt-6">[Projet Series]</h3>

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
                      mb-12`
          }
        >
          https://github.com/YoCode35/Series
        </a>

        <h4 className="project-description">Développement d’une Plateforme « de service de streaming en ligne de séries » (Symfony & MySQL).</h4>

        <p className="unordered-list text-white mb-6">
          <span className="text-colorChart underline block mb-2">Résumé du projet</span>
          Ce projet vise à développer une plateforme web permettant aux utilisateurs de découvrir, gérer et interagir avec un catalogue de séries télévisées. Réalisé avec <strong>Symfony et MySQL</strong>,
          il offre une architecture solide et extensible pour répondre aux besoins d’une application web moderne.
        </p>

        <div className="unordered-list text-white mb-6">
          <span className="text-colorChart underline block mb-2">Technologies utilisées</span>
          <ul className="ml-0 list-none">
            <li>- <strong>Back-end :</strong> Symfony pour la création de l’architecture MVC et des fonctionnalités métier.</li>
            <li>- <strong>Base de données :</strong> MySQL avec gestion des entités et relations via Doctrine (ORM).</li>
            <li>- <strong>Administration des données :</strong> Utilisation de phpMyAdmin pour superviser les données et tester rapidement les requêtes SQL.</li>
            <li>- <strong>Langages principaux :</strong> PHP (Framework : Symfony), SQL.</li>
            <li>- <strong>Mise en ligne et tests :</strong> Wampserver.</li>
          </ul>
        </div>


        <div className="unordered-list text-white mb-6">
          <span className="text-colorChart underline block mb-2">Fonctionnalités principales</span>

          <ul className="ml-0 list-none">
            <li><strong>1. Gestion des utilisateurs</strong>
              <ul className="ml-2 list-none">
                <li>- Système d’inscription et d’authentification sécurisé.</li>
                <li>- Fonctionnalités utilisateur :</li>
                <ul className="ml-12 list-disc">
                  <li>Mise à jour du profil.</li>
                  <li>Réinitialisation de mot de passe via lien sécurisé.</li>
                </ul>
              </ul>
            </li>

            <li className="mt-6"><strong>2. Gestion des séries</strong>
              <ul className="ml-2 list-none">
                <li>- CRUD (Création, Lecture, Mise à jour et Suppression) pour les séries.</li>
                <li>- Visualisation des détails d’une série : synopsis, casting, durée des épisodes.</li>
              </ul>
            </li>

            <li className="mt-6"><strong>3. Tableau de bord pour l’administration des séries</strong>
              <ul className="ml-2 list-none">
                <li>- Interface dédiée pour l’administration des séries et des utilisateurs.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="unordered-list text-white mb-8">
          <span className="text-colorChart underline block mb-2">Points forts techniques</span>
          <ul className="ml-0 list-none">
            <li>- <strong>Respect des bonnes pratiques de développement :</strong> utilisation de conventions Symfony pour assurer maintenabilité et extensibilité du projet.</li>
            <li>- <strong>Structure modulaire :</strong> séparation claire entre logique métier, accès aux données et interface utilisateur.</li>
            <li>- <strong>Performances :</strong> optimisation des requêtes grâce aux relations et jointures avec Doctrine.</li>
          </ul>
        </div>

        <Image
          src="/img/ref_series-list.png"
          alt="Visuel de la page référençant une liste de séries"
          width={790}
          height={363}
          className="w-full mx-auto rounded-xl border border-white mb-6"
          priority
          style={{ maxWidth: "790px" }}
        />

        <Image
          src="/img/ref_series_details.png"
          alt="Visuel de la page présentant une série"
          width={790}
          height={363}
          className="w-full mx-auto rounded-xl border border-white"
          priority
          style={{ maxWidth: "790px" }}
        />
      </section>

    </div>
  );
}
