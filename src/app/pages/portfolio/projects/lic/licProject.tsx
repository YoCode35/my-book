import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const LicProject = () => {

  return (
    <section className="section-container">
      <ProjectCard
        title="LIC"
        description="Livret Individuel de Conduite numérisé permettant le relevé des heures de l'activité d'un conducteur."
        date="Juin 2019"
        technologies="Php & JavaScript"
        imageUrl="/img/lic/worktime_app.png"
        imageAlt="Image de mon projet d'application MyTodoList"
        projectLink=""
        moreInfoLink="/pages/portfolio#lic"
        linkLabel=""
        imageWidth={187}
        imageHeight={400}
        imageClassName="w-[50%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[20%] 
                        mx-auto
                        mb-16 sm:mb-4 lg:mb-16 3xl:mb-24 4xl:mb-48"
        projectIdentityClassName="xl:mr-[50px] 3xl:mr-[200px] 4xl:mr-[550px]
                                  xl:ml-[-400px] 3xl:ml-[-550px] 4xl:ml-[-700px]
                                  mt-[-50px] sm:mt-[0] lg:mt-[-50px]"
      />

      {/* DotsRectangle */}
      <div className="xl:w-full sm:w-[40%] lg:w-[100%] 
                      xl:flex 
                      xl:justify-start 
                      w-full 
                      max-w-[320px] 
                      mt-8 xl:mt-10 2xl:mt-20 
                      relative 
                      mx-auto 
                      xl:ml-48 4xl:ml-[800px]"
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