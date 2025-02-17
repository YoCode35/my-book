import ProjectCard from "../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../components/dots/DotsRectangle";
import { ROUTES } from "../../../components/navbar/route";

const SeriesProject = () => {
  return (
    <section className="section-container">
      <ProjectCard
        title="Series"
        description="Service de streaming en ligne de séries TV"
        date="Janvier 2024"
        technologies="Symfony & MySQL"
        imageUrl="/img/series/ref_series-list.webp"
        imageAlt="Image de mon projet d'application Series"
        projectLink="https://github.com/YoCode35/Series"
        moreInfoLink={ROUTES.PROJECTS.SERIES}
        linkLabel="GitHub"
        linkClassName={"link-project-home"}
        imageWidth={1024}
        imageHeight={471}
      />

      {/* DotsRectangle */}
      <div
        className="w-full max-w-[320px] sm:w-[40%] xl:w-[20%]
                  flex justify-center xl:justify-start
                  mt-8 sm:mt-10 xl:mt-28 2xl:mt-40
                  relative mx-auto 
                  xl:ml-[800px] 2xl:ml-[800px] 3xl:ml-[1100px] 4xl:ml-[1550px]"
      >
        <DotsRectangle
          className="rotate-0 sm:rotate-0 xl:rotate-90"
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
