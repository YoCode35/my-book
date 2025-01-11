import Image from 'next/image';
import DotsRectangle from "../components/DotsRectangle";
//import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="bg-cover
                    bg-no-repeat
                    bg-center
                    bg-[url('/img/colored_spots.png')]"
    >
      <p className="text-[1rem] 
                    sm:text-[1.125rem] 
                    md:text-[1.1rem] 
                    leading-relaxed 
                    text-shadow 
                    text-center 
                    mt-0 
                    mb-0 sm:mb-4 md:mb-8 lg:mb-8
                    italic 
                    font-rubik font-light 
                    px-8"
      >
        &quot;Explorez ici une sélection de mes travaux les plus significatifs. <br />Chaque projet reflète mon engagement, mes compétences et les défis que j’ai relevés.&quot;
      </p>

      <p className="text-[1rem] 
                    sm:text-[1.125rem] 
                    md:text-[1.1rem] 
                    leading-relaxed 
                    text-shadow 
                    text-center 
                    mt-0
                    mb-36 sm:mb-32 md:mb-64 lg:mb-40px
                    font-rubik font-bold 
                    px-8"
      >
        [EN COURS DE DEVELOPPEMENT]
      </p>

      {/* About Section */}
      <div id="abouthome" className=" lg:flex 
                                      items-start
                                      w-full
                                      lg:flex 
                                      items-start 
                                      w-full h-[600px] sm:h-[500px] md:h-[550px] lg:h-0px]
                                      md:pt-0"
      >

        <div className="relative">
          {/* Image */}
          <Image
            src="/img/img_a-propos.png"
            alt="À propos"
            width={500}
            height={500}
            className=" w-[400px] sm:w-[400px] md:w-[500px] lg:w-[500px]
                        h-[auto] sm:h-[auto] md:h-[auto] lg:h-[auto]
                        mr-[5rem] sm:mr-[10rem] md:mr-[50rem] lg:mr-[50rem]
                        ml-[5%] sm:ml-[10%] md:ml-[5%] lg:ml-[0%]"
          />

          <h1 className=" absolute
                          z-10
                          top-[-4%] sm:top-[-5%] md:top-[-5%] lg:top-[-5%]
                          left-[30%] sm:left-[35%] md:left-[40%] lg:left-[30%]
                          text-[3rem] sm:text-[4rem] md:text-[5rem]
                          leading-tight
                          text-shadow
                          text-left"
          >
            À propos<br />de moi
            <a href="/about#about" className="relative group">
              <span className=" inline-block 
                                mt-[-1rem] sm:mt-0 md:mt-0
                                ml-12 sm:ml-24 md:ml-24
                                text-colorChart">➜
              </span>
              {/* Info bubble */}
              <span className=" absolute 
                                top-0 left-full 
                                ml-2 
                                px-4 py-2 
                                text-white 
                                bg-black 
                                rounded 
                                opacity-0 
                                group-hover:opacity-100 
                                transition-opacity 
                                duration-300 
                                text-sm 
                                whitespace-nowrap"
              >
                + d&apos;infos
              </span>
            </a>
          </h1>

          {/* Paragraph */}
          <p className="paragraph-custom
                        w-full sm:w-full md:w-full lg:w-[65%]
                        relative sm:relative md:relative lg:absolute
                        center
                        justify
                        lg:top-[30%]
                        left-[0%] sm:left-[0%] md:left-[0%] lg:left-[54%]                         
                        px-12 sm:px-24 md:px-12
                        mt-6 sm:mt-8 md:mt-12"
          >
            <span className=" mb-2
                              block 
                              break-words 
                              whitespace-normal sm:whitespace-normal md:whitespace-normal 
                              max-w-full"
            >
              Le développement logiciel : Une véritable <span className="text-[1.2rem] sm:text-[1.5rem]">vocation</span> qui m&apos;anime au quotidien !
            </span>
            <br />
            Je m&apos;engage pleinement dans la conception d&apos;outils novateurs, performants et réellement utiles, pensés pour transformer et enrichir l&apos;expérience utilisateur. Mon objectif est de mettre la technologie au service de solutions concrètes, capables d&apos;améliorer la vie quotidienne.
          </p>

        </div>
        <DotsRectangle
          className=" w-[40%] sm:w-[40%] md:w-[40%] lg:w-[20%]                    
                      mt-8 sm:mt-8 md:mt-8 lg:mt-80
                      self-center
                      ml-auto"
          rows={3}
          dotsPerRow={10}
          dotColor="#fff000"
        />
      </div>

      {/* SEPARATEUR */}
      <div className="h-[128px] sm:h-[320px] md:h-[288px] lg:h-[200px]"></div>
      {/* SEPARATEUR */}

      {/* Skills Section */}
      <div id="skills" className=" h-[1400px] sm:h-[600px] md:h-[850px] lg:h-[850px] flex flex-col justify-center items-center
                                   flex flex-col justify-center items-center"
      >
        <h1 className=" relative
                                    z-10 
                                    text-[3rem] 
                                    sm:text-[4rem] md:text-[5rem] 
                                    leading-tight 
                                    text-shadow 
                                    text-center 
                                    flex items-center 
                                    justify-center 
                                    top-[0px] sm:top-[0px] md:top-[0px] lg:top-[0px] 
                                    mx-auto"
        >
          Skills
          {/* Arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-colorChart
                                                                                                                                    w-[8rem] 
                                                                                                                                    h-[8rem] 
                                                                                                                                    ml-4 sm:ml-6 md:ml-6 lg:ml-48 
                                                                                                                                    lg:mt-[1rem]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </h1>

        <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="paragraph-custom max-w-4xl w-full mx-auto relative top-[20px] md:top-[40px] lg:top-[50px] text-left justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-24 sm:pb-96 md:pb-96 lg:pb-96">
              {/* Première colonne */}
              <div className="text-center sm:text-left ">
                <strong className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Front end</strong>
                <div className="pt-6">
                  <div className="flex justify-center sm:justify-between"><span>ReactJS</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Angular</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Flutter</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>WordPress</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Symfony</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>JavaScript</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>CSS</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Tailwind CSS</span></div>
                </div>

                <div className="pt-6">
                  <strong className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">Prototypage & Design</strong>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Figma</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Balsamiq</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Photoshop</span></div>
                </div>
              </div>

              {/* Deuxième colonne */}
              <div className="text-center sm:text-left">
                <strong className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Back end</strong>
                <div className="pt-6">
                  <div className="flex justify-center sm:justify-between"><span>NodeJS</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>NestJS</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>TypeScript</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Php</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Java EE</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>PostgreSQL</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>MySQL</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>SQL Server</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>Sécurité Web et Web Mobile</span></div>
                </div>

                <div className="pt-6">
                  <strong className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">Modélisation & Conception</strong>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>UML (Unified Modeling Language)</span></div>
                </div>
              </div>

              {/* Troisième colonne */}
              <div className="text-center sm:text-left">
                <strong className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">Web Services & APIs</strong>
                <div className="pt-6">
                  <div className="flex justify-center sm:justify-between"><span>Firebase</span></div>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>APIs REST</span></div>
                </div>

                <div className="pt-6">
                  <strong className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">Versioning</strong>
                  <div className="mt-2 flex justify-center sm:justify-between"><span>GitHub</span></div>
                </div>

                {/* Lien vers la page Skills */}
                <div className="relative left-8 right-0 mt-8 mr-8">
                  <a href="/skills#skills" className="text-[#4d94ff] hover:text-navLinkHover font-medium flex items-center justify-end gap-2">
                    Niveaux de compétences estimés (Auto-évaluation)
                    <span>➡️</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

{/*➡️*/ }
