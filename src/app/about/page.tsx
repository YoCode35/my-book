"use client";

import useDotsPerRow from "../../components/dots/useResponsiveDots";
import DotsRectangle from "../../components/dots/DotsRectangle";

export default function About() {
  const dotsPerRow = useDotsPerRow();

  return (
    <div className="bg-cover
                    bg-no-repeat
                    bg-[url('/img/colored_spots.png')]
                    pb-24"
    >

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <h2 id="about" className="title-page">Plus d’infos à propos de moi</h2>

      <div className="px-4
                      sm:px-8 md:px-16 2xl:px-0
                      max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl
                      mx-auto"
      >
        <p className="paragraph-custom mt-4">
          Passionné par l’informatique et la programmation, j’ai débuté en tant
          qu’autodidacte avant de me professionnaliser et d’exercer dans le secteur
          du numérique depuis une vingtaine d’années. Mon parcours a commencé avec
          l’infographie (2D/3D) et en parallèle le développement front-end m’a
          toujours accompagné avec la maitrise tout d’abord de l’HTML puis du CSS, le
          JavaScript ensuite et enfin quelques notions de PHP.
        </p>

        <p className="paragraph-custom mt-4">
          Récemment, j’ai renforcé mes compétences en back-end grâce à une
          formation à l’ENI, qui m’a permis d’obtenir une certification de niveau 5
          (équivalent Bac+2) en tant que Développeur Web et Web Mobile. Dans le cadre
          de cet examen, j’ai conçu un projet avec Flutter, un framework
          cross-platform, qui m’a ouvert les portes du développement d’applications
          mobiles. Ce projet, MyTodoList ({""}
          <a
            href="https://www.mytodolist.tech"
            target="_blank"
            rel="noopener noreferrer"  // Security
            className="text-navLinkHover hover:underline"
          >
            https://www.mytodolist.tech
          </a>

          ), reste un véritable terrain d’expérimentation et d’apprentissage
          continu.
        </p>

        <p className="paragraph-custom mt-4">
          Aujourd’hui, je poursuis ma montée en compétences en explorant des stacks
          modernes comme Node.js, Next.js, TypeScript, Angular, React.js ou encore Flutter.
          Mon engagement va bien au-delà du code : j’aime concevoir des solutions
          innovantes, performantes et utiles, pensées pour enrichir l’expérience
          utilisateur et optimiser les interactions numériques.
        </p>

        <p className="paragraph-custom mt-4">
          Ce qui m’anime particulièrement dans le métier de Concepteur et Développeur
          d’Applications, c’est la stratégie mise en place pour transformer la
          technologie en outils concrets. Je suis convaincu que la technologie, bien
          pensée, peut améliorer le quotidien, qu’il s’agisse de mieux gérer ses
          données, de prendre des décisions éclairées ou de simplifier les
          processus pour atteindre ses objectifs.
        </p>

        <p className="paragraph-custom mt-4">
          Toujours curieux et en quête de nouveaux défis, je suis motivé par l’idée
          de m’investir dans des projets mêlant innovation, performance et
          collaboration.
        </p>

        <p className="paragraph-custom mt-4">
          Bien plus qu’une passion, c’est une véritable vocation qui me pousse chaque
          jour à m’investir pleinement dans des projets technologiques.
        </p>
      </div>
    </div>
  );
}
