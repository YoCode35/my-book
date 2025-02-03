"use client";

import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const AuctionsProject = () => {
  return (
    <section className="section-container">
      <ProjectCard
        title="Plateforme d’enchères"
        description=""
        date="Décembre 2023"
        technologies="Java & SQL Server"
        imageUrl="/img/auctions/ref_auctions.webp"
        imageAlt="Image du projet de plateforme d'enchères"
        projectLink="https://github.com/YoCode35/Projet_Encheres"
        moreInfoLink="/pages/portfolio#auctions"
        linkLabel="GitHub"
        imageWidth={792}
        imageHeight={800}
        imageClassName="xl:w-[40%]" 
      />

      {/* DotsRectangle spécifique à cette page */}
      <div
        className="w-[100%] sm:w-[40%] xl:w-[20%]
                  xl:flex 
                  xl:justify-start 
                  w-full 
                  xl:max-w-[320px]
                  mt-8 xl:mt-40 2xl:mt-40 3xl:mt-48
                  relative 
                  mx-auto 
                  xl:ml-[200px] 3xl:ml-[300px] 4xl:ml-[450px]"
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

export default AuctionsProject;
