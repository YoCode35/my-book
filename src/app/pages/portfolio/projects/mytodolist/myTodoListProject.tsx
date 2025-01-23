import Image from "next/image";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";
import Link from "next/link";

const MyTodoListProject = () => {

  return (

    <section className="flex 
                        flex-col 
                        items-center 
                        justify-center 
                        w-full 
                        mt-12 sm:mt-8 2xl:mt-4"
    >
      <div className="flex 
                      flex-col 
                      xl:flex-row 
                      items-center 
                      justify-center 
                      w-full 
                      xl:gap-x-4"
      >
        {/* Image */}
        <div className="relative
                        w-full 
                        xl:w-1/2
                        max-w-[600px]"
        >
          <a
            href="https://www.mytodolist.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/ref_mytodolist.png"
              alt="Image de mon projet d'application MyTodoList"
              width={789}
              height={360}
              className="w-full h-auto mx-auto"
              priority
              style={{ maxWidth: "789px" }}
            />
          </a>
        </div>

        <div className="flex 
                        flex-col 
                        items-center 
                        xl:items-start 
                        xl:pl-4 2xl:pl-6 mt-4 
                        xl:mt-0 
                        max-w-[600px]"
        >
          <h3 className="project-image-title">MyTodoList</h3>
          <p className="project-date">Octobre 2024</p>

          {/* Technologies utilisées */}
          <div className="mt-2">
            <p className="project-techno-title">
              <strong><span className="underline">Technologies utilisées</span> :</strong>
            </p>
            <p className="project-usetechno-info">
              Flutter & MySQL
            </p>
          </div>

          <Link
            href="/pages/portfolio#mytodolist"
            className=" flex 
                        items-center 
                        mt-4 text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw] 
                        hover:text-navLinkHover group mb-8"
          >
            <span className="mr-2">+ d’infos</span>
            <svg
              className=" w-[3.8vw] 
                          h-[auto] sm:w-[3vw] sm:h-[auto] md:w-[2.5vw] md:h-[auto] lg:w-[2vw] lg:h-[auto] xl:w-[1.4vw] xl:h-[auto]
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

          <a href="https://www.mytodolist.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="projet-link"
          >
            https://www.mytodolist.tech
          </a>
        </div>
      </div>

      {/* DotsRectangle */}
      <div className="xl:w-full sm:w-[40%] lg:w-[100%] 
                      xl:flex 
                      xl:justify-start 
                      w-full 
                      max-w-[320px] 
                      mt-8 xl:mt-10 2xl:mt-5 
                      relative 
                      mx-auto 
                      xl:ml-48
                      mb-24"
      >
        <DotsRectangle
          className="w-full"
          rows={3}
          dotsPerRow={10}
          dotColor="#fff000"
        />
      </div>

    </section>
  );
};

export default MyTodoListProject;