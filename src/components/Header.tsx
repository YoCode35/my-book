"use client";

import Image from 'next/image';
import { useState } from 'react';
import '../app/globals.css';
import { FcDownload } from "react-icons/fc";
import Navbar from './Navbar';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="relative bg-transparent h-[595px] lg:h-[490px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
        linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        ),
        radial-gradient(rgba(255, 255, 255, 0.1) calc(20vw / 300), transparent calc(20vw / 200))
        `,
        backgroundSize: `100% 100%, calc(35vw / 80) calc(35vw / 80)`,
      }}
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] px-6 mr-4 sm:mr-6 md:mr-8 mt-16 lg:mt-20">
        <div className="text-left flex flex-col items-start justify-center ml-4 mt-16 lg:mt-0 relative">
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#3d5b79] font-rubik font-bold tracking-wider z-10 text-left">
        <span>Concepteur & Développeur</span>
        <br />
        <span>d&apos;applications Fullstack</span>
          </h1>

          <div className="flex items-center justify-between w-full">
        <p className="text-white font-orbitron text-lg sm:text-xl md:text-2xl mt-2 z-10 text-left">
          Yoann
          <br />
          GREGOIRE
        </p>

        {/* CV block for mobile */}
        <div className="lg:hidden relative flex justify-center items-center ml-4">
          <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-blue-500 rounded-full z-20 flex flex-col items-center justify-center space-y-1">
        <FcDownload className="text-white sm:text-xl" />
        <span className="text-white font-rubik font-light sm:text-base">CV</span>
          </div>
          <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] bg-blue-500 bg-opacity-30 rounded-full absolute z-10" />
          <div className="w-[105px] h-[105px] sm:w-[115px] sm:h-[115px] bg-blue-500 bg-opacity-20 rounded-full absolute z-0" />
          <a
        href="/path/to/CV-YoannGREGOIRE_(CDA).pdf"
        download="CV-YoannGREGOIRE_(CDA).pdf"
        className="absolute inset-0 z-30"
        aria-label="Télécharger mon CV"
          />
        </div>
          </div>

            <p className="text-[#3a5977] text-sm sm:text-sm md:text-base italic mt-12 lg:mt-8 z-10 font-rubik font-light text-left pl-4 border-l-4 border-[#4d94ff]">
          &quot;Transformer et enrichir l&apos;expérience utilisateur...&quot;
            </p>
        </div>

        {/* CV block for desktop */}
        <div className="hidden lg:flex relative justify-center items-center lg:mt-0">
          <div className="w-[90px] h-[90px] bg-blue-500 rounded-full z-20 flex flex-col items-center justify-center space-y-1">
        <FcDownload className="text-white text-3xl" />
        <span className="text-white font-rubik font-light text-xl">CV</span>
          </div>
          <div className="w-[110px] h-[110px] bg-blue-500 bg-opacity-30 rounded-full absolute z-10" />
          <div className="w-[135px] h-[135px] bg-blue-500 bg-opacity-20 rounded-full absolute z-0" />
          <a
        href="/path/to/CV-YoannGREGOIRE_(CDA).pdf"
        download="CV-YoannGREGOIRE_(CDA).pdf"
        className="absolute inset-0 z-30"
        aria-label="Télécharger mon CV"
          />
        </div>

        {/* Image */}
        <div className="relative w-[300px] h-[350px] mt-8 lg:mt-0 lg:w-[350px] lg:h-[400px] lg:ml-8 lg:ml-12 xl:ml-16">
          <Image
            src="/img/moi.png"
            alt="Photo Identité"
            layout="fill"
            objectFit="contain"
            className="rounded-md shadow-lg"
          />
        </div>

      </div>

      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}