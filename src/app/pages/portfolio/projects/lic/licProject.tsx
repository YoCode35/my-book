import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const LicProject = () => {
  return (
    <section className="section-container">
      <ProjectCard
        title="LIC"
        date="Juin 2019"
        technologies="Php & JavaScript"
        imageUrl="/img/lic/worktime_app.png"
        imageAlt="Image de mon projet d'application MyTodoList"
        projectLink=""
        moreInfoLink="/pages/portfolio#lic"
        linkLabel=""
        imageWidth={215}
        imageHeight={400}
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
                  xl:ml-48
                  mb-24"
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

export default LicProject;
