"use client";

import Image from "next/image";

export default function LicDetailsProject() {
  return (
    // LIC Section
    <section id="lic" className="project-section">
      <h3 className="title-project">[LIC]</h3>

      {/* Texte centré sous le titre */}
      <p className="text-center text-sm lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium mt-2">
        (Livret Individuel de Conduite)
      </p>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={`link-project-portfolio`}
      >
        {/*Github à venir*/}
      </a>

      <h4 className="project-description">
        Développement d’une application de relevés d’heures pour la répartition
        du temps de travail (Langages : Php & Javascript)
      </h4>

      <div className="unordered-list space-y-6 mb-12">
        <ul className="ml-0 list-none">
          <li><strong>1. Planification et Conception</strong>
            <ul className="list-none">
              <li>
                <span className="paragraph-sub-title">Étude des besoins fonctionnels</span>
                <ul className="list-none ml-6">
                  <li>-Saisie et comptabilsation des totaux des heures de conduite, de travail, de mise à disposition et de repos</li>
                  <li>-Saisie des trajets : immatriculation du véhicule, date, lieux de départ et d’arrivée, kilomètres effectués, poids maximum autorisé</li>
                </ul>
              </li>
              <li>
                <span className="paragraph-sub-title">Conception de l’architecture</span>
                <ul className="list-none ml-6">
                  <li>-Front-end en HTML, CSS, JavaScript et la bibliothèque jQuery</li>
                  <li>-Local Storage pour stocker temporairement les données de l’utilisateur</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="ml-0 list-none">
          <li><strong>2. Développement du Front</strong>
            <ul className="list-none">
              <li>
                <span className="paragraph-sub-title">Interface utilisateur (UI)</span>
                <ul className="list-none ml-6">
                  <li>- Dashboard principal : Affichage des informations principales du conducteur, résumé des heures de conduite et de repos</li>
                  <li>- Formulaire de saisie d’activité : Interface pour entrer les heures de début/fin, activités spécifiques (conduite, repos, travail, etc.)</li>
                  <li>- Historique des activités : Liste chronologique des sessions de conduite, repos, et trajets pour permettre une consultation rapide</li>
                </ul>
              </li>
              <li>
                <span className="paragraph-sub-title">Utilisation de jQuery pour les interactions dynamiques</span>
                <ul className="list-none ml-6">
                  <li>- Formulaires dynamiques des sessions de conduite, de travail, de mise à disposition et de repos avec calcul immédiat des heures effectuées</li>
                  <li>- Fonctionnalité d’ajout et de suppression pour les sessions</li>
                </ul>
              </li>
              <li>
                <span className="paragraph-sub-title">Local Storage pour la gestion hors ligne</span>
                <ul className="list-none ml-6">
                  <li>- Saisie des informations hors ligne et récupération des dernières entrées utilisateurs après avoir quitté ou actualisé la page</li>
                </ul>
              </li>
              <li>
                <span className="paragraph-sub-title">Interface mobile</span>
                <ul className="list-none ml-6">
                  <li>- Adaptation de l’application pour une utilisation mobile, pour faciliter l’accès et la saisie des données sur smartphones et tablettes</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Images LIC papier et Appli */}
      <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center mb-6">
        <Image
          src="/img/lic/lic_papier.png"
          alt="Image LIC Papier"
          width={1024}
          height={656}
          className="img_portfolio
                    w-[100%] md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[50%] 2xl:w-[120%] h-auto
                    mb-6 md:mb-0
                    md:mr-2"
          priority
        />
        <Image
          src="/img/lic/worktime_app.png"
          alt="Visuel de l'application WorkTime sur Mobile"
          width={234}
          height={500}
          className=" mx-auto rounded-xl
                      w-[70%] sm:w-[50%] md:w-[30%] lg:w-[30%] xl:w-[20%] 2xl:w-[25%] h-auto"
          priority
        />
      </div>
    </section>
  );
}
