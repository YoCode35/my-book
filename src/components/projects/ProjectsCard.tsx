import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  date: string;
  technologies: string;
  imageUrl: string;
  imageAlt: string;
  projectLink: string;
  moreInfoLink: string;
  linkLabel: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  descriptionClassName?: string;
}

const ProjectCard = ({
  title,
  date,
  technologies,
  imageUrl,
  imageAlt,
  projectLink,
  moreInfoLink,
  linkLabel,
  imageWidth = 0,
  imageHeight = 0,
  imageClassName = "",
  descriptionClassName = "",
}: ProjectProps) => {
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
        {/* Image */}
        <div className={`relative w-full xl:w-1/2 ${imageClassName}`}>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
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
              priority
              //style={{ maxWidth: "800px" }}
            />
          </a>
        </div>

        {/* Project Description */}
        <div className={`project-description-block ${descriptionClassName}`}>
          <h3 className="project-image-title">{title}</h3>
          <p className="project-date">{date}</p>

          {/* Technologies utilisées */}
          <div className="project-usetechno-info-block">
            <p className="project-techno-title font-bold">
              <span className="underline">Technologies utilisées</span> :
            </p>
            <p className="project-usetechno-info">{technologies}</p>
          </div>

          <Link
            href={moreInfoLink}
            className=" flex 
                        items-center 
                        mt-4 text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw] 
                        hover:text-navLinkHover 
                        group mb-8"
          >
            <span className="mr-2">+ d’infos</span>
            <svg
              className="w-[3.8vw] h-auto sm:w-[3vw] md:w-[2.5vw] lg:w-[2vw] xl:w-[1.4vw] 
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

          {/* Lien GitHub ou site Web */}
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-project-home"
          >
            {linkLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
