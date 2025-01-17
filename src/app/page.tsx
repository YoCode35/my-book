import Image from 'next/image';
import DotsRectangle from "../components/DotsRectangle";
//import { ImCross } from "react-icons/im"
//import Link from "next/link";
import MyTodoListProject from "../components/projects/MyTodoListProject";

export default function Home() {
  return (
    <div className="bg-cover
                    bg-no-repeat
                    bg-center
                    bg-[url('/img/colored_spots.png')]"
    >

      {/* Presentation Section */}
      <div className="relative 
              mb-6 sm:mb-24 md:mb-8 lg:mb-8 xl:mb-16 2xl:mb-32 3xl:mb-48 4xl:mb-64"
      >
        <div className="mt-[20px] md:mt-[30px] lg:mt-[50px] 4xl:mt-[200px]">
          <p className="text-[14px] sm:text-[17px] md:text-[17px] lg:text-[18px] xl:text-[20px] 3xl:text-[23px] 4xl:text-[30px]
                leading-[2]
                text-center
                text-gray-300
                mb-6 sm:mb-4 md:mb-8 lg:mb-12 xl:mb-8 2xl:mb-8
                italic 
                font-quicksand font-light 
                px-8"
          >
            <span className="block">&quot;Explorez ici une sélection de mes travaux les plus significatifs</span>
            <span className="block text-gray-400 text-[13px] lg:text-[16px] xl:text-[18px] 3xl:text-[20px] 4xl:text-[25px]">(Mise en ligne en cours de plusieurs projets)</span>
            <span className="block">Chaque projet reflète mon engagement, mes compétences et les défis que j’ai relevés.&quot;</span>
          </p>

          {/* Gray Lines */}
          <div className="flex flex-col 
                          items-center 
                          gap-6 lg:gap-10"
          >
            <div className="w-40 h-[2px] bg-[#1a2b3b] lg:w-80 lg:h-[3px] rounded-full"></div>
            <div className="w-32 h-[2px] bg-[#162432] lg:w-72 lg:h-[3px] rounded-full"></div>
            <div className="w-24 h-[2px] bg-[#121f2a] lg:w-64 lg:h-[3px] rounded-full"></div>
            <div className="w-12 h-[2px] bg-[#0f1922] lg:w-48 lg:h-[3px] rounded-full"></div>
            <div className="w-4 h-[2px] bg-[#0c131a] lg:w-32 lg:h-[3px] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="abouthome" className=" w-full
                                      flex
                                      justify-start relative
                                      min-h-[100%]"
      >
        <div className="relative w-full
                        flex flex-col md:flex-none
                        sm:flex sm:flex-col md:block
                        items-center md:items-start"
        >
          <h2 className=" absolute
                          title-home-section
                          z-10
                          top-[3%] sm:top-[3%] md:top-[3%] lg:top-[6%] xl:top-[40px] 2xl:top-[5%] 3xl:top-[0] 4xl:top-[5%]
                          left-[20%] sm:left-[35%] md:left-[40%] lg:left-[30%] xl:left-[35%] 3xl:left-[40%]
                          leading-tight
                          text-shadow"
          >
            <span className="block leading-none">À propos</span>
            <span className="inline-flex items-center">de moi
              <a href="/about#about" className="relative group">
                <span className=" inline-block 
                                  text-[16vw] sm:text-[16vw] md:text-[12vw] lg:text-[12vw] xl:text-[12vw] 2xl:text-[12vw]
                                  ml-10 sm:ml-16 lg:ml-48 xl:ml-48 2xl:ml-48
                                  text-colorChart"
                >
                  ➜
                </span>
                <span className=" absolute
                                  text-[2vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2rem] 
                                  mt-[70%] md:mt-[0] lg:mt-4 
                                  left-[52%] 
                                  text-gray-300"
                >
                  + d’infos
                </span>
              </a>
            </span>
          </h2>
          <Image
            src="/img/img_a-propos.png"
            alt="À propos"
            width={750}
            height={750}
            className=" w-[70%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[40%] 2xl:w-[37%] 3xl:w-[75%] 4xl:w-[100%]
                        h-auto 
                        mr-[10%] sm:mr-[10%] md:mr-[0]                      
                        ml-[0%] sm:ml-[0] md:ml-[1%] lg:ml-[4%] xl:ml-[4%] 2xl:ml-[4%] 3xl:ml-[7%]
                        mt-[18%] sm:mt-[20%] md:mt-[6%] lg:mt-[10%] xl:mt-[5%] 2xl:mt-[7%] 3xl:mt-[7%]"
            style={{
              maxWidth: "750px",
            }}
          />
          {/* Paragraph */}
          <p className="relative sm:relative md:absolute
                        w-full sm:w-[100%] md:w-[40%] lg:w-[50%] 3xl:w-[48%]
                        mt-2 sm:mt-[0%] md:top-[35%] lg:top-[47%] xl:top-[50%] 3xl:top-[50%] 4xl:top-[50%]                      
                        right-[0%] md:right-[4%] lg:right-[3%] 3xl:right-[2%] 4xl:right-[5%]
                        px-6 sm:px-12 md:px-0
                        text-white
                        font-quicksand
                        text-[3.7vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.3vw]
                        text-justify"
          >
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
            className=" relative
                        w-[40%] sm:w-[40%] md:w-[40%] lg:w-[20%] xl:w-[20%] 2xl:w-[30%]                  
                        mt-8 sm:mt-[8%] md:mt-[20%] lg:mt-[0%] xl:mt-[-5%] 2xl:mt-[-5%] 3xl:mt-[0%] 4xl:mt-[10%]
                        ml-auto"
            rows={3}
            dotsPerRow={10}
            dotColor="#fff000"
          />

        </div>
      </div>

      {/* SEPARATOR */}
      <div className="min-h-[70px] sm:min-h-[100px] md:min-h-[60px] lg:min-h-[50px] xl:min-h-[60px] 2xl:min-h-[160px]"></div>

      {/* Skills Section */}
      <div id="skills" className="flex flex-col 
                                  justify-start 
                                  items-center 
                                  min-h-[100%]"
      >
        <div className="flex items-center mt-[2%] sm:mt-[2%]">
          <h2 className=" title-home-section 
                          leading-tight"
          >Skills</h2>

          {/* Flèche */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="arrow-section ml-16 text-colorChart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </div>
        <div className="flex
                        justify-center 
                        px-4 sm:px-8 md:px-12 lg:px-16"
        >
          <div className="paragraph-custom 
                          max-w-4xl 
                          w-full 
                          mx-auto 
                          relative 
                          top-[10px] sm:top-[20px] md:top-[10px] lg:top-[5px] xl:top-[5px] 2xl:top-[5px]
                          text-left justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 
                            gap-8 lg:gap-16 xl:gap-20 2xl:gap-24 
                            pb-6 sm:pb-0"
            >
              {/* First Column */}
              <div className="text-center sm:text-left ">
                <strong className="text-[7vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Front end</strong>
                <div className="pt-6">
                  <div className="skills-text flex justify-center sm:justify-between"><span>ReactJS</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>NextJS</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Angular</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Flutter</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>WordPress</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Symfony</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>JavaScript</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>CSS</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Tailwind CSS</span></div>
                </div>

                <div className="pt-6">
                  <strong className="text-[6vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Prototypage & Design</strong>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Figma</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Balsamiq</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Photoshop</span></div>
                </div>
              </div>

              {/* Second Column */}
              <div className="text-center sm:text-left">
                <strong className="text-[7vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Back end</strong>
                <div className="pt-6">
                  <div className="skills-text flex justify-center sm:justify-between"><span>NodeJS</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>TypeScript</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Php</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Java EE</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>PostgreSQL</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>MySQL</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>SQL Server</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>Sécurité Web et Web Mobile</span></div>
                </div>

                <div className="pt-6">
                  <strong className="text-[6vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Modélisation & Conception</strong>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>UML (Unified Modeling Language)</span></div>
                </div>
              </div>

              {/* Third Column */}
              <div className="text-center sm:text-left">
                <strong className="text-[6.5vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Web Services & APIs</strong>
                <div className="pt-6">
                  <div className="skills-text flex justify-center sm:justify-between"><span>Firebase</span></div>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>APIs REST</span></div>
                </div>

                <div className="pt-6">
                  <strong className="text-[6.5vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Versioning</strong>
                  <div className="skills-text mt-2 flex justify-center sm:justify-between"><span>GitHub</span></div>
                </div>

                {/* Skills Link */}
                <div
                  className=" relative 
                              mt-8 
                              mr-4 sm:mr-6 md:mr-8 lg:mr-12
                              text-right"
                >
                  <a href="/skills#skills"
                    className=" hover:text-navLinkHover
                                font-medium 
                                inline-flex flex-col items-end // Utilisation d'inline-flex pour un alignement précis
                                gap-2 group 
                                text-[3.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.2vw]"
                  >
                    <span className="whitespace-nowrap w-full text-right">Niveaux de compétences estimés</span>
                    <span className="w-full flex justify-end items-center gap-2">(Auto-évaluation)
                      <span className=" transition-all 
                                        group-hover:bg-yellow-500 
                                        group-hover:text-white 
                                        group-hover:rounded p-1"
                      >
                        {/* Flèche */}
                        <svg className="w-5 h-5 colorChart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="min-h-[50px] sm:min-h-[150px] md:min-h-[100px] lg:min-h-[50px] xl:min-h-[70px] 2xl:min-h-[150px]"></div>

      {/* My Projects Section */}
      <MyTodoListProject />

      {/* SEPARATOR */}
      <div className="min-h-[20px] sm:min-h-[0px]  4xl:min-h-[100px]"></div>

      {/* New section */}
      <div className="mt-[20px] sm:mt-[50px] lg:mt-[70px]
                      text-white 
                      w-full 
                      text-center 
                      mb-48
                      min-h-[100%]"
      >
        <p className="font-rubik                         
                      text-lg text-[1rem] sm:text-[1.125rem] md:text-[2.1vw] lg:text-[18px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[30px]
                      mx-8 sm:mx-12 md:mx-8 lg:mx-20"
        >
          [Mise à jour prévue d’ici quelques jours pour une présentation d’autres projets]
        </p>
        <div className="flex 
                        justify-center sm:justify-center 
                        mt-8 sm:mt-8
                        mx-auto sm:mx-auto md:mx-0"
        >
          <a
            href="https://www.linkedin.com/in/yoann-gregoire-cda/"
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
                            mx-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7" />
            </svg>
            {/* LinkedIn Logo */}
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
      </div>

    </div>
  );
}
