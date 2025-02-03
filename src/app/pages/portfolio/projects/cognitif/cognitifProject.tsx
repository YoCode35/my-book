"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "../../../../../components/projects/ProjectsCard";

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
      url: "/img/cognitif/prise-de-rdv-planning.png", 
      alt: "Dashboard Administrateur", 
      description: "Un popup pour la prise de rendez-vous et un aperçu du planning des réservations avec une vue détaillée des créneaux disponibles." 
    },
    { 
      url: "/img/cognitif/propositions-rdv-planning.webp", 
      alt: "Page Rendez-vous", 
      description: "Suggestions automatiques de rendez-vous en fonction des disponibilités du salon." 
    },
    { 
      url: "/img/cognitif/stats-ca-dashboard.png", 
      alt: "Dashboard Administrateur", 
      description: "Tableau de bord affichant les statistiques de chiffre d'affaires et l'analyse des performances." 
    },
  ];

  return (
    <section className="section-container">
      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          className="rounded-3xl !pr-20 !pl-8"
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
                imageClassName="w-[50%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[80%] 
                                mx-auto
                                pl-8
                                mb-16 sm:mb-4 lg:mb-16 3xl:mb-24 4xl:mb-48"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CognitifProject;
