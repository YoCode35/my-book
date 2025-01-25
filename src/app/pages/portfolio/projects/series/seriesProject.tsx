import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const SeriesProject = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-12 sm:mt-8 2xl:mt-4">
      <ProjectCard
        title="Series"
        date="Janvier 2024"
        technologies="Symfony & MySQL"
        imageUrl="/img/ref_series-list.png"
        imageAlt="Image de mon projet d'application Series"
        projectLink="https://github.com/YoCode35/Series"
        moreInfoLink="/pages/portfolio#series"
        linkLabel="GitHub"
      />

      {/* DotsRectangle spécifique */}
      <div
        className="xl:w-full sm:w-[40%] lg:w-[100%] 
                  xl:flex 
                  xl:justify-start 
                  w-full 
                  max-w-[320px] 
                  mt-8 xl:mt-10 2xl:mt-5 
                  relative 
                  mx-auto 
                  xl:ml-48"
      >
        <DotsRectangle
          className="w-full"
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

export default SeriesProject;
