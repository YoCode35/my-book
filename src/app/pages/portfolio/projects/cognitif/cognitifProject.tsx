import ProjectCard from "../../../../../components/projects/ProjectsCard";

const CognitifProject = () => {

  return (
    <section className="section-container">
      <ProjectCard
        title="Cognitif"
        date="Octobre 2012"
        technologies="Javascript & Php"
        imageUrl="/img/cognitif/accueil-admin.png"
        imageAlt="Image de mon projet de conception d'une application de prises de rendez-vous pour les coiffeurs"
        projectLink=""
        moreInfoLink=""
        linkLabel=""
        imageWidth={917}
        imageHeight={736}
      />
    </section>
  );
};

export default CognitifProject;
