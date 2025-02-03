import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const StudentsProject = () => {
  return (
    <section className="section-container">
      <ProjectCard
        title="Plateforme d’organisation d’évènements d’étudiants"
        description=""
        date="Février 2024"
        technologies="Symfony & MySQL"
        imageUrl="/img/students/ref_screen_home.png"
        imageAlt="Image du projet de plateforme d'enchères"
        projectLink="https://github.com/YoCode35/sortir.com"
        moreInfoLink="/pages/portfolio#students"
        linkLabel="GitHub"
        imageWidth={1024}
        imageHeight={529}
        imageClassName="xl:mt-24 4xl:mt-48"
        projectIdentityClassName="xl:mt-[150px] 2xl:mt-[180px] "
      />

      {/* DotsRectangle */}
      <div
        className="w-[100%] sm:w-[40%] xl:w-[20%]
                  xl:flex 
                  xl:justify-start 
                  w-full 
                  xl:max-w-[320px] 
                  mt-8 xl:mt-40 2xl:mt-48 
                  relative 
                  mx-auto 
                  xl:ml-[0px] 3xl:ml-12 4xl:ml-48"
      >
        <DotsRectangle
          className="rotate-0 xl:rotate-90"
          rows={3}
          dotsPerRow={10}
          dotColor="#fff000"
          width="100%"
          height="45px"
        />
      </div>

    </section>
  );
};

export default StudentsProject;
