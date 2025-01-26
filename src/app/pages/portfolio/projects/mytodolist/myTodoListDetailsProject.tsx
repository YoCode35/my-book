"use client";

import Image from "next/image";

export default function MyTodoListDetailsProject() {

  return (

    // MyTodoList Section
    <section id="mytodolist" className="px-4 sm:px-8 md:px-16 2xl:px-32
                                        lg:pt-10 xl:pt-10 2xl:pt-10                                        
                                        mx-auto"
      >
        <h3 className="title-project">[Projet MyTodoList]</h3>

        <a
          href="https://www.mytodolist.tech"
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
          Web
        </a>

        <h4 className="project-description">Développement d’une application PWA (Progressive Web App) Cross Platform avec (Flutter & PHP/MySQL).</h4>

        <p className="unordered-list text-white mb-12">
          1. Planification et Conception
          <br /><br />
          - Objectifs du projet : Application multiplateforme (Mobile & Web)
          <br />
          - Besoins : Fonctionnalités principales et optimisation de l’expérience utilisateur
          <br />
          - Technique : Architecture de l’application, flux de données, infrastructure et déploiement
          <br />
          - UI/UX : Interface utilisateur intuitive et ergonomique
          <br />
          - Contraintes et risques : Optimisations spécifiques au développement multiplateforme, sécurité des données (RGPD), scalabilité
        </p>

        <p className="unordered-list text-white mb-12">
          2. Spécifications techniques et architecture de l’application
          <br /><br />
          - Front-end : Flutter (Progressive Web Application)
          <br />
          - Back-end : PHP/MySQL (APIs sécurisées via HTTPS)
          <br />
          <span className="block mb-6">- Développement en couches (IHM, Métier, Accès aux données, Persistance des données)</span>
          <br />

          <Image
            src="/img/mytodolist/Architecture_Webapp.png"
            alt="Architecture de l'application WebApp"
            width={700}
            height={809}
            className="img_portfolio"
            priority
            style={{ maxWidth: "700px" }}
          />

          <span className="block mb-6">- Base de données : MySQL avec une gestion relationnelle des utilisateurs et des tâches</span>

          <Image
            src="/img/mytodolist/mcd.png"
            alt="Modèle conceptuel de données"
            width={700}
            height={875}
            className="img_portfolio"
            priority
            style={{ maxWidth: "700px" }}
          />

          <Image
            src="/img/mytodolist/mld.png"
            alt="Modèle logique de données"
            width={700}
            height={489}
            className="img_portfolio"
            priority
            style={{ maxWidth: "700px" }}
          />

          <Image
            src="/img/mytodolist/mpd.png"
            alt="Modèle physique de données"
            width={700}
            height={563}
            className="img_portfolio"
            priority
            style={{ maxWidth: "700px" }}
          />

          <br />
          - Déploiement : Hébergement mutualisé, serveur web (Apache/Nginx), certificats SSL/TLS
        </p>

        <p className="unordered-list text-white mb-12">
          3. Développement Back-End
          <br /><br />
          - Utilisateur : Inscription/connexion (+ Firebase Authentication)
          <br />
          - Compte : Gestion de compte, réinitialisation sécurisée e.mail/mot de passe
          <br />
          - Tâches/Listes : API CRUD (Create, Read, Update, Delete)
          <br />
          - Notifications : Inscription, mise à jour e.mail, réinitialisation mot de passe
          <br />
          - Sécurité
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
          - Tâches et listes
          <br />
          - Sécurité
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

      </section>
  );
}
