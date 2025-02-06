"use client";

import Image from "next/image";

export default function StudentsDetailsProject() {

  return (

    // Students Section
    <section id="students" className="project-section"
      >
        <h3 className="title-project">[Projet Sortir.com]</h3>

        <a
          href="https://github.com/YoCode35/sortir.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`link-project-portfolio`
          }
        >
          GitHub
        </a>

        <h4 className="project-description">Développement d’une plateforme d’organisation d’évènements d’étudiants avec symfony.</h4>

        <p className="unordered-list mb-6">
          <span className="text-colorChart underline block mb-2">Problématique</span>
          Aujourd’hui, le Bureau des élèves (BDE) qui propose des activités hors du temps de formation ne communique que par affichage papier
          • Temps important pour la création et la pose des affiches
          • Les anciens stagiaires ne sont pas informés
          • L’inscription et l’organisation des activités sont compliquées et incombent aux membres du BDE
        </p>

        <p className="unordered-list mb-6">
          <span className="text-colorChart underline block mb-2">Résumé du projet</span>
          Développer une plateforme web destinée aux stagiaires en formation ainsi qu’aux anciens stagiaires et permettant l’organisation de sorties sur le temps hors formation
        </p>

        <div className="unordered-list mb-6">
          <span className="text-colorChart underline block mb-2">Technologies utilisées</span>
          <ul className="ml-0 list-none">
            <li>- <strong>Back-end :</strong> Symfony pour la création de l’architecture MVC et des fonctionnalités métier.</li>
            <li>- <strong>Base de données :</strong> MySQL avec gestion des entités et relations via Doctrine (ORM).</li>
            <li>- <strong>Administration des données :</strong> Utilisation de phpMyAdmin pour superviser les données et tester rapidement les requêtes SQL.</li>
            <li>- <strong>Langages principaux :</strong> PHP (Framework : Symfony), SQL.</li>
            <li>- <strong>Mise en ligne et tests :</strong> Wampserver.</li>
          </ul>
        </div>

        <Image
              src="/img/students/doc-vision-3.png"
              alt="Diagramme de cas d'utilisation présentant une vision globale des fonctions attendues"
              width={790}
              height={363}
              className="img_portfolio border border-white mb-6"
              priority
        />

        <Image
              src="/img/students/diag-classe.png"
              alt="Diagramme de classes présentant les entités et les relations entre les classes"
              width={790}
              height={363}
              className="img_portfolio border border-white mb-6"
              priority
        />

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

            <li className="mt-6"><strong>2. Gestion des sorties</strong>
              <ul className="ml-2 list-none">
                <li>- CRUD (Création, Affichage, Mise à jour et Suppression) pour les sorties.</li>
                <li>- Visualisation des détails d’une sortie : Nom de la sortie, date, titre de la sortie, durée de la sortie, date limite d’inscription, nom de l’organisateur, nombre maximum de participants, nombre de participants inscrits.</li>
              </ul>
            </li>

            <li className="mt-6"><strong>3. Tableau de bord pour l’administration des sorties</strong>
              <ul className="ml-2 list-none">
                <li>- Interface dédiée pour l’administration des sorties et des utilisateurs.</li>
              </ul>
            </li>
          </ul>
        </div>

        <Image
          src="/img/students/processus-gestion-sorties.png"
          alt="Diagramme du processus de gestion des sorties"
          width={790}
          height={363}
          className="img_portfolio border border-white mb-6"
          priority
        />

        <Image
          src="/img/students/diag-etat-sortie.png"
          alt="Diagramme du processus de gestion des sorties"
          width={790}
          height={363}
          className="img_portfolio border border-white mb-6"
          priority
        />

        <div className="unordered-list text-white mb-8">
          <span className="text-colorChart underline block mb-2">Points forts techniques</span>
          <ul className="ml-0 list-none">
            <li>- <strong>Respect des bonnes pratiques de développement :</strong> utilisation de conventions Symfony pour assurer maintenabilité et extensibilité du projet.</li>
            <li>- <strong>Structure modulaire :</strong> séparation claire entre logique métier, accès aux données et interface utilisateur.</li>
            <li>- <strong>Performances :</strong> optimisation des requêtes grâce aux relations et jointures avec Doctrine.</li>
          </ul>
        </div>

        <Image
          src="/img/students/ref_screen_manage-cities.png"
          alt="Formulaire de gestion des villes"
          width={700}
          height={300}
          className="img_portfolio border border-white mb-6"
          priority
        />

        <Image
          src="/img/students/ref_screen_manage-campus.png"
          alt="Formulaire de gestion des campus"
          width={700}
          height={300}
          className="img_portfolio border border-white mb-6"
          priority
        />

        <Image
          src="/img/students/ref_screen_manage-places.png"
          alt="Formulaire de gestion des lieux de sorties"
          width={700}
          height={300}
          className="img_portfolio border border-white mb-6"
          priority
        />

        <Image
          src="/img/students/ref_screen_search-and-student-outings-list-answer.png"
          alt="Affichage de la liste des sorties"
          width={700}
          height={472}
          className="img_portfolio border border-white mb-6"
          priority
        />

        <Image
          src="/img/students/ref_screen_profil-account.png"
          alt="Page de gestion du compte des données personnelles"
          width={700}
          height={472}
          className="img_portfolio border border-white mb-6"
          priority
        />

      </section>
  );
}
