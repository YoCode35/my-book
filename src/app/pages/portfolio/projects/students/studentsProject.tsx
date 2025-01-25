import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const StudentsProject = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <ProjectCard
        title="Plateforme d’organisation d’évènements d’étudiants"
        date="Février 2024"
        technologies="Symfony & MySQL"
        imageUrl="/img/ref_screen_home.png"
        imageAlt="Image du projet de plateforme d'enchères"
        projectLink="https://github.com/YoCode35/sortir.com"
        moreInfoLink="/pages/portfolio#students"
        linkLabel="GitHub"
      />

{/* DotsRectangle spécifique à cette page */}
<div
  className="w-[40%] lg:w-[100%] xl:w-[20%]
            xl:flex 
            xl:justify-start 
            w-full 
            max-w-[320px] 
            mt-8 xl:mt-28 2xl:mt-5 
            relative 
            mx-auto 
            xl:ml-0"
>
  <DotsRectangle
    className="rotate-90"
    rows={3}
    dotsPerRow={10}
    dotColor="#fff000"
    width="80%"
    height="45px"
  />
</div>

    </section>
  );
};

export default StudentsProject;
