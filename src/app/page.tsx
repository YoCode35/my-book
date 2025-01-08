import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/img/colored_spots.png')] bg-[size:400%] sm:bg-[size:400%] md:bg-[size:150%] lg:bg-[size:100%] bg-[position:center_15%] flex flex-col items-center min-h-screen pb-16">
      <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.1rem] leading-relaxed text-shadow text-center mt-0 mb-32 italic font-rubik font-light px-8">
        &quot;Explorez ici une sélection de mes travaux les plus significatifs. <br />Chaque projet reflète mon engagement, mes compétences et les défis que j’ai relevés.&quot;
      </p>

      <div style={{ height: '60px' }}></div>
      
      <div
        id="about-me"
        className="flex justify-center items-start h-[calc(100vh+20rem)] sm:h-[calc(100vh+15rem)] md:h-[calc(100vh+10rem)]"
      >
        <div className="relative">
          {/* Image */}
          <Image
            src="/img/img_a-propos.png"
            alt="À propos"
            width={300}
            height={280}
            className="object-contain mx-auto sm:w-[400px] sm:h-[374px] sm:mr-[10rem] md:mr-[50rem]"
          />

          {/* Titre */}
          <h1 className="absolute top-[0%] sm:top-[15%] md:top-[15%] left-[10%] sm:left-[30%] md:left-[30%] transform -translate-y-1/2 text-[3rem] sm:text-[4rem] md:text-[5rem] leading-tight text-shadow text-left">
            À propos<br />de moi
            <a href="/about#about" className="relative group">
              <span className="inline-block mt-[-1rem] sm:mt-0 md:mt-0 ml-12 sm:ml-24 md:ml-24 text-pink-500">➜</span>
              {/* Info bulle */}
              <span className="absolute top-0 left-full ml-2 px-4 py-2 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap">
                + d&apos;infos
              </span>
            </a>
          </h1>

          {/* Paragraphe */}
          <p className="paragraph-custom mt-8 sm:mt-8 md:mt-0 absolute md:top-[60%] md:left-[65%] md:transform md:-translate-x-1/2 md:max-w-xl text-justify sm:text-left max-w-full sm:max-w-[80%] md:max-w-xl text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose mb-16 sm:mb-24">
            <span className="mb-2 block break-words whitespace-normal md:whitespace-nowrap">
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
