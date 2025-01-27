import { useState, useEffect } from "react";
import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const LicProject = () => {
  const [dotsPerRow, setDotsPerRow] = useState(10); // Par défaut, 10 points

  // Détecte si la résolution est supérieure à 1280px et ajuste dotsPerRow
  useEffect(() => {
    const updateDotsPerRow = () => {
      if (window.innerWidth >= 1280) {
        setDotsPerRow(50); // Résolution > 1280px : 15 points
      } else {
        setDotsPerRow(10); // Résolution ≤ 1280px : 10 points
      }
    };

    // Appelle la fonction au montage et lors du redimensionnement
    updateDotsPerRow();
    window.addEventListener("resize", updateDotsPerRow);

    // Nettoie l'écouteur d'événements lors du démontage
    return () => window.removeEventListener("resize", updateDotsPerRow);
  }, []);

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
        imageWidth={187}
        imageHeight={400}
        imageClassName="w-[80%] sm:w-[50%] md:w-[70%] lg:w-[60%] xl:w-[20%] 
                        mx-auto
                        mb-16 3xl:mb-24 4xl:mb-48"
        descriptionClassName="  xl:mr-[250px] xl:ml-[-450px] 3xl:ml-[-650px] 3xl:mr-[350px] 4xl:ml-[-700px] 4xl:mr-[700px]
                                mt-[-50px] sm:mt-[0]"
      />

      {/* DotsRectangle spécifique */}
      <div
        className="xl:w-full sm:w-[40%] lg:w-[100%] 
                   xl:flex 
                   xl:justify-start 
                   w-full 
                   max-w-[320px] xl:max-w-[100%]
                   relative 
                   mx-auto"
      >
        <DotsRectangle
          className="w-full"
          rows={3}
          dotsPerRow={dotsPerRow} // Utilise dotsPerRow dynamique
          dotColor="#fff000"
          width="100%"
          height="45px"
        />
      </div>
    </section>
  );
};

export default LicProject;