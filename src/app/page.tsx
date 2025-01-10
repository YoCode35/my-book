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
                    mb-3 sm:mb-4 md:mb-8 lg:mb-8
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
                    mb-36 sm:mb-32 md:mb-64 lg:mb-64
                    font-rubik font-bold 
                    px-8"
      >
        [EN COURS DE DEVELOPPEMENT]
      </p>

      <div
        id="abouthome"
        className="flex items-start w-full
                  h-[calc(50vh+25rem)] sm:h-[calc(50vh+15rem)] md:h-[calc(60vh+10rem)] lg:h-[calc(70vh+10rem)]
                  md:pt-16"
      >

        <div className="relative">
          {/* Image */}
          <Image
            src="/img/img_a-propos.png"
            alt="À propos"
            width={300}
            height={280}
            className=" sm:w-[400px] md:w-[350px]
                        sm:h-[374px] md:h-[332px]
                        sm:mr-[10rem] md:mr-[50rem]
                        ml-[10%]"
          />

          {/* About Title */}
          <h1 className=" absolute
                          z-10
                          top-[-5%] sm:top-[-5%] md:top-[-20%] lg:top-[-25%]
                          left-[30%] sm:left-[20%] md:left-[30%] lg:left-[30%]
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
                        w-full sm:w-full md:w-[100%] lg:w-[65%]
                        relative sm:relative md:relative lg:absolute
                        center
                        justify
                        lg:top-[25%]
                        left-[0%] sm:left-[0%] md:left-[0%] lg:left-[50%]                          
                        px-12 sm:px-24 md:px-12
                        mt-6 sm:mt-8 md:mt-12             
            ">
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
        {/* DotsRectangle Components */}
        <DotsRectangle
          className=" w-full
                      w-[40%] sm:w-[40%] md:w-[20%] lg:w-[20%]
                      absolute sm:absolute md:absolute lg:relative
                      top-[240%] sm:top-[250%] md:top-[270%] lg:top-80
                      right-0 sm:right-0 md:right-0 lg:right-0
                      mt-6 sm:mt-8 md:mt-12 bg-transparent
                      h-[55px]"
          rows={3}
          dotsPerRow={10}
          dotColor="#fff000"
        />
      </div>

      {/* SEPARATEUR */}
      <div className="h-0 sm:h-80 md:h-48 lg:h-32 xl:h-32"></div>
      {/* SEPARATEUR */}

      {/* Skills Title */}
      <div id="skills" className="h-[calc(50vh+10rem)] sm:h-[calc(50vh+60rem)] md:h-[calc(50vh+60rem)] lg:h-[calc(70vh+10rem)] flex-1 ml-8">
      <h1 className="relative z-10 text-[3rem] sm:text-[4rem] md:text-[5rem] leading-tight text-shadow text-center flex items-center justify-center top-[-70px] sm:top-[-65px] md:top-[50px] lg:top-[-65px] mx-auto">
  Skills
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-colorChart w-[8rem] h-[8rem] ml-4 sm:ml-6 md:ml-6 lg:ml-48 lg:mt-[1rem]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg>
</h1>


        <div className="flex justify-center">
  <div className="paragraph-custom max-w-4xl w-full mx-auto relative top-[-40px] md:top-[-50px] text-left justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-24 sm:pb-96 md:pb-96 lg:pb-96">
      {/* Première colonne */}
      <div className="text-center sm:text-left">
        <strong>Front end</strong>
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
          <strong>Prototypage et Design</strong>
          <div className="mt-2 flex justify-center sm:justify-between"><span>Figma</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>Balsamiq</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>Photoshop</span></div>
        </div>
      </div>

      {/* Deuxième colonne */}
      <div className="text-center sm:text-left">
        <strong>Back end</strong>
        <div className="pt-6">
          <div className="flex justify-center sm:justify-between"><span>NodeJS</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>NestJS</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>TypeScript</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>Php</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>Java (Java EE)</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>PostgreSQL</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>MySQL</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>SQL Server</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>Sécurité Web et Web Mobile</span></div>
        </div>

        <div className="pt-6">
          <strong>Modélisation et Conception</strong>
          <div className="mt-2 flex justify-center sm:justify-between"><span>UML (Unified Modeling Language)</span></div>
        </div>
      </div>

      {/* Troisième colonne */}
      <div className="text-center sm:text-left">
        <strong>Web Services et APIs</strong>
        <div className="pt-6">
          <div className="flex justify-center sm:justify-between"><span>Firebase</span></div>
          <div className="mt-2 flex justify-center sm:justify-between"><span>APIs REST</span></div>
        </div>

        <div className="pt-6">
          <strong>Versioning</strong>
          <div className="mt-2 flex justify-center sm:justify-between"><span>GitHub</span></div>
        </div>

        {/* Lien vers la page Skills */}
        <div className="relative right-0 mt-8 mr-8">
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
