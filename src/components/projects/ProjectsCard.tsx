import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  contentProjectClassName?: string;
  date: string;
  technologies: string;
  imageUrl: string;
  imageAlt: string;
  projectLink?: string;  
  moreInfoLink: string;
  linkLabel: string;  
  linkClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  isHomeLink?: boolean;  
}

const ProjectCard = ({
  title,
  description,
  contentProjectClassName = "",
  date,
  technologies,
  imageUrl,
  imageAlt,
  projectLink,  
  moreInfoLink,
  linkLabel,
  linkClassName = "",
  imageWidth = 0,
  imageHeight = 0,
  imageClassName = "", 
  isHomeLink = false, // Vérifie si c'est un lien spécifique 
}: ProjectProps) => {
  
  // Composant interne pour éviter la répétition
  const ImageComponent = () => (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
      className=" h-auto 
                  mx-auto 
                  rounded-3xl 
                  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[90%]
                  mt-12 xl:mt-16 2xl:mt-24"
    />
  );

  return (
    <section className="flex 
                        flex-col 
                        items-center 
                        justify-center 
                        w-full 
                        mt-12 sm:mt-8 2xl:mt-4"
    >
      <div className="flex 
                      flex-col xl:flex-row 
                      items-center 
                      justify-center 
                      w-full 
                      xl:gap-x-4"
      >
        {/* Image avec lien optionnel */}
        <div className={`relative w-full xl:w-1/2 ${imageClassName}`}>
          {projectLink ? (
            // Si c'est un lien spécifique, il ne s'ouvrira pas dans un nouvel onglet
            <a href={projectLink} target={isHomeLink ? "_self" : "_blank"} rel="noopener noreferrer">
              <ImageComponent />
            </a>
          ) : (
            <ImageComponent />
          )}
        </div>

        {/* Project Identity */}
        <div className={`project-content-block ${contentProjectClassName}`}>
          <h3 className="project-image-title">{title}</h3>
          <p className="project-description-home">{description}</p>
          <p className="project-date">{date}</p>

          {/* Technologies utilisées */}
          <div className="project-usetechno-info-block">
            <p className="project-techno-title font-bold">
              <span className="underline">Technologies utilisées</span> :
            </p>
            <p className="project-usetechno-info">{technologies}</p>
          </div>

          {moreInfoLink && (
            <Link
              href={moreInfoLink}
              className=" flex 
                          items-center 
                          mt-4 text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw] 
                          hover:text-navLinkHover 
                          group mb-8"
                          aria-label={`Plus d’informations sur le projet ${title}`}
            >
              <span className="mr-2">+ d’infos</span>
              <svg
                className=" w-[3.8vw] h-auto sm:w-[3vw] md:w-[2.5vw] lg:w-[2vw] xl:w-[1.4vw] 
                            mt-1 
                            text-[#4d94ff] 
                            group-hover:text-navLinkHover"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}

          {/* Lien GitHub, Site Web ou LinkedIn */}
          <a
            href={projectLink}
            target={isHomeLink ? "_self" : "_blank"} // Ce lien ne s'ouvrira pas dans un nouvel onglet si isHomeLink est vrai
            rel="noopener noreferrer"
            className={`${linkClassName}`}
            aria-label={`Voir le projet ${title} en ligne`}
          >
            {linkLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
