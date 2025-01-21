"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FcDownload } from "react-icons/fc";
import Navbar from "./navbar/Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="header" className="relative
                                bg-transparent 
                                flex flex-col 
                                items-center 
                                justify-center
                                w-full"
    >

      {/* My Universe Title */}
      <h1 className=" absolute
                      z-10 
                      top-[0] left-[0] 
                      text-[3rem] sm:text-[3.2rem] md:text-[3.5rem] 
                      leading-tight 
                      text-left 
                      font-rubik font-bold 
                      text-[rgba(68,90,120,0.3)]">
        My universe
      </h1>

      {/* Vidéo en arrière-plan */}
      <video autoPlay playsInline loop muted className="absolute 
                                                        top-0 
                                                        left-0 
                                                        w-full 
                                                        h-[500px] md:h-[300px] lg:h-full 4xl:h-[500px]
                                                        object-cover 
                                                        z-0"
      >
        <source src="/img/universe.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Traits obliques à gauche */}
      <div className="absolute 
                      left-0 
                      top-0 
                      w-[50px]                       
                      bg-transparent 
                      z-1"
      >
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`w-[35px] sm:w-[50px] md:w-[60px] lg:w-[70px] 
                          h-[3px] 
                          bg-[#4d94ff] 
                          rotate-45 
                          origin-left 
                          ${index === 0 ? "mt-20 lg:mt-24" : "mt-8 lg:mt-9"}`
              }
            ></div>
          ))}
      </div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Gradient */}
      <div
        className="absolute inset-0 z-5"
        style={{
          backgroundImage: `linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(0, 0, 0, 0.3) 20%,
              rgba(0, 0, 0, 1) 100%
            ),
            radial-gradient(rgba(255, 255, 255, 0.1) ${windowWidth <= 640 ? 'calc(40vw / 300)' : 'calc(20vw / 300)'}, transparent ${windowWidth <= 640 ? 'calc(40vw / 100)' : 'calc(20vw / 200)'})`,
          backgroundSize: windowWidth <= 640
            ? '100% 100%, calc(35vw / 25) calc(35vw / 25)'
            : '100% 100%, calc(35vw / 80) calc(35vw / 80)',
        }}
      ></div>

      <div className="relative 
                      flex flex-col lg:flex-row                     
                      justify-between 
                      w-full
                      md:h-[300px] lg:h-[400px] 4xl:h-[500px]"
      >
        {/* Identity */}
        <div className="text-left 
                        flex flex-col 
                        items-start 
                        justify-center 
                        ml-12 sm:ml-20 lg:ml-24 
                        mt-20 lg:mt-24
                        sm:mr-6 md:mr-0 
                        relative lg:absolute"
        >
          <h1 className=" text-lg sm:text-[24px] md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 
                          text-[#5385b7] 
                          font-rubik font-normal 
                          tracking-wider 
                          z-1 
                          text-left"
          >
            <span className="block leading-[1.3]">Concepteur & Développeur</span>
            <span className="block leading-[1.3]">d’applications FullStack</span>
          </h1>

          <div className="flex 
                          items-center 
                          justify-between"
          >
            <p className="text-white
                          font-orbitron 
                          text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl  
                          mt-2 
                          z-1 
                          text-left"
            >
              <span className="block leading-[1.5]">Yoann</span>
              <span className="block leading-[1.5]">GREGOIRE</span>
            </p>
          </div>

          {/* Citation */}
          <p className="text-[#5385b7] 
                        text-sm sm:text-[18px] md:text-[16px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[30px] 
                        italic 
                        mt-16 sm:mt-8 md:mt-16 lg:mt-20                        
                        z-1
                        font-rubik 
                        font-light 
                        text-left
                        pl-2 sm:pl-2 md:pl-2
                        border-l-4 
                        border-[#4d94ff]"
          >
            &quot;Transformer et enrichir l&apos;expérience utilisateur...&quot;
          </p>

        </div>

        {/* CV Block */}
        <div className="absolute 
                        flex 
                        justify-start sm:justify-center 
                        items-center 
                        top-[160px] sm:top-[70px] md:top-[145px] lg:top-[170px] 4xl:top-[220px]
                        md:left-1/2 lg:left-1/2
                        transform md:-translate-x-1/2 lg:-translate-x-1/2                                           
                        right-[5%] sm:right-[5%] 
                        mx-4 lg:mx-0"
        >
          <div className="w-[60px] sm:w-[70px] lg:w-[80px] 4xl:w-[100px] 
                          h-[60px] sm:h-[70px] lg:h-[80px] 4xl:h-[100px]
                          bg-blue-500 
                          rounded-full 
                          flex 
                          flex-col 
                          items-center 
                          justify-center
                          z-20"
          >
            <FcDownload className=" text-white 
                                    text-[24px] lg:text-3xl 4xl:text-4xl
                                    z-20"
            />
            <span className=" text-white 
                              font-clash-display 
                              font-semi-bold 
                              text-[24px] sm:text-base sm:text-[24px] md:text-[24px] lg:text-[28px] 4xl:text-[32px]
                              transform scale-y-[0.7] 
                              tracking-[0.06em] 
                              mt-[-5px] sm:mt-[0] 4xl:mt-[10px]
                              z-20"
            >
              CV
            </span>
            <div className="absolute 
                            w-[80px] sm:w-[90px] lg:w-[100px] 4xl:w-[125px] 
                            h-[80px] sm:h-[90px] lg:h-[100px] 4xl:h-[125px]
                            bg-blue-500 bg-opacity-20 
                            rounded-full 
                            z-15"
            />
            <div className="absolute
                            w-[105px] sm:w-[115px] lg:w-[125px] 4xl:w-[160px]
                            h-[105px] sm:h-[115px] lg:h-[125px] 4xl:h-[160px]
                            bg-blue-500 
                            bg-opacity-10 
                            rounded-full 
                            z-10"
            />
          </div>
          <a
            href="/docs/CV-YoannGREGOIRE_(DevFullStack).pdf"
            download="CV-YoannGREGOIRE_(DevFullStack).pdf"
            className="absolute inset-0 z-30"
            aria-label="Télécharger mon CV"
          />
        </div>
      </div>
      {/* Image Block */}
      <div className="relative
                      w-[280px] h-[255px] md:w-[250px] md:h-[227px] lg:w-[350px] lg:h-[318px] 4xl:w-[500px] 4xl:h-[455px]
                      mt-4 md-0 lg:mt-0 
                      lg:ml-8 xl:ml-0
                      mx-auto lg:mx-0
                      md:absolute
                      md:top-0 
                      md:right-4 lg:right-8
                      md:mt-10 lg:mt-20 xl:mt-10                      
                      z-200"
      >
        <Image
          src="/img/moi.png"
          alt="Yoann GREGOIRE"
          layout="responsive"
          width={684}
          height={684}
          style={{ objectFit: "contain" }}
          className="rounded-md shadow-lg"
          priority
        />
      </div>

    </div>
  );
}
