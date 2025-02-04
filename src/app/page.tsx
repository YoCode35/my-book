'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import DotsRectangle from "../components/dots/DotsRectangle";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import MyTodoListProject from "./pages/portfolio/projects/mytodolist/myTodoListProject";
import StudentsProject from "./pages/portfolio/projects/students/studentsProject";
import SeriesProject from "./pages/portfolio/projects/series/seriesProject";
import AuctionProject from "./pages/portfolio/projects/auctions/auctionsProject";
import LicProject from './pages/portfolio/projects/lic/licProject';
import MultiProjects1118 from './pages/portfolio/projects/multi-projects/multiProjects_2011-18';
import CognitifProject from './pages/portfolio/projects/cognitif/cognitifProject';
import { LABELS } from "../components/navbar/route";

export default function Home() {
  const [rectWidth, setRectWidth] = useState("20%");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setRectWidth("60%");
      } else {
        setRectWidth("20%");
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const [dotsPerRow, setDotsPerRow] = useState(5); // Valeur par défaut

  useEffect(() => {
    const updateDotsPerRow = () => {
      if (window.innerWidth >= 2560) {
        setDotsPerRow(80); // Nombre de points pour les écrans larges
      } else if (window.innerWidth >= 1920) {
        setDotsPerRow(50); // Nombre de points pour les écrans medium
      } else if (window.innerWidth >= 1280) {
        setDotsPerRow(50); // Nombre de points pour les écrans medium
      } else if (window.innerWidth >= 1024) {
        setDotsPerRow(20); // Nombre de points pour les écrans medium
      } else if (window.innerWidth >= 768) {
        setDotsPerRow(15); // Nombre de points pour les écrans petits
      } else if (window.innerWidth >= 640) {
        setDotsPerRow(10); // Nombre de points pour les écrans petits
      } else if (window.innerWidth >= 320) {
        setDotsPerRow(5); // Nombre de points pour les écrans petits
      }
    };

    // Exécute la fonction initiale pour définir la valeur à l'instant de l'affichage
    updateDotsPerRow();

    // Ajouter un event listener pour mettre à jour les dots à chaque redimensionnement
    window.addEventListener('resize', updateDotsPerRow);

    // Nettoyage de l'event listener
    return () => window.removeEventListener('resize', updateDotsPerRow);
  }, []);

  return (
    <main className=" bg-cover bg-no-repeat bg-center bg-[url('/img/colored_spots.webp')]">
      {/* Presentation Section */}
      <div className="relative mb-6 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-16 2xl:mb-0 3xl:mb-0 4xl:mb-64">
        <div className="mt-[20px] sm:mt-[80px] md:mt-[100px] lg:mt-[50px] 3xl:mt-[150px] 4xl:mt-[200px]">
          <p className="text-[14px] sm:text-[17px] md:text-[17px] lg:text-[18px] xl:text-[20px] 3xl:text-[23px] 4xl:text-[30px]
                        leading-[2] 
                        text-center 
                        text-gray-300 
                        mb-6 sm:mb-4 md:mb-8 lg:mb-12 xl:mb-8 2xl:mb-8
                        italic 
                        font-quicksand 
                        font-light 
                        px-8"
          >
            <span className="block">&quot;Explorez ici une sélection de mes travaux les plus significatifs</span>
            <span className="block">Chaque projet reflète mon engagement, mes compétences et les défis que j’ai relevés.&quot;</span>
          </p>
          {/* Gray Lines */}
          <div className="flex 
                          flex-col 
                          items-center 
                          gap-6 lg:gap-10"
          >
            <div className="w-40 h-[2px] bg-[#1a2b3b] lg:w-80 lg:h-[3px] rounded-full opacity-60"></div>
            <div className="w-32 h-[2px] bg-[#162432] lg:w-72 lg:h-[3px] rounded-full opacity-50"></div>
            <div className="w-24 h-[2px] bg-[#121f2a] lg:w-64 lg:h-[3px] rounded-full opacity-40"></div>
            <div className="w-12 h-[2px] bg-[#0f1922] lg:w-48 lg:h-[3px] rounded-full opacity-30"></div>
            <div className="w-4 h-[2px] bg-[#0c131a] lg:w-32 lg:h-[3px] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="abouthome" className=" w-full 
                                          flex justify-start 
                                          relative 
                                          min-h-[100%]"
      >
        <div className="relative 
                        w-full 
                        flex 
                        flex-col 
                        md:flex-none sm:flex 
                        sm:flex-col 
                        md:block 
                        items-center 
                        md:items-start"
        >
          <h2 className=" absolute 
                          title-home-section 
                          z-10 
                          top-[3%] sm:top-[0] md:top-[3%] lg:top-[6%] xl:top-[0] 2xl:top-[5%] 3xl:top-[5%] 4xl:top-[5%]
                          left-[15%] sm:left-[30%] md:left-[40%] lg:left-[30%] xl:left-[35%] 3xl:left-[40%] 
                          leading-tight 
                          text-shadow"
          >
            <span className="block leading-none">{LABELS.ABOUT}</span>
            <span className="inline-flex items-center">de moi
              <a href="/pages/about#about" className="relative group">
                <span className=" relative 
                                  text-[3vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.2rem] 2xl:text-[1.6rem] 3xl:text-[2rem] 4xl:text-[2.5rem]
                                  left-[50%] sm:left-[45%] lg:left-[75%] 2xl:left-[70%]
                                  text-gray-300 
                                  text-center 
                                  top-6 sm:top-12 md:top-6 2xl:top-12 3xl:top-12"
                >
                  + d’infos
                </span>
                <span className=" inline-block 
                                  text-[16vw] sm:text-[16vw] md:text-[12vw] lg:text-[12vw] xl:text-[12vw] 2xl:text-[12vw]
                                  ml-0 sm:ml-0 lg:ml-48 xl:ml-48 2xl:ml-48 
                                  text-colorChart"
                >
                  ➜
                </span>
              </a>
            </span>
          </h2>
          <Image
            src="/img/img_a-propos.webp"
            alt="À propos"
            width={750}
            height={750}
            className=" w-[70%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[40%] 2xl:w-[37%] 3xl:w-[40%] 4xl:w-[37%]
                        h-auto mr-[10%] sm:mr-[10%] md:mr-[0] ml-[0%] sm:ml-[0] md:ml-[1%] lg:ml-[4%] xl:ml-[4%] 2xl:ml-[4%] 3xl:ml-[7%]
                        mt-[18%] sm:mt-[15%] md:mt-[6%] lg:mt-[10%] xl:mt-[5%] 2xl:mt-[7%] 3xl:mt-[7%]"
            style={{
              maxWidth: "auto",
              height: "auto",
            }}
          />

          <p className="relative sm:relative md:absolute
                        w-full sm:w-[100%] md:w-[40%] lg:w-[50%] 3xl:w-[48%]
                        mt-2 sm:mt-[0%] md:top-[35%] lg:top-[47%] xl:top-[52%] 2xl:top-[56%] 3xl:top-[50%] 4xl:top-[50%] 
                        right-[0%] md:right-[4%] lg:right-[3%] 3xl:right-[2%] 4xl:right-[5%]
                        px-6 sm:px-12 md:px-0 text-white font-quicksand text-[3.7vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.3vw]
                        text-justify">
            <span className=" mb-0.5 
                              block 
                              break-words 
                              whitespace-normal sm:whitespace-normal md:whitespace-normal 
                              max-w-full"
            >
              Le développement logiciel : Une véritable <span className="text-[5vw] sm:text-[1.8rem] md:text-[1.4rem] lg:text-[2.2vw] xl:text-[1.6rem] 2xl:text-[1.8rem]">vocation</span> qui m’anime au quotidien !
            </span>
            <br />
            Je m’engage pleinement dans la conception d’outils novateurs, performants et réellement utiles, pensés pour transformer et enrichir l’expérience utilisateur. Mon objectif est de mettre la technologie au service de solutions concrètes, capables d’améliorer la vie quotidienne.
          </p>

          <DotsRectangle
            className="relative 
                      mt-8 sm:mt-[8%] md:mt-[20%] lg:mt-[0%] xl:mt-[-7%] 2xl:mt-[-5%] 3xl:mt-[0%] 4xl:mt-[10%] 
                      ml-auto"
            rows={3}
            dotsPerRow={10}
            dotColor="#fff000"
            width={rectWidth}
            height="45px"
          />

        </div>
      </section>

      {/* SEPARATOR */}
      <div className="min-h-[70px] sm:min-h-[100px] md:min-h-[60px] lg:min-h-[50px] xl:min-h-[60px] 2xl:min-h-[160px] 3xl:min-h-[50px]"></div>

      {/* Skills Section */}
      <section id="skillshome" className="flex 
                                      flex-col 
                                      items-center 
                                      min-h-[100%] 
                                      px-4 sm:px-8 lg:px-16 xl:px-32"
      >
        <div className="flex 
                        items-center 
                        mt-[2%] sm:mt-[2%]"
        >
          <h2 className=" title-home-section 
                          leading-tight"
          >{LABELS.SKILLS}</h2>

          {/* Flèche */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="arrow-section ml-16 text-colorChart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </div>

          <div className="mx-auto 
                          relative 
                          top-[10px] sm:top-[20px] md:top-[10px] lg:top-[5px] xl:top-[5px] 2xl:top-[5px] 3xl:top-[10px] 4xl:top-[50px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 
                            gap-8
                            pb-6 sm:pb-0"
            >
              {/* First Column */}
              <div className="text-center sm:text-left">
              <div className="skills-title">Front end</div>
                  <div className="skills-text"><span>JavaScript</span></div>
                  <div className="skills-text"><span>Flutter</span></div>
                  <div className="skills-text"><span>React.js</span></div>
                  <div className="skills-text"><span>Next.js</span></div>
                  <div className="skills-text"><span>TypeScript</span></div>                   
                  <div className="skills-text"><span>CSS</span></div>
                  <div className="skills-text"><span>Bootstrap</span></div>
                  <div className="skills-text"><span>Tailwind CSS</span></div>
                  <div className="skills-text"><span>WordPress</span></div>

                <div className="pt-6">
                  <div className="skills-subtitle">Prototypage & Design</div>
                  <div className="skills-text"><span>Balsamiq</span></div>
                  <div className="skills-text"><span>Photoshop</span></div>
                </div>
              </div>

              {/* Second Column */}
              <div className="text-center sm:text-left">
                  <div className="skills-title">Back end</div>
                  <div className="skills-text"><span>Node.js</span></div>
                  <div className="skills-text"><span>TypeScript</span></div>
                  <div className="skills-text"><span>Symfony</span></div>
                  <div className="skills-text"><span>Php</span></div>
                  <div className="skills-text"><span>Java</span></div>
                  <div className="skills-text"><span>MySQL</span></div>
                  <div className="skills-text"><span>SQL Server</span></div>

                  <div className="pt-6">
                  <div className="skills-subtitle">Sécurité Web</div>
                  <div className="skills-text"><span>Protection des données sensibles</span></div>
                  <div className="skills-text"><span>Prévention des vulnérabilités</span></div>
                </div>

                <div className="pt-6">
                  <div className="skills-subtitle">Modélisation & Conception</div>
                  <div className="skills-text"><span>UML (Unified Modeling Language)</span></div>
                </div>
              </div>

              {/* Third Column */}
              <div className="text-center sm:text-left">
              <div className="skills-title">Web Services & APIs</div>
                  <div className="skills-text"><span>Firebase</span></div>
                  <div className="skills-text"><span>APIs REST</span></div>

                <div className="pt-6">
                <div className="skills-title">Versioning</div>
                  <div className="skills-text"><span>GitHub</span></div>
                </div>

                {/* Skills Link */}
                <Link
                  href="/pages/skills#skills"
                  className=" flex 
                              items-center 
                              mt-4 text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw] 
                              hover:text-navLinkHover group mb-8 
                              justify-end sm:justify-start"
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
              </div>
            </div>
          </div>

      </section>

      {/* SEPARATOR */}
      <div className="min-h-[50px] sm:min-h-[150px] md:min-h-[100px] lg:min-h-[50px] xl:min-h-[70px] 2xl:min-h-[150px]"></div>

      {/* My Projects Section */}
      <section id="portfoliohome" className="flex 
                                      flex-col 
                                      justify-start 
                                      items-center 
                                      relative 
                                      w-full 
                                      min-h-[100%]"
      >
        <h2 className=" title-home-section 
                        leading-tight 
                        lg:ml-80 
                        lg:text-right 
                        lg:pb-[1%] xl:pb-[0] 2xl:pb-[3%] 3xl:pb-[6%]
                        top-[0] 
                        mt-[3%] lg:mt-[2%] 2xl:mt-[1%]"
        >
          Mes projets
        </h2>

        <div className="mt-0 relative w-full">
          <ImCross
            className=" text-colorChart 
                        text-4xl sm:text-6xl md:text-10xl 
                        absolute 
                        right-4 sm:right-8 md:right-4 lg:right-8 
                        top-[0] sm:top-[10px] md:top-[-50px] md:top-[0px] 
                        z-10"
          />
        </div>

        <MyTodoListProject />
        <StudentsProject />
        <SeriesProject />
        <AuctionProject />
        <LicProject />
        <MultiProjects1118 />
        <CognitifProject />

        {/* SEPARATOR */}
        <div className="min-h-[20px] sm:min-h-[0px]  4xl:min-h-[100px]"></div>

        {/* Upcoming sections */}
        <section className="mt-[20px] sm:mt-[50px] lg:mt-[70px]
                            text-white 
                            w-full 
                            text-center 
                            mb-48
                            min-h-[100%]"
        >

          {/* DotsRectangle */}
          <div className="w-full lg:w-[100%] xl:w-full 
                          xl:flex 
                          xl:justify-start
                          relative 
                          mx-auto
                          mb-[50px]"
          >
            <DotsRectangle
              className="w-full"
              rows={3}
              dotsPerRow={dotsPerRow}
              dotColor="#fff000"
              width="100%"
              height="45px"
            />
          </div>

          {/* 
          <p className="font-rubik                         
                        text-lg text-[1rem] sm:text-[1.125rem] md:text-[2.1vw] lg:text-[18px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[30px]
                        mx-8 sm:mx-12 md:mx-8 lg:mx-20"
          >
            [Mise à jour prévue d’ici quelques jours pour une présentation d’autres projets]
          </p>
          */}
          <div className="flex 
                          justify-center sm:justify-center 
                          mt-20
                          mx-auto sm:mx-auto md:mx-0"
          >
            <a
              href="https://www.linkedin.com/in/ygregoire/"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex 
                          items-center 
                          text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw]                        
                          hover:text-navLinkHover group"
            >
              <span className="mr-2">Voir + de projets</span>
              {/* Flèche */}
              <svg
                className=" w-[20px] h-[20px] 
                            text-[#4d94ff] 
                            inline-block 
                            w-[3.8vw] h-[auto] sm:w-[3vw] sm:h-[auto] md:w-[2.5vw] md:h-[auto] lg:w-[2vw] lg:h-[auto] xl:w-[1.4vw] xl:h-[auto]
                            group-hover:text-navLinkHover
                            mx-2
                            mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7" />
              </svg>
              {/* LinkedIn Logo*/}
              <Image
                src="/img/linkedin_logo.png"
                alt="Logo LinkedIn"
                width={76}
                height={76}
                className=" inline-block ml-2 
                            w-[40px] h-[auto] sm:w-[30px] sm:h-[auto] md:w-[35px] md:h-[auto] lg:w-[40px] lg:h-[auto] xl:w-[45x] xl:h-[auto] 2xl:w-[50px] 2xl:h-[auto]"
              />
            </a>
          </div>
        </section>

      </section>

    </main>
  );
}
