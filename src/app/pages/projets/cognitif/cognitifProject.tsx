"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "../../../../components/projects/ProjectsCard";

const CognitifProject = () => {
  // Liste du carrousel
  const images = [
    {
      url: "/img/cognitif/accueil-admin.webp",
      alt: "Accueil Admin",
      description: "Un projet de conception d'une application de prises de rendez-vous pour les coiffeurs, permettant une gestion efficace des créneaux horaires et des clients."
    },
    {
      url: "/img/cognitif/gestion_horaires-salon.webp",
      alt: "Page Rendez-vous",
      description: "Gestion avancée des horaires pour optimiser les prises de rendez-vous des salons de coiffure."
    },
    {
      url: "/img/cognitif/prise-de-rdv-planning.webp",
      alt: "Dashboard Administrateur",
      description: "Un formulaire sous forme de popup pour la prise de rendez-vous et un aperçu du planning des réservations avec une vue détaillée des créneaux disponibles."
    },
    {
      url: "/img/cognitif/propositions-rdv-planning.webp",
      alt: "Page Rendez-vous",
      description: "Suggestions de disponibilités en fonction du planning."
    },
    {
      url: "/img/cognitif/stats-ca-dashboard.webp",
      alt: "Dashboard Administrateur",
      description: "Tableau de bord affichant les statistiques de chiffre d'affaires et l'analyse des performances."
    },
  ];

  return (
    <section className="section-container">
      <div className="w-full w-7xl 3xl:max-w-8xl mx-auto pb-12 xl:pb-0">
        {/* Container pour le carrousel */}
        <div className="swiper-container w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            className=" rounded-3xl 
                        pr-0 
                        2xl:!pr-10 
                        2xl:!pl-0 
                        h-[700px] xxs:h-[800px] xs:h-[1000px] sm:h-[950px] md:h-[800px] lg:h-[930px] xl:h-[850px] 2xl:h-[900px] 3xl:h-[1150px] 4xl:h-[1150px]"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  title="Cognitif"
                  description={img.description}
                  date="Octobre 2012"
                  technologies="Javascript & Php"
                  imageUrl={img.url}
                  imageAlt={img.alt}
                  projectLink=""
                  moreInfoLink=""
                  linkLabel=""
                  imageWidth={1000}
                  imageHeight={1000}
                  imageClassName="w-[230px] md:w-[65%] lg:w-[80%] 2xl:w-[45%] mx-auto"
                  contentProjectClassName="xl:mr-[30px] 3xl:mr-[50px] 4xl:mr-[70px] xl:ml-[-50px] 3xl:ml-[-120px] 4xl:ml-[-150px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CognitifProject;
