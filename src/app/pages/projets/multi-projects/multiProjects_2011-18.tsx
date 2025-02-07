import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../components/dots/DotsRectangle";

const MultiProjects1118 = () => {
  // Liste du carrousel
  const images = [
    {
      url: "/img/multiprojects_1118/homepage.webp",
      alt: "Page d'Accueil du site Web du Cabinet d'Avocats ABLITIS",
      title: "Cabinet d'avocats ABLITIS",
      description: "Page d'accueil du site Web du cabinet d'avocats ABLITIS implanté à Rennes",
      date: "2018",
      technologies: "Javascript & Php",
      projectLink: "http://www.ablitis-avocats-rennes.bzh/",
      linkLabel: "Web",
    },
    {
      url: "/img/multiprojects_1118/procedure-appel_page.webp",
      alt: "Page de prestations du Cabinet d'Avocats ABLITIS",
      title: "Cabinet d'avocats ABLITIS",
      description: "Page de prestations",
      date: "2018",
      technologies: "Javascript & Php",
      projectLink: "http://www.ablitis-avocats-rennes.bzh/",
      linkLabel: "Web",
    },
    {
      url: "/img/multiprojects_1118/homepage_(qualiciel).webp",
      alt: "Page d'Accueil du site Web Qualiciel",
      title: "Qualiciel",
      description: "Page d'accueil d'un Site Web d'un fournisseur et poseur de solutions solaires photovoltaïques",
      date: "2013",
      technologies: "Javascript & Php",
      projectLink: "",
      linkLabel: "",
    },
    {
      url: "/img/multiprojects_1118/pvsystem_(qualiciel).webp",
      alt: "Page produit",
      title: "Qualiciel",
      description: "Page produit",
      date: "2013",
      technologies: "Javascript & Php",
      projectLink: "",
      linkLabel: "",
    },
    /*
    {
      url: "/img/multiprojects_1118/slide_plus-de-projets-sur-linkedin.png",
      alt: "Message d'informations concernant plus de projets présents sur mon profil LinkedIn",
      title: "+ de projets sur LinkedIn",
      description: "Plus de projets de 2011 à 2018 sur mon profil LinkedIn",
      date: "De 2011 à 2018",
      technologies: "Javascript & Php",
      projectLink: "https://www.linkedin.com/in/ygregoire/",
      linkLabel: "LinkedIn",
    },
    */
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
                        pr-0 2xl:!pr-20 
                        2xl:!pl-8 
                        h-[700px] xxs:h-[650px] xs:h-[800px] sm:h-[750px] md:h-[650px] lg:h-[860px] xl:h-[650px] 2xl:h-[680px] 3xl:h-[850px] 4xl:h-[900px]"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  title={img.title}
                  description={img.description}
                  date={img.date}
                  technologies={img.technologies}
                  imageUrl={img.url}
                  imageAlt={img.alt}
                  projectLink={img.projectLink}
                  moreInfoLink=""
                  linkLabel={img.linkLabel || ''}
                  linkClassName={"link-project-home mt-12"}
                  imageWidth={1000}
                  imageHeight={700}
                  imageClassName="w-[230px] md:w-[65%] lg:w-[90%] 2xl:w-[45%]
                                  mx-auto
                                  pl-0 2xl:pl-8
                                  mb-0 sm:mb-0 lg:mb-0 3xl:mb-24 4xl:mb-48"
                  contentProjectClassName=" xl:mr-[60px] 2xl:mr-[70px] 3xl:mr-[150px] 4xl:mr-[100px]
                                            xl:ml-[-100px] 2xl:ml-[-70px] 3xl:ml-[-100px] 4xl:ml-[-200px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* DotsRectangle */}
      <div
        className=" xl:w-full sm:w-[40%] lg:w-[100%] 
                    xl:flex 
                    xl:justify-start 
                    w-full 
                    max-w-[320px]  
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

export default MultiProjects1118;
