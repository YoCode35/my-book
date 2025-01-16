"use client";

import useDotsPerRow from "../../components/useResponsiveDots";
import DotsRectangle from "../../components/DotsRectangle";
import Image from "next/image";

export default function Portfolio() {
  const dotsPerRow = useDotsPerRow();

  return (
    <div className="bg-cover bg-no-repeat bg-[url('/img/colored_spots.png')] pb-24">

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <h2 id="portfolio" className="title-page">Portfolio</h2>

      <div id="mytodolist" className="px-4 sm:px-8 md:px-16 2xl:px-32
                                      lg:pt-10 xl:pt-10 2xl:pt-10                                        
                                      mx-auto"
      >
        <h3 className="title-project">[Projet MyTodoList]</h3>

        <a
          href="https://www.mytodolist.tech"
          target="_blank"
          rel="noopener noreferrer"  // Security
          className=" text-navLinkHover 
                      hover:underline
                      text-[3.5vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.3vw]
                      items-center
                      flex flex-col
                      mb-12"
        >
          https://www.mytodolist.tech
        </a>

        <h4 className="project-description">Développement d’une application PWA (Progressive Web App) Cross Platform avec Flutter pour le Front et PHP/MySQL pour le Back.</h4>

        <p className="unordered-list text-white mb-12">
          1. Planification et Conception
          <br /><br />
          - Objectifs du projet : Application multiplateforme (Mobile & Web)
          <br />
          - Besoins : Fonctionnalités principales et optimisation de l’expérience utilisateur
          <br />
          - Technique : Architecture de l’application, flux de données, infrastructure et déploiement
          <br />
          - Priorités : Utilisateurs, fonctionnalités et interface
          <br />
          - UI/UX : Interface utilisateur fluide et intuitive
          <br />
          - Contraintes et risques : Optimisations spécifiques au développement multiplateforme, sécurité des données (RGPD), scalabilité
        </p>

        <p className="unordered-list text-white mb-12">
          2. Spécifications techniques et architecture de l’application
          <br /><br />
          - Front-end : Flutter
          <br />
          - Back-end : PHP (API RESTful)
          <br />
          - Développement en couches (IHM, Métier, Accès Data, Persistance Data)
          <br />
          - Base de données : MySQL pour une gestion relationnelle des utilisateurs et des tâches
          <br />
          - Déploiement : Hébergement mutualisé, serveur web (Apache/Nginx), certificats SSL/TLS
        </p>

        <p className="unordered-list text-white mb-12">
          3. Développement Back-End
          <br /><br />
          - Utilisateur : Inscription/connexion (+ Firebase Authentication)
          <br />
          - Compte : Réinitialisation sécurisée e.mail/mot de passe
          <br />
          - Tâches/Listes : Endpoints API pour CRUD (Create, Read, Update, Delete)
          <br />
          - Notifications : Inscription, mise à jour e.mail, réinitialisation mot de passe
          <br />
          - Sécurité : Hachage des mots de passe, validation des entrées utilisateurs
        </p>

        <p className="unordered-list text-white mb-12">
          4. Développement Front-End
          <br /><br />
          - UI/UX (Prototypage) : Balsamiq et Figma
          <br />
          - Infographie : Bitmap logo/illustration
          <br />
          - Barre de navigation et menu contextuel
          <br />
          - Écran d’accueil
          <br />
          - Pages annexes
          <br />
          - Écrans d’inscription/connexion
          <br />
          - Gestion des tâches et des listes
          <br />
          - Validation des entrées utilisateur
        </p>

        <p className="unordered-list text-white mb-12">
          5. Sécurité
          <br /><br />
          - Gestion des rôles
          <br />
          - Connexions sécurisées via HTTPS
          <br />
          - Sessions sécurisées
          <br />
          - Mise en place de mécanismes contre les attaques courantes (XSS, injections SQL, CSRF, anti-bruteforce)
          <br />
          - Cryptage des mots de passes
        </p>

        <p className="unordered-list text-white mb-12">
          6. Tests
          <br /><br />
          - Tests unitaires
          <br />
          - Tests fonctionnels
          <br />
          - Tests de performance
          <br />
          - Tests de compatibilité
          <br />
          - Tests utilisateurs
        </p>

        <p className="unordered-list text-white mb-12">
          7. Architecture du projet
        </p>

        <Image
          src="/img/Architecture_Webapp.png"
          alt="Architecture de l'application WebApp"
          width={1200}
          height={800}
          className="w-full mx-auto rounded-xl"
          priority
        />

      </div>
    </div>
  );
}
