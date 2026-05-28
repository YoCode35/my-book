"use client";

import Image from "next/image";
import { PROJECT_NAMES } from "../../../components/navbar/route";

export default function MyTodoListDetailsProject() {
  return (
    // MyTodoList Section
    <section id={PROJECT_NAMES.MYTODOLIST} className="project-section">
      <h3 className="title-project">[Projet MyTodoList]</h3>

      <a
        href="https://www.mytodolist.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="link-project-portfolio"
      >
        Web
      </a>

      <h4 className="project-description">
        Développement d’une application PWA (Progressive Web App) Cross Platform avec Flutter & PHP/MySQL.
      </h4>

      <p className="unordered-list mb-12">
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

      <div className="unordered-list mb-12">
        <p className="mb-4 font-bold text-lg text-slate-100">2. Spécifications techniques et architecture de l’application</p>
        
        - Front-end : Flutter (Progressive Web Application)
        <br />
        - Back-end : PHP/MySQL (APIs sécurisées via HTTPS)
        <br /><br />

        {/* --- ARCHITECTURE INITIALE V1 --- */}
        <span className="block font-semibold text-slate-200 mb-2">
          - Architecture initiale (v1) : Approche de départ en couches couplées
        </span>
        <p className="text-sm text-slate-400 mb-4 max-w-2xl pl-4">
          Structure d’origine de l’application, reposant sur un couplage direct entre l’interface utilisateur, la logique métier globale et des requêtes de persistance directes. Une configuration centralisée mais limitée pour le passage à l’échelle.
        </p>

        <Image
          src="/img/mytodolist/Architecture_Webapp.png"
          alt="Architecture initiale de l'application MyTodoList (v1 - Monolithe couplé)"
          width={700}
          height={809}
          className="img_portfolio mb-8"
          priority
        />

        {/* --- ARCHITECTURE CIBLE V2 --- */}
        <span className="block font-semibold text-slate-200 mb-2">
          - Évolution de l’architecture (v2) : Découplage complet & Clean Architecture
        </span>
        <p className="text-sm text-slate-400 mb-4 max-w-2xl pl-4">
          Refactoring moderne vers un écosystème Client/Serveur totalement autonome. Séparation stricte des préoccupations (Presentation, Domain, Data) pour maximiser la scalabilité, l’indépendance du code et la testabilité unitaire.
        </p>

        <Image
          src="/img/mytodolist/evolution-architecture_2026.png"
          alt="Architecture cible de l'application MyTodoList (v2 - Écosystème découplé Clean & Feature-First)"
          width={700}
          height={764}
          className="img_portfolio mb-6"
          priority
        />

        {/* --- GUIDE EXPLICATIF SIMPLE ET SANS FAILLE --- */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 mb-8 max-w-3xl ml-4">
          <h5 className="text-base font-bold text-emerald-400 mb-4 uppercase tracking-wider">
            💡 Focus Technique : Les piliers de l’architecture cible
          </h5>
          
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-slate-100">1. Découplage Client/Serveur strict :</strong>
              <p className="text-slate-400 pl-4 mt-1">
                Le Front-end (Flutter) et le Back-end (API PHP) sont complètement isolés. Ils communiquent exclusivement via des requêtes HTTPS sécurisées et des contrats d’interfaces clairs (JSON), permettant de faire évoluer un système sans jamais impacter l’autre.
              </p>
            </div>

            <div>
              <strong className="text-slate-100">2. Séparation des responsabilités (Clean Architecture) :</strong>
              <ul className="list-disc pl-8 mt-1 space-y-1 text-slate-400">
                <li><span className="text-slate-200 font-medium">Couche Présentation (UI & Gestion d’état) :</span> Gère uniquement l’affichage et l’interaction utilisateur, sans aucune logique de calcul.</li>
                <li><span className="text-slate-200 font-medium">Couche Domaine (Règles métier) :</span> Le cœur de l’application. Elle contient les entités et les contrats abstraits (<span className="font-mono text-xs bg-slate-800 px-1 rounded text-emerald-300">Repository Interfaces</span>), totalement indépendante des frameworks extérieurs.</li>
                <li><span className="text-slate-200 font-medium">Couche Données (Data Layer) :</span> Implémente concrètement les requêtes réseau et l’accès à la base de données (<span className="font-mono text-xs bg-slate-800 px-1 rounded text-emerald-300">Repo Implementation</span>).</li>
              </ul>
            </div>
          </div>
        </div>

        <span className="block mb-4">
          - Base de données : MySQL avec une gestion relationnelle des utilisateurs et des tâches
        </span>

        <Image
          src="/img/mytodolist/mcd.png"
          alt="Modèle conceptuel de données (MCD)"
          width={700}
          height={875}
          className="img_portfolio mb-6"
          priority
        />

        <Image
          src="/img/mytodolist/mld.png"
          alt="Modèle logique de données (MLD)"
          width={700}
          height={489}
          className="img_portfolio mb-6"
          priority
        />

        <Image
          src="/img/mytodolist/mpd.png"
          alt="Modèle physique de données (MPD)"
          width={700}
          height={563}
          className="img_portfolio mb-6"
          priority
        />

        <br />
        - Déploiement : Hébergement mutualisé, serveur web (Apache/Nginx), certificats SSL/TLS
      </div>

      <p className="unordered-list mb-12">
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

      <p className="unordered-list mb-12">
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

      <p className="unordered-list mb-12">
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

      <p className="unordered-list mb-12">
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