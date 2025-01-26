import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const AuctionsProject = () => {
  return (
    <section className="section-container">
      <ProjectCard
        title="Plateforme d’enchères"
        date="Décembre 2023"
        technologies="Java & SQL Server"
        imageUrl="/img/ref_auctions.jpg"
        imageAlt="Image du projet de plateforme d'enchères"
        projectLink="https://github.com/YoCode35/Projet_Encheres"
        moreInfoLink="/pages/portfolio#auctions"
        linkLabel="GitHub"
        imageWidth={792}
        imageHeight={800}
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

export default AuctionsProject;
