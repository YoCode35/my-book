"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../app/globals.css";
import { FcDownload } from "react-icons/fc";
import Navbar from "./Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0); // État pour la largeur de la fenêtre

  useEffect(() => {
    // Mettre à jour la largeur de la fenêtre après le montage du composant
    setWindowWidth(window.innerWidth);

    // Ajouter un gestionnaire d'événements pour mettre à jour la largeur à chaque redimensionnement
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyer l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Ce code s'exécute une seule fois après le montage du composant

  return (
    <div id="header" className="relative
                                bg-transparent 
                                flex flex-col 
                                items-center 
                                justify-center"
    >
      {/* My Universe Title */}
      <h1 className=" absolute
                      z-10 
                      top-[0] left-[0] 
                      text-[3rem] sm:text-[4rem] md:text-[5rem] 
                      leading-tight 
                      text-left 
                      font-rubik 
                      font-bold 
                      text-[rgba(68,90,120,0.55)]">
        My universe
      </h1>

      {/* Vidéo en arrière-plan */}
      <video autoPlay playsInline loop muted className="absolute 
                                                        top-0 
                                                        left-0 
                                                        w-full 
                                                        h-[595px] lg:h-full 
                                                        object-cover 
                                                        z-0"
      >
        <source src="/img/universe.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Traits obliques à gauche */}
      <div className="absolute 
                      left-0 
                      top-0 w-[50px] 
                      h-[595px] lg:h-[490px] 
                      bg-transparent 
                      z-10"
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
                          ${index === 0 ? "mt-20 lg:mt-44" : "mt-8 lg:mt-9"}`
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
            ? '100% 100%, calc(35vw / 25) calc(35vw / 25)'  // Points plus gros sur mobile
            : '100% 100%, calc(35vw / 80) calc(35vw / 80)',  // Points plus petits sur desktop
        }}
      ></div>

      <div
        className=" relative 
                    z-10 
                    flex flex-col lg:flex-row 
                    items-center 
                    justify-between 
                    w-full max-w-[1200px] 
                    px-6
                    mr-4 sm:mr-6 md:mr-8 mt-16 lg:mt-20"
      >
        {/* Left Text Block */}
        <div className="text-left 
                        flex flex-col 
                        items-start 
                        justify-center 
                        ml-4 md:ml-12 lg:ml-24 
                        mt-8 lg:mt-0 
                        relative"
        >
          <h1 className=" text-lg 
                          sm:text-lg md:text-xl lg:text-2xl 
                          text-[#5385b7] 
                          font-rubik 
                          font-normal 
                          tracking-wider 
                          z-10 
                          text-left"
          >
            <span>Concepteur & Développeur</span>
            <br />
            <span>d&apos;applications Fullstack</span>
          </h1>

          <div className="flex 
                          items-center 
                          justify-between 
                          w-full"
          >
            <p className="text-white
                          font-orbitron 
                          text-lg sm:text-xl md:text-2xl 
                          mt-2 
                          z-10 
                          text-left"
            >
              Yoann
              <br />
              GREGOIRE
            </p>
          </div>

          {/* Citation */}
          <p
            className=" text-[#5385b7] 
                        text-sm sm:text-sm md:text-base 
                        italic 
                        mt-8 lg:mt-8 
                        z-10
                        font-rubik 
                        font-light 
                        text-left
                        pl-4 md:pl-8 border-l-4 
                        border-[#4d94ff]"
          >
            &quot;Transformer et enrichir l&apos;expérience utilisateur...&quot;
          </p>
        </div>

        {/* CV Block */}
        <div
          className=" absolute sm:absolute md:absolute lg:relative 
                      flex 
                      justify-center 
                      items-center 
                      top-[80px] sm:top-[70px] md:top-[80px] lg:top-[0] 
                      right-[5%] sm:right-[5%] md:right-[5%] lg:right-[0] 
                      mx-4 lg:mx-0"
        >
          <div
            className=" w-[60px] sm:w-[70px] lg:w-[80px] 
                        h-[60px] sm:h-[70px] lg:h-[80px]
                        bg-blue-500 
                        rounded-full 
                        z-20 flex 
                        flex-col 
                        items-center 
                        justify-center 
                        space-y-0.1"
          >
            <FcDownload className="text-white 
                                   text-xl lg:text-3xl"
            />
            <span className=" text-white 
                              font-clash-display 
                              font-semi-bold 
                              sm:text-base lg:text-xl">
              CV
            </span>
          </div>
          <div className="absolute 
                          w-[80px] sm:w-[90px] lg:w-[100px] 
                          h-[80px] sm:h-[90px] lg:h-[100px] 
                          bg-blue-500 bg-opacity-20 
                          rounded-full 
                          z-10"
          />
          <div className="absolute
                          w-[105px] sm:w-[115px] lg:w-[125px] 
                          h-[105px] sm:h-[115px] lg:h-[125px] 
                          bg-blue-500 
                          bg-opacity-10 
                          rounded-full 
                          z-0"
          />
          <a
            href="/docs/CV-YoannGREGOIRE_(CDA).pdf"
            download="CV-YoannGREGOIRE_(CDA).pdf"
            className="absolute inset-0 z-30"
            aria-label="Télécharger mon CV"
          />
        </div>

        {/* Image Block */}
        <div className="relative 
                        w-[300px] lg:w-[350px] h-[350px] 
                        lg:h-[400px] 
                        mt-8 lg:mt-0 
                        lg:ml-8 lg:ml-0 
                        xl:ml-0"
        >
          <Image
            src="/img/moi.png"
            alt="Image de moi"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 684px) 100vw, 50vw"
            className="rounded-md shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
