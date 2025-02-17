"use client";

// import Image from "next/image";
import { PROJECT_NAMES } from "../../../components/navbar/route";
import Image from "next/image";

export default function PortfolioDetailsProject() {
  return (
    // MyTodoList Section
    <section id={PROJECT_NAMES.PORTFOLIO} className="project-section">
      <h3 className="title-project">[Projet Portfolio]</h3>

      <a
        href="https://my-book-black.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={`link-project-portfolio`}
      >
        Web
      </a>

      <h4 className="project-description">
        Développement d’un Site Web avec React.js, Next.js, Node.js, Express, TypeScript, PostGreSQL, Tailwind.
      </h4>

      <p className="unordered-list text-white mb-6">
        <span className="text-colorChart underline block mb-2">Résumé du projet</span>
        Le projet Portfolio Personnel est une plateforme interactive permettant de présenter mes réalisations, tout en offrant un espace privé pour gérer et consulter des projets personnels.
        Il utilise une architecture full-stack avec un back-end sécurisé, où l’administrateur peut gérer des utilisateurs et leurs projets.
        L’application est responsive, assurant une navigation fluide sur différents appareils, et elle bénéficie d’un déploiement automatisé via CI/CD.
      </p>

      <div className="unordered-list text-white mb-6">
        <span className="text-colorChart underline block mb-2">Technologies utilisées</span>
        <ul className="ml-0 list-none">
        <li>- <strong>Front-end :</strong> React.js, Next.js (rendu hybride SSR/SSG pour de meilleures performances et un meilleur SEO), TypeScript</li>
          <li>- <strong>Back-end :</strong> Node.js, Express, TypeScript, déployé sur Railway</li>
          <li>- <strong>Base de données :</strong> PostgreSQL hébergé sur Supabase</li>
          <li>- <strong>Administration des données :</strong> Mise en place de rôles utilisateurs (admin, utilisateur), gestion des projets via API REST sécurisée</li>
          <li>- <strong>Langages principaux :</strong> JavaScript, TypeScript, SQL</li>
          <li>- <strong>Mise en ligne et tests :</strong> Déploiement du front-end sur Vercel, CI/CD avec GitHub Actions, tests automatisés pour la sécurité et la stabilité</li>
        </ul>
      </div>

      <Image
        src="/img/portfolio/schema_bdd.webp"
        alt="Schéma Base de données"
        width={731}
        height={297}
        className="img_portfolio"
        priority
      />

      <Image
        src="/img/portfolio/screen_privatespace_admin-and-user.webp"
        alt="Page écran espace privé de l'admin"
        width={968}
        height={525}
        className="img_portfolio"
        priority
      />

      <div className="unordered-list text-white mb-6">
        <span className="text-colorChart underline block mb-2">Fonctionnalités principales</span>
        <ul className="ml-0 list-none">
          <li><strong>1. Gestion des utilisateurs</strong>
            <ul className="ml-2 list-none">
              <li>- Création de comptes avec rôles définis (admin, utilisateur)</li>
              <li>- Accès restreint aux informations sensibles</li>
              <ul className="ml-12 list-disc">
                <li>Vue d’ensemble des projets par utilisateur</li>
              </ul>
            </ul>
          </li>

          <li className="mt-6"><strong>2. Gestion des projets</strong>
            <ul className="ml-2 list-none">
              <li>- Affichage dynamique des projets par utilisateur</li>
            </ul>
          </li>

          <li className="mt-6"><strong>3. Déploiement et sécurité</strong>
            <ul className="ml-2 list-none">
              <li>- Mise en place d’une API sécurisée avec token d’authentification</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="unordered-list text-white mb-8">
        <span className="text-colorChart underline block mb-2">Points forts techniques</span>
        <ul className="ml-0 list-none">
          <li>- <strong>Optimisation avec Next.js :</strong> Utilisation du rendu côté serveur (SSR) et du statique (SSG) pour améliorer le temps de chargement et le SEO</li>
          <li>- <strong>Gestion efficace des images :</strong> Optimisation automatique avec le composant `next/image`</li>
          <li>- <strong>Tests automatisés :</strong> Mise en place de tests unitaires avec <strong>Vitest</strong> pour garantir la fiabilité du code et prévenir les régressions.</li>
          <li>- <strong>Pipeline CI/CD :</strong> Utilisation de <strong>GitHub Actions</strong> pour automatiser le processus de test, de construction (build) et de déploiement (deploy) de l’application, garantissant une mise à jour fluide
                                                  et sécurisée à chaque changement de code.</li>
          <Image
            src="/img/portfolio/screen_ci-cd.webp"
            alt="Page écran espace privé de l'admin"
            width={1024}
            height={262}
            className="img_portfolio 3xl:w-[65%] mt-8 mb-8"
            priority
          />
          <li>- <strong>TypeScript :</strong> Utilisation de <strong>TypeScript</strong> pour apporter un typage statique et renforcer la sécurité du code. Cela permet de détecter les erreurs de type à la compilation, d’améliorer la lisibilité
                                              et la maintenabilité du code, et de fournir une meilleure expérience de développement avec l’autocomplétion et les suggestions de types dans l’IDE.</li>
          <li>- <strong>Respect des bonnes pratiques de développement :</strong> Utilisation de TypeScript, gestion des erreurs, sécurité avec tokens JWT</li>
          <li>- <strong>Structure modulaire :</strong> Architecture claire et évolutive avec séparation des préoccupations</li>
          <li>- <strong>Performances :</strong> Optimisation des requêtes SQL, gestion de l’état de manière efficace dans React</li>
        </ul>
      </div>
    </section>
  );
}
