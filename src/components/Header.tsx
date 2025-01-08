"use client";

//import { useEffect } from 'react'
import { useState } from 'react'
import Image from "next/image";
import "../app/globals.css";
import { FcDownload } from "react-icons/fc";
import Navbar from "./Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="header" className="relative bg-transparent flex flex-col items-center justify-center">
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        playsInline
        loop
        muted
        className=" absolute
                    top-0 left-0
                    w-full
                    h-[595px] lg:h-full
                    object-cover
                    z-0"
      >
        <source src="/img/universe.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-5"></div>

      {/* Traits obliques à gauche */}
      <div className="absolute left-0 top-0 w-[50px] h-[595px] lg:h-[490px] bg-transparent z-10">
        <div className="w-[50px] h-[3px] bg-[#4d94ff] rotate-45 origin-left mt-20 lg:mt-48"></div>
        <div className="w-[50px] h-[3px] bg-[#4d94ff] rotate-45 origin-left mt-8 lg:mt-9"></div>
        <div className="w-[50px] h-[3px] bg-[#4d94ff] rotate-45 origin-left mt-8 lg:mt-9"></div>
        <div className="w-[50px] h-[3px] bg-[#4d94ff] rotate-45 origin-left mt-8 lg:mt-9"></div>
        <div className="w-[50px] h-[3px] bg-[#4d94ff] rotate-45 origin-left mt-8 lg:mt-9"></div>
      </div>

      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Effets supplémentaires (gradient & radial) */}
      <div
        className="absolute inset-0 z-5"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(0, 0, 0, 0.3) 20%,
              rgba(0, 0, 0, 1) 100%
            ),
            radial-gradient(rgba(255, 255, 255, 0.1) calc(20vw / 300), transparent calc(20vw / 200))
          `,
          backgroundSize: `100% 100%, calc(35vw / 80) calc(35vw / 80)`,
        }}
      ></div>

      <div className="relative
                      z-10
                      flex flex-col
                      lg:flex-row
                      items-center
                      justify-between
                      w-full
                      max-w-[1200px]
                      px-6
                      mr-4 sm:mr-6 md:mr-8
                      mt-16 lg:mt-20"
      >
        <div className="text-left
                        flex flex-col
                        items-start
                        justify-center
                        ml-4 md:ml-12 mt-8
                        lg:mt-0
                        relative"
        >
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl
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

          <div className="flex items-center justify-between w-full">
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

            {/* CV block for mobile */}
            <div className="lg:hidden relative flex justify-center items-center ml-4">
              <div className="w-[60px] sm:w-[70px]
                              h-[60px] sm:h-[70px]
                              bg-blue-500
                              rounded-full
                              z-20
                              flex flex-col
                              items-center
                              justify-center
                              space-y-0.1"
              >
                <FcDownload className="text-white sm:text-xl" />
                <span className="text-white font-clash-display font-semi-bold sm:text-base">CV</span>
              </div>
              <div className="w-[80px] sm:w-[90px]
                              h-[80px] sm:h-[90px] 
                              bg-blue-500
                              bg-opacity-20
                              rounded-full
                              absolute
                              z-10"
              />
              <div className="w-[105px] sm:w-[115px]
                              h-[105px] sm:h-[115px]
                              bg-blue-500
                              bg-opacity-10
                              rounded-full
                              absolute
                              z-0" />
              <a
                href="/docs/CV-YoannGREGOIRE_(CDA).pdf"
                download="CV-YoannGREGOIRE_(CDA).pdf"
                className="absolute inset-0 z-30"
                aria-label="Télécharger mon CV"
              />
            </div>
          </div>

          <p className="text-[#5385b7]
                        text-sm sm:text-sm md:text-base
                        italic
                        mt-8 lg:mt-8 z-10
                        font-rubik font-light
                        text-left
                        pl-4 md:pl-8
                        border-l-4
                        border-[#4d94ff]"
          >
            &quot;Transformer et enrichir l&apos;expérience utilisateur...&quot;
          </p>
        </div>

        {/* CV block for desktop */}
        <div className="hidden
                        lg:flex
                        relative
                        justify-center
                        items-center
                        lg:mt-0"
        >
          <div className="w-[80px]
                          h-[80px]
                          bg-blue-500
                          rounded-full
                          z-20
                          flex flex-col
                          items-center
                          justify-center
                          space-y-0.1"
          >
            <FcDownload className="text-white text-3xl" />
            <span className="text-white font-clash-display font-semi-bold text-xl">CV</span>
          </div>
          <div className="w-[100px] h-[100px] bg-blue-500 bg-opacity-20 rounded-full absolute z-10" />
          <div className="w-[125px] h-[125px] bg-blue-500 bg-opacity-10 rounded-full absolute z-0" />
          <a
            href="/docs/CV-YoannGREGOIRE_(CDA).pdf"
            download="CV-YoannGREGOIRE_(CDA).pdf"
            className="absolute inset-0 z-30"
            aria-label="Télécharger mon CV"
          />
        </div>

        {/* Image */}
        <div className="relative
                        w-[300px] lg:w-[350px]
                        h-[350px] lg:h-[400px]
                        mt-8 lg:mt-0
                        lg:ml-8 lg:ml-0 xl:ml-0"
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
