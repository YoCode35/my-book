"use client";

import useDotsPerRow from "../../components/useResponsiveDots";
import DotsRectangle from "../../components/DotsRectangle";

export default function Portfolio() {

  const dotsPerRow = useDotsPerRow();

  return (
    <div
      className="bg-cover
                 bg-no-repeat
                 bg-[url('/img/colored_spots.png')]
                 pb-24"
    >
      <DotsRectangle
        className=" w-full
                    w-[100%]
                    relative sm:relative md:relative lg:relative
                    top-[0] sm:top-[0] md:top-[0] lg:top-[0]
                    right-0 sm:right-0 md:right-0 lg:right-0                      
                    h-[55px]
                    z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <h2 id="portfolio" className="title-page
                                    text-6xl sm:text-5xl md:text-6xl
                                    pt-16 sm:pt-20 md:pt-24 lg:pt-8
                                    mb-12"
      >
        Portfolio
      </h2>
      <div className="px-4
                      sm:px-8 md:px-16
                      max-w-screen-lg
                      mx-auto"
      >
        <h3 id="mytodolist" className="title-project"
        >Projet MyTodoList</h3>

        <h3 className="title-page-portfolio">Développement d’une application PWA (Progressive Web App) Cross Platform avec Flutter pour le Front et PHP/MySQL pour le Back.</h3>

        <p className="unordered-list text-white mb-12">
          1. Planification et Conception
          <br/><br/>
          - Objectifs du projet : Application multiplateforme (Mobile & Web)<br/>
          - Besoins : Fonctionnalités principales et optimisation de l’expérience utilisateur<br/>
          - Technique : Architecture de l’application, flux de données, infrastructure et déploiement<br/>
          - Priorités : Utilisateurs, fonctionnalités et interface<br/>
          - UI/UX : Interface utilisateur fluide et intuitive<br/>
          - Contraintes et risques : Optimisations spécifiques au développement multiplateforme, sécurité des données (RGPD), scalabilité
        </p>

        <p className="unordered-list text-white mb-12">
          2 . Spécifications techniques et architecture de l’application
          <br/><br/>
          - Front-end : Flutter<br/>
          - Back-end : PHP (API RESTful)<br/>
          - Développement en couches (IHM, Métier, Accès Data, Persistance Data)<br/>
          - Base de données : MySQL pour une gestion relationnelle des utilisateurs et des tâches<br/>
          - Déploiement : Hébergement mutualisé, serveur web (Apache/Nginx), certificats SSL/TLS
        </p>

        <p className="unordered-list text-white mb-12">
        3. Développement Back-End
        <br/><br/>
        - Utilisateur : Inscription/connexion (+ Firebase Authentication)<br/>
        - Compte : Réinitialisation sécurisée e.mail/mot de passe<br/>
        - Tâches/Listes : Endpoints API pour CRUD (Create, Read, Update, Delete)<br/>
        - Notifications : Inscription, mise à jour e.mail, réinitialisation mot de passe<br/>
        - Sécurité : Hachage des mots de passe, validation des entrées utilisateurs<br/>
        </p>

        <p className="unordered-list text-white mb-12">
        4. Développement Front-End
        <br/><br/>
        - UI/UX (Prototypage) : Balsamiq et Figma<br/>
        - Infographie : Bitmap logo/illustration<br/>
        - Barre de navigation et menu contextuel<br/>
        - Écran d’accueil<br/>
        - Pages annexes<br/>
        - Écrans d’inscription/connexion<br/>
        - Gestion des tâches et des listes<br/>
        - Validation des entrées utilisateur
        </p>

        <p className="unordered-list text-white mb-12">
        5. Sécurité
        <br/><br/>
        - Gestion des rôles<br/>
        - Connexions sécurisées via HTTPS<br/>
        - Sessions sécurisées<br/>
        - Mise en place de mécanismes contre les attaques courantes (XSS, injections SQL, CSRF, anti-bruteforce)<br/>
        - Cryptage des mots de passes
        </p>

        <p className="unordered-list text-white mb-12">
        6. Tests
        <br/><br/>
        - Tests unitaires<br/>
        - Tests fonctionnels<br/>
        - Tests de performance<br/>
        - Tests de compatibilité<br/>
        - Tests utilisateurs
        </p>
      </div>
    </div>
  );
}
