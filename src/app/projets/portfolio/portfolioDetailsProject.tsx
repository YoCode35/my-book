"use client";

//import Image from "next/image";
import { PROJECT_NAMES } from "../../../components/navbar/route";

export default function PortfolioDetailsProject() {

  return (

    // MyTodoList Section
    <section id={PROJECT_NAMES.PORTFOLIO} className="project-section"
      >
        <h3 className="title-project">[Projet Portfolio]</h3>

        <a
          href="https://my-book-black.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`link-project-portfolio`}
        >
          Web
        </a>

        <h4 className="project-description">Développement d’un Site Web avec React.js, Next.js, Node.js, Express, TypeScript, PostGreSQL, Tailwind.</h4>

        <p className="unordered-list text-white mb-6">
          <span className="text-colorChart underline block mb-2">Résumé du projet</span>

        </p>

        <div className="unordered-list text-white mb-6">
          <span className="text-colorChart underline block mb-2">Technologies utilisées</span>
          <ul className="ml-0 list-none">
            <li>- <strong>Back-end :</strong> </li>
            <li>- <strong>Base de données :</strong> </li>
            <li>- <strong>Administration des données :</strong> </li>
            <li>- <strong>Langages principaux :</strong> </li>
            <li>- <strong>Mise en ligne et tests :</strong> </li>
          </ul>
        </div>


        <div className="unordered-list text-white mb-6">
          <span className="text-colorChart underline block mb-2">Fonctionnalités principales</span>

          <ul className="ml-0 list-none">
            <li><strong>1. </strong>
              <ul className="ml-2 list-none">
                <li>- </li>
                <li>- </li>
                <ul className="ml-12 list-disc">
                  <li></li>
                  <li></li>
                </ul>
              </ul>
            </li>

            <li className="mt-6"><strong>2. </strong>
              <ul className="ml-2 list-none">
                <li>- </li>
                <li>- </li>
              </ul>
            </li>

            <li className="mt-6"><strong>3. </strong>
              <ul className="ml-2 list-none">
                <li>- </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="unordered-list text-white mb-8">
          <span className="text-colorChart underline block mb-2">Points forts techniques</span>
          <ul className="ml-0 list-none">
            <li>- <strong>Respect des bonnes pratiques de développement :</strong> </li>
            <li>- <strong>Structure modulaire :</strong> </li>
            <li>- <strong>Performances :</strong> </li>
          </ul>
        </div>

      </section>
  );
}
