import Image from 'next/image';
import DotsRectangle from "../components/DotsRectangle";
import { ImCross } from "react-icons/im"
import Link from "next/link";
import "../app/globals.css";

export default function Home() {
  return (
    <div className="bg-cover
                    bg-no-repeat
                    bg-center
                    bg-[url('/img/colored_spots.png')]"
    >

      {/* Presentation Section */}
      <div className="relative mb-24 sm:mb-24 md:mb-32 lg:mb-32 xl:mb-32 2xl:mb-32">
        <div className="relative inset-0">
          <p className="text-[14px] sm:text-[17px] md:text-[17px] lg:text-[18px] xl:text-[22px];
                        leading-[2]                         
                        text-center 
                        mt-[20px] md:mt-[50px] lg:mt-[80px]
                        mb-6 sm:mb-4 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8
                        italic 
                        font-rubik font-light 
                        px-8"
          >
            &quot;Explorez ici une sélection de mes travaux les plus significatifs. <br />Chaque projet reflète mon engagement, mes compétences et les défis que j’ai relevés.&quot;
          </p>

          {/* Traits gris */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-40 h-[2px] bg-blueNight"></div>
            <div className="w-32 h-[2px] bg-blueNight"></div>
            <div className="w-24 h-[2px] bg-blueNight"></div>
            <div className="w-12 h-[2px] bg-blueNight"></div>
            <div className="w-4 h-[2px] bg-blueNight"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="abouthome" className=" w-full
                                      flex sm:flex md:flex lg:flex xl:flex 2xl:flex 
                                      justify-start relative
                                      top-[0] sm:top-[0] md:top-[0] lg:top-[0] xl:top-[0] 2xl:top-[0]
                                      min-h-[100%]"
      >

        <div className="relative w-full
                        flex flex-col md:flex-none
                        sm:flex sm:flex-col md:block
                        items-center sm:items-center md:items-start"
        >
          <h2 className=" absolute
                          title-home-section
                          z-10
                          top-[3%] sm:top-[3%] md:top-[6%] lg:top-[6%] xl:top-[40px] 2xl:top-[0]
                          left-[20%] sm:left-[35%] md:left-[40%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%]
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

                {/* Info bubble */}
                <span className=" absolute 
                                  top-0 
                                  left-full 
                                  ml-2 
                                  px-4 py-2 
                                  text-colorChart 
                                  bg-black 
                                  rounded 
                                  opacity-0 
                                  group-hover:opacity-100 
                                  transition-opacity 
                                  duration-300 
                                  text-xl 
                                  font-rubik font-medium 
                                  whitespace-nowrap"
                >
                  + d&apos;infos
                </span>
              </a>
            </span>
          </h2>

          <Image
            src="/img/img_a-propos.png"
            alt="À propos"
            width={550}
            height={550}
            className=" w-[70%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[40%] 2xl:w-[100%]
                        h-auto 
                        mr-[10%] sm:mr-[10%] md:mr-[0]                      
                        ml-[0%] sm:ml-[0] md:ml-[1%] lg:ml-[4%] xl:ml-[4%] 2xl:ml-[7%]
                        mt-[13%] sm:mt-[10%] md:mt-[12%] lg:mt-[10%] xl:mt-[5%] 2xl:mt-[5%]"
            style={{
              maxWidth: "550px",
            }}
          />

          {/* Paragraph */}
          <p className="paragraph-home
                        center
                        w-full sm:w-[100%] md:w-[52%] lg:w-[55%] xl:w-[50%] 2xl:w-[50%]
                        relative sm:relative md:absolute lg:absolute xl:absolute 2xl:absolute                        
                        mt-2 sm:mt-8 md:top-[30%] lg:top-[40%] lg:top-[40%] xl:top-[40%] 2xl:top-[45%]
                        left-[0%] sm:left-[0%] md:left-[50%] lg:left-[45%] lg:left-[45%] xl:left-[45%] 2xl:left-[45%]                       
                        px-6 sm:px-12 md:px-12"
          >
            <span className=" mb-0.5
                              block 
                              break-words 
                              whitespace-normal sm:whitespace-normal md:whitespace-normal 
                              max-w-full"
            >
              Le développement logiciel : Une véritable <span className="text-[1.2rem] sm:text-[1.8rem] md:text-[1.4rem] lg:text-[2.2vw] xl:text-[1.8rem]">vocation</span> qui m&apos;anime au quotidien !
            </span>
            <br />
            Je m&apos;engage pleinement dans la conception d&apos;outils novateurs, performants et réellement utiles, pensés pour transformer et enrichir l&apos;expérience utilisateur. Mon objectif est de mettre la technologie au service de solutions concrètes, capables d&apos;améliorer la vie quotidienne.
          </p>
          <DotsRectangle
            className=" relative
                        w-[40%] sm:w-[40%] md:w-[40%] lg:w-[20%] xl:w-[20%] 2xl:w-[30%]                  
                        mt-8 sm:mt-[8%] md:mt-[20%] lg:mt-[-4%] xl:mt-[-5%] 2xl:mt-[-4%]
                        ml-auto"
            rows={3}
            dotsPerRow={10}
            dotColor="#fff000"
          />
        </div>

      </div>

      {/* SEPARATOR */}
      <div className="min-h-[100px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px] xl:min-h-[70px] 2xl:min-h-[150px]"></div>

      {/* Skills Section */}
      <div id="skills" className="flex flex-col 
                                  justify-start 
                                  items-center 
                                  min-h-[100%]"
      >
        <div className="flex items-center mt-[4%] sm:mt-[2%]">
          <h2 className=" title-home-section 
                          leading-tight"
          >Skills</h2>

          {/* Flèche */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="section-arrow ml-16 text-colorChart">
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
                <div className="relative mt-8 mr-4 sm:mr-6 md:mr-8">
                  <a href="/skills#skills"
                    className="text-[#4d94ff] hover:text-navLinkHover font-medium flex items-end justify-end gap-1 group flex-wrap text-right"
                  >
                    <span className="whitespace-nowrap w-full">Niveaux de compétences estimés</span>
                    <span className="w-full flex justify-end items-center gap-1">
                      (Auto-évaluation)
                      <span className="transition-all group-hover:bg-yellow-500 group-hover:text-white group-hover:rounded p-1">
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
      <div className="min-h-[100px] sm:min-h-[150px] md:min-h-[150px] lg:min-h-[150px] xl:min-h-[70px] 2xl:min-h-[150px]"></div>

      {/* My Projects Section */}
      <div id="myprojects" className="  flex flex-col 
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
                        lg:pb-[1%] xl:pb-[0] 2xl:pb-[0]
                        top-[0] sm:mt-[3%] md:mt-[3%] lg:mt-[2%] xl:mt-[2%] 2xl:mt-[1%]"
        >
          Mes projets
        </h2>

        <div className="mt-0 relative w-full">
          <ImCross
            className=" text-colorChart 
                        text-6xl sm:text-6xl md:text-10xl 
                        absolute 
                        right-4 sm:right-8 md:right-4 lg:right-8 
                        top-[-20px] md:top-[-50px] md:top-[0px]
                        z-10"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-4 sm:mt-8 xl:mt-8 2xl:mt-4">
          {/* Conteneur de l'image et du texte */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full xl:gap-x-4">
            {/* Image */}
            <div className="relative w-full xl:w-1/2 max-w-[600px]">
              <Image
                src="/img/ref_mytodolist.png"
                alt="Image de mon projet d'application MyTodoList"
                width={789}
                height={360}
                className="w-full h-auto mx-auto"
                priority
                style={{ maxWidth: "789px" }}
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col items-center xl:items-start xl:pl-4 2xl:pl-6 mt-4 xl:mt-0 max-w-[600px]">
              <h3 className="project-image-title">MyTodoList</h3>
              <p className="project-date-paragraph">Décembre 2024</p>

              <Link
                href="/portfolio#mytodolist"
                className="flex items-center mt-4 
                  text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw]
                  text-[#4d94ff] hover:text-navLinkHover group"
              >
                <span className="mr-2">+ d’infos</span>
                <svg
                  className="w-5 h-5 
                    text-[#4d94ff] 
                    group-hover:text-navLinkHover
                    w-[3.8vw] h-[auto] sm:w-[3vw] sm:h-[auto] md:w-[2.5vw] md:h-[auto] lg:w-[2vw] lg:h-[auto] xl:w-[1.5vw] xl:h-[auto]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bloc DotsRectangle */}
          <div className="xl:w-full sm:w-[40%] md:w-[40%] lg:w-[100%]
                          xl:flex 
                          xl:justify-start 
                          w-full  
                          max-w-[320px] 
                          mt-8 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-10 2xl:mt-5
                          relative
                          mx-auto
                          xl:ml-48"
          >
            <DotsRectangle
              className="w-full"
              rows={3}
              dotsPerRow={10}
              dotColor="#fff000"
            />
          </div>
        </div>

      </div>

      {/* SEPARATOR */}
      <div className="min-h-[20px] sm:min-h-[0px]"></div>

      {/* New section */}
      <div className="mt-[20px] sm:mt-[50px] lg:mt-[70px]
                      text-white 
                      w-full 
                      text-center 
                      mb-40
                      min-h-[100%]"
      >
        <p className="font-rubik                         
                      text-lg text-[1rem] sm:text-[1.125rem] md:text-[2.1vw] lg:text-[18px]
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
                        text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 
                        text-[#4d94ff] 
                        hover:text-navLinkHover group"
          >
            <span className="mr-2">Voir + de projets</span>

            {/* Flèche */}
            <svg
              className=" w-[20px] h-[20px] 
                            text-[#4d94ff] 
                            inline-block 
                            w-[3.8vw] h-[auto] sm:w-[3vw] sm:h-[auto] md:w-[2.5vw] md:h-[auto] lg:w-[2vw] lg:h-[auto] xl:w-[1.8vw] xl:h-[auto]
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
