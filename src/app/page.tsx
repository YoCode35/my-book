import Image from 'next/image';
import DotsRectangle from "../components/DotsRectangle";
import { ImCross } from "react-icons/im"
import Link from "next/link";

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
                    mb-12 sm:mb-4 md:mb-8 lg:mb-8
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
                    mt-20px
                    mb-36 sm:mb-32 md:mb-64 lg:mb-40px
                    font-rubik font-bold 
                    px-8"
      >
        [EN COURS DE DEVELOPPEMENT]
      </p>

      {/* About Section */}
      <div id="abouthome" className=" lg:flex                                      
                                      w-full h-[500px] sm:h-[550px] md:h-[550px] lg:h-0px xl:h-0px]
                                      md:pt-0"
      >

        <div className="relative">
          <Image
            src="/img/img_a-propos.png"
            alt="À propos"
            width={500}
            height={500}
            className=" w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] 
                        h-auto
                        mr-[5rem] sm:mr-[10rem] md:mr-[50rem] lg:mr-[50rem] 
                        ml-[0%] sm:ml-[10%] md:ml-[5%] lg:ml-[0%]"
            style={{
              maxWidth: "500px",
            }}
          />

          <h2 className=" absolute
                          section-title
                          z-10
                          top-[0] sm:top-[0] md:top-[0] lg:top-[25]
                          left-[30%] sm:left-[35%] md:left-[40%] lg:left-[30%]                          
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
              <span className=" top-0 left-full 
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
          </h2>

          {/* Paragraph */}
          <p className="paragraph-custom
                        w-full sm:w-full md:w-full lg:w-[65%]
                        relative sm:relative md:relative lg:absolute
                        center
                        justify
                        lg:top-[40%]
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
                      mt-8 sm:mt-8 md:mt-8 lg:mt-[50%] xl:mt-[25%] xl:mt-[35%]
                      self-center
                      ml-auto"
          rows={3}
          dotsPerRow={10}
          dotColor="#fff000"
        />
      </div>

      {/* SEPARATOR */}
      <div className="min-h-[300px] sm:min-h-[0px] md:min-h-[225px] lg:min-h-[100px] xl:min-h-[50px]"></div>

      {/* Skills Section */}
      <div className="flex flex-col justify-start items-center">
        {/* Conteneur flex pour aligner le titre et la flèche */}
        <div className="flex items-center">
          <h2 id="skills" className="section-title leading-tight">Skills</h2>

          {/* Flèche */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="section-arrow ml-16 text-colorChart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </div>

        <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="paragraph-custom max-w-4xl w-full mx-auto relative top-[40px] md:top-[40px] lg:top-[50px] text-left justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-24 sm:pb-96 md:pb-48 lg:pb-48">
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
                    className=" text-[#4d94ff] 
                                hover:text-navLinkHover 
                                font-medium 
                                flex 
                                items-center 
                                justify-end 
                                gap-1 
                                group"
                  >
                    Niveaux de compétences estimés (Auto-évaluation)
                    <span className=" transition-all 
                                      group-hover:bg-yellow-500 
                                      group-hover:text-white 
                                      group-hover:rounded 
                                      p-1
                                      -ml-1"
                    >
                      {/* Nouvelle flèche SVG */}
                      <svg className="w-5 h-5 colorChart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="min-h-[50px] sm:min-h-[50px] md:min-h-[50px] lg:min-h-[50px] xl:min-h-[0px]"></div>

      {/* My Projects Section */}
<div className="flex flex-col 
                justify-start 
                items-center 
                relative 
                w-full 
                mb-96"
>
  <h2 id="myprojects" className="section-title 
                                leading-tight 
                                lg:ml-80 
                                lg:text-right">
    Mes projets
  </h2>

  <div className="mt-4 relative w-full">
    <ImCross 
      className="text-colorChart 
                text-6xl sm:text-6xl md:text-10xl 
                absolute 
                right-4 sm:right-8 md:right-16 lg:right-24 
                top-[-20px] 
                z-10"
    />
  </div>

  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between space-x-4">
    <div className="relative w-full">
      <Image
        src="/img/ref_mytodolist.png"
        alt="Image de mon projet d'application MyTodoList"
        width={789}
        height={360}
        className="w-full 
                  max-w-2xl 
                  h-auto mx-auto 
                  w-[80%] sm:w-[90%] md:w-[90%] lg:w-[110%] xl:w-[120%] 2xl:w-[120%] 
                  px-5 sm:px-8 md:px-16 z-1"
        priority
        style={{
          maxWidth: "789px",
        }}
      />

      <DotsRectangle
        className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%] 
                  max-w-[250px] 
                  mt-36 sm:mt-6 md:mt-8 lg:mt-10 
                  absolute left-2 sm:left-4 md:left-6 lg:left-8"
        rows={3}
        dotsPerRow={10}
        dotColor="#fff000"
      />
    </div>

    <div className="flex flex-col items-center sm:items-start sm:pr-8">
      <h3 className="project-image-title">MyTodoList</h3>
      <p className="project-date-paragraph">Décembre 2024</p>

      <Link 
        href="/portfolio" 
        className="flex items-center 
                  mt-4 
                  text-[3vw] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.1rem] 
                  text-[#4d94ff]                          
                  hover:text-navLinkHover 
                  group">
        <span className="mr-2">+ d’infos</span>
        <svg 
          className="w-5 h-5 text-[#4d94ff] group-hover:text-navLinkHover" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
</div>

    </div>
  );
}
