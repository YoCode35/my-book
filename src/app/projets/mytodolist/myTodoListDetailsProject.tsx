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
        Développement d’une PWA (Progressive Web App) et Mobile Android.
        <br />
        Stack : Flutter, PHP, MySQL
      </h4>

      <p className="unordered-list mb-12">
        1. Planification et Conception
        <br /><br />
        - Objectifs du projet : Application multiplateforme accessible (Mobile Android & PWA Web)
        <br />
        - Besoins : Fonctionnalités principales et optimisation de l’expérience utilisateur
        <br />
        - Technique : Architecture de l’application, séparation front/back, modélisation des données et infrastructure
        <br />
        - UI/UX : Interface utilisateur intuitive axée sur l’accessibilité web/mobile
        <br />
        - Contraintes et risques : Optimisations de performance, sécurité des données (RGPD), scalabilité
      </p>

      <div className="unordered-list mb-12">
        <p className="mb-4 font-bold text-lg text-slate-100">2. Spécifications techniques et architecture de l’application</p>
        
        - Front-end : Flutter (Progressive Web Application & Android)
        <br />
        - Back-end : PHP/MySQL (APIs REST sécurisées via HTTPS)
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
          Refactoring moderne vers un écosystème Client/Serveur totalement autonome. Séparation stricte des préoccupations (<strong className="font-semibold text-slate-200">Presentation, Domain, Data</strong>) pour maximiser la scalabilité, l’indépendance du code et la testabilité unitaire.
          <br /><br />
          <strong className="text-slate-100 font-bold text-base">Flutter : Clean Architecture en 3 couches</strong>
          <br />
          La convention quasi universelle dans l’écosystème Flutter s’inspire de la Clean Architecture de Robert C. Martin, déclinée en 3 couches strictement unidirectionnelles (les dépendances ne vont que vers l’intérieur).
          <br /><br />
          <strong className="text-slate-200 font-semibold">Presentation</strong> — Tout ce que l’utilisateur voit et touche. Les composants graphiques restent épurés grâce à une navigation déclarative gérée par <strong className="text-emerald-300 font-medium">Go Router</strong>. La gestion d’état est centralisée et réactive via <strong className="text-emerald-300 font-medium">Riverpod</strong>, orchestrant l’interface de manière fluide.
          <br />
          <strong className="text-slate-200 font-semibold">Domain</strong> — Le cœur pur de l’application, sans dépendance extérieure. On y définit la structure des entités métier et les contrats abstraits (<strong className="font-mono text-xs text-slate-300">Repository Interfaces</strong>). Cette isolation totale garantit un code indépendant et hautement testable.
          <br />
          <strong className="text-slate-200 font-semibold">Data</strong> — Implémentation concrète des contrats du Domain. Les RepositoryImpl gèrent les appels asynchrones (<strong className="text-slate-300 font-medium">async calls</strong>) vers l’API REST, convertissent les DTO JSON en entités métier, et contrôlent les sources de données locales ou distantes.
          <br /><br />
          <strong className="text-slate-100 font-bold text-base">Back-End : Architecture MVC/3-tiers</strong>
          <br />
          Les mêmes 3 couches s’appliquent pour assurer le découplage.
          <br /><br />
          <strong className="text-slate-200 font-semibold">API Layer</strong> — Les contrôleurs reçoivent les requêtes de l’API REST, effectuent les validations d’entrée, sécurisent les accès via un middleware d’authentification (<strong className="text-emerald-300 font-medium">Firebase Auth & validation JWT</strong>), et exposent les endpoints.
          <br />
          <strong className="text-slate-200 font-semibold">Business Logic</strong> — Les services contiennent les règles métier pures, les calculs et les orchestrations. C’est la couche la plus testée unitairement pour valider la robustesse des traitements.
          <br />
          <strong className="text-slate-200 font-semibold">Data Access</strong> — Les repositories isolent la modélisation et l’accès à la base de données MySQL. Les requêtes SQL y effectuent les opérations de persistance de façon optimisée pour la performance.
        </p>

        <Image
          src="/img/mytodolist/evolution-architecture_2026.png"
          alt="Architecture cible de l'application MyTodoList (v2 - Écosystème découplé Clean Architecture)"
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
              <strong className="text-slate-100">1. Découplage Client/Serveur et API REST :</strong>
              <p className="text-slate-400 pl-4 mt-1">
                Le Front-end (Flutter) et le Back-end (API PHP) sont complètement isolés. Ils communiquent exclusivement via des requêtes HTTPS sécurisées et des contrats d’interfaces clairs (JSON), permettant de faire évoluer un système sans jamais impacter l’autre.
              </p>
            </div>

            <div>
              <strong className="text-slate-100">2. Séparation des responsabilités (Clean Architecture) :</strong>
              <ul className="list-disc pl-8 mt-1 space-y-1 text-slate-400">
                <li><span className="text-slate-200 font-medium">Couche Présentation (UI & Gestion d’état) :</span> Routage avec <span className="text-slate-200 font-medium">Go Router</span> et State Management synchrone/asynchrone avec <span className="text-slate-200 font-medium">Riverpod</span>.</li>
                <li><span className="text-slate-200 font-medium">Couche Domaine (Règles métier) :</span> Modélisation stricte de la structure des entités et des interfaces de Repository abstraites.</li>
                <li><span className="text-slate-200 font-medium">Couche Données (Data Layer) :</span> Gestion des flux réseaux, traitement des <span className="font-mono text-xs bg-slate-800 px-1 rounded text-emerald-300">async calls</span> et conversion de données.</li>
              </ul>
            </div>
          </div>
        </div>

        <span className="block mb-4">
          - Base de données : MySQL avec une gestion relationnelle (modélisation de la structure des entités)
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
        - Déploiement : Mise en production sur hébergement mutualisé, serveur web (Apache/Nginx), certificats SSL/TLS
      </div>

      <p className="unordered-list mb-12">
        3. Développement Back-End
        <br /><br />
        - Authentification / Sécurité : Inscription/connexion sécurisée via Firebase Authentication, validation de tokens JWT et gestion des rôles
        <br />
        - Compte : Gestion de compte, réinitialisation sécurisée e-mail/mot de passe
        <br />
        - API et Données : Conception d’endpoints d’une API REST pour la gestion complète des opérations CRUD
        <br />
        - Notifications : Inscription, mise à jour e-mail, réinitialisation mot de passe
        <br />
        - Sécurité : Validation des entrées et protection contre les failles courantes
      </p>

      <p className="unordered-list mb-12">
        4. Développement Front-End
        <br /><br />
        - UI/UX (Prototypage) : Balsamiq axé sur l’ergonomie et l’accessibilité web/mobile
        <br />
        - Architecture & État : Gestion d’état prédictible avec Riverpod et exécution d’appels asynchrones (async calls) performants
        <br />
        - Navigation : Routage déclaratif et sécurisé configuré avec Go Router
        <br />
        - Écrans d’accueil & Annexes : Implémentation des interfaces de gestion des listes et des tâches (CRUD)
        <br />
        - Sécurité : Intercepteurs de requêtes et persistance locale sécurisée
      </p>

      <p className="unordered-list mb-12">
        5. Sécurité
        <br /><br />
        - Authentification : Intégration hybride Firebase Auth et validation JWT côté serveur
        <br />
        - Gestion des rôles : Contrôle d’accès applicatif strict basé sur les privilèges utilisateurs
        <br />
        - Connexions sécurisées via HTTPS et chiffrement des flux de données
        <br />
        - Sécurisation des sessions et protection contre les injections SQL, XSS et CSRF
        <br />
        - Cryptage des mots de passe en base de données
      </p>

      <p className="unordered-list mb-12">
        6. Tests et Qualité
        <br /><br />
        - Tests unitaires (Front-End) : Utilisation de flutter_test et Mocktail pour l’isolation et le mock complet des dépendances
        <br />
        - Tests unitaires (Back-End) : Écriture de suites de tests avec PHPUnit pour la validation de la logique métier de l’API
        <br />
        - Validations fonctionnelles : Tests de conformité des entités de données et des scénarios utilisateurs
        <br />
        - Performance : Profilage des temps de réponse applicatifs et optimisation des requêtes de données
      </p>
    </section>
  );
}