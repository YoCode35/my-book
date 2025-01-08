import Image from 'next/image';

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
        id="about-me"
        className=" flex
                    justify-center
                    items-start
                    h-[calc(100vh+20rem)]
                    sm:h-[calc(100vh+15rem)]
                    md:h-[calc(100vh+10rem)]
                    md:pt-16"
      >

          {/* Titre */}
          <h1 className=" relative
                          z-10
                          sm:top-[-5%] md:top-[0%] lg:top-[-10%]
                          left-[10%] sm:left-[20%] md:left-[10%] lg:left-[-10%]
                          text-[3rem] sm:text-[4rem] md:text-[5rem]
                          leading-tight
                          text-shadow
                          text-left">
            À propos<br />de moi
            <a href="/about#about" className="relative group">
              <span className=" inline-block 
                                mt-[-1rem] sm:mt-0 md:mt-0
                                ml-12 sm:ml-24 md:ml-24
                                text-pink-500">➜
              </span>
              {/* Info bulle */}
              <span className="absolute top-0 left-full ml-2 px-4 py-2 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap">
                + d&apos;infos
              </span>
            </a>
          </h1>

          <div className="absolute">
            {/* Image */}
            <Image
              src="/img/img_a-propos.png"
              alt="À propos"
              width={300}
              height={280}
              className=" sm:w-[400px]
                          sm:h-[374px]
                          sm:mr-[10rem] md:mr-[50rem]
                          ml-[5%]"
          />

            {/* Paragraphe */}
            <p className="paragraph-custom
                          w-full sm:w-[100%] md:w-[100%] lg:w-[60%]
                          lg:absolute
                          lg:top-[40%]
                          lg:left-[40%]
                          px-6 sm:px-8 md:px-12
                          mt-6 sm:mt-8 md:mt-12             
            ">
            <span className="mb-2 block break-words whitespace-normal sm:whitespace-normal md:whitespace-normal max-w-full">
              Le développement logiciel : Une véritable <span className="text-[1.2rem] sm:text-[1.5rem]">vocation</span> qui m&apos;anime au quotidien !
            </span>
            <br />
            Je m&apos;engage pleinement dans la conception d&apos;outils novateurs, performants et réellement utiles, pensés pour transformer et enrichir l&apos;expérience utilisateur. Mon objectif est de mettre la technologie au service de solutions concrètes, capables d&apos;améliorer la vie quotidienne.
          </p>
        </div>
      </div>
    </div>
  );
}
