"use client"; // Force l'utilisation côté client uniquement

export default function About() {
  
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/img/colored_spots.png')] bg-[size:400%] sm:bg-[size:400%] md:bg-[size:400%] lg:bg-[size:100%] bg-[position:center_0] flex flex-col items-center min-h-screen pb-16">

      <div className="h-12"></div>

      <h1 id="about" className="page-title text-2xl sm:text-3xl md:text-4xl font-bold text-shadow mt-0">
        Plus d&apos;infos à propos de moi
      </h1>

      <div className="px-4 sm:px-8 md:px-16 max-w-screen-lg mx-auto"> {/* Ajout des marges et du max-width */}
        <p className="text-white mt-4 text-justify">
          Passionné par l’informatique et la programmation, j’ai débuté en tant
          qu’autodidacte avant de me professionnaliser et d’exercer dans le secteur
          du numérique depuis une vingtaine d’années. Mon parcours atypique a
          commencé avec l’infographie (2D/3D) et le développement front-end, en
          maîtrisant l’HTML, le CSS, le JavaScript, le PHP et MySQL.
        </p>

        <p className="text-white mt-4 text-justify">
          Récemment, j’ai renforcé mes compétences en back-end grâce à une
          formation à l’ENI, qui m’a permis d’obtenir une certification de niveau 5
          (équivalent Bac+2) en tant que Développeur Web et Web Mobile. Dans le cadre
          de cet examen, j’ai conçu un projet avec Flutter, un framework
          cross-platform, qui m’a ouvert les portes du développement d’applications
          mobiles. Ce projet, MyTodoList ({" "}
          <a
            href="https://www.mytodolist.tech"
            target="_blank"
            rel="noopener noreferrer"  // Pour des raisons de sécurité
            className="text-pink-500 hover:underline"
          >
            https://www.mytodolist.tech
          </a>

          ), reste un véritable terrain d’expérimentation et d’apprentissage
          continu.
        </p>

        <p className="text-white mt-4 text-justify">
          Aujourd’hui, je poursuis ma montée en compétences en explorant des stacks
          modernes comme Node.js, Next.js, TypeScript, Angular, React.js, Flutter tout en
          travaillant activement sur des projets personnels en full-stack. Mon
          engagement va bien au-delà du code : j’aime concevoir des solutions
          innovantes, performantes et utiles, pensées pour enrichir l’expérience
          utilisateur et optimiser les interactions numériques.
        </p>

        <p className="text-white mt-4 text-justify">
          Ce qui m’anime particulièrement dans le métier de Concepteur et Développeur
          d’Applications, c’est la stratégie mise en place pour transformer la
          technologie en outils concrets. Je suis convaincu que la technologie, bien
          pensée, peut améliorer le quotidien, qu’il s’agisse de mieux gérer ses
          données, de prendre des décisions éclairées ou de simplifier les
          processus pour atteindre ses objectifs.
        </p>

        <p className="text-white mt-4 text-justify">
          Toujours curieux et en quête de nouveaux défis, je suis motivé par l’idée
          de m’investir dans des projets mêlant innovation, performance et
          collaboration.
        </p>

        <p className="text-white mt-4 text-justify">
          Bien plus qu’une passion, c’est une véritable vocation qui me pousse chaque
          jour à m’investir pleinement dans des projets technologiques.
        </p>
      </div>
    </div>
  );
}
