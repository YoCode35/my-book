"use client"; // Directive pour indiquer un composant client

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Utilisation de usePathname pour obtenir le chemin actuel
import Image from 'next/image';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi'; // Import de l'icône hamburger
import '../app/globals.css';
import { FcDownload } from "react-icons/fc";

export default function Navbar() {
  const pathname = usePathname(); // Utilisation de usePathname pour récupérer le chemin actuel
  const [menuOpen, setMenuOpen] = useState(false); // État pour afficher/masquer le menu

  // Fonction pour déterminer si le lien est actif
  const isActive = (path: string) =>
    pathname === path ? 'text-navText' : 'text-[#3d5b79]';

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
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#3d5b79] font-rubik font-light tracking-wider z-10 text-left">
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
        <span className="text-white font-clash-display font-light sm:text-base">CV</span>
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
        <span className="text-white font-clash-display font-light text-xl">CV</span>
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

      <div className="absolute top-3 left-0 w-full flex justify-center z-10">
        <div className="w-full max-w-[900px] px-2 py-2 bg-[rgba(1,22,39,0.6)] rounded-full border border-gray-800 flex justify-between items-center">
          <div className="text-white font-orbitron text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-bold ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            Yoann GREGOIRE
          </div>

          {/* Icône Sandwich (Hamburger) sur les petits écrans */}
          <div className="lg:hidden flex items-center"> {/* Ajout de flex et items-center ici */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <HiMenu size={30} />
            </button>
          </div>

          {/* Menu desktop */}
          <ul className="hidden lg:flex space-x-4">
            {[
              { href: "/", label: "Accueil" },
              { href: "/about", label: "À propos" },
              { href: "/portfolio", label: "Portfolio" }
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-6 py-2 text-navLinkInactive hover:text-navLinkHover ${isActive(href) === 'text-navText' ? 'border-b-2 border-yellow-500' : ''
                    } ${isActive(href)}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bouton "Me contacter" Desktop */}
          <div className="ml-4 hidden lg:block">
            <Link href="/contact">
              <button
                className={`px-6 py-2 rounded-full text-white hover:bg-[rgba(128,0,128,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-300 ${pathname === '/contact' ? 'bg-yellow-500' : 'bg-[rgba(128,0,128,0.3)]'
                  }`}
              >
                Me contacter
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] bg-[rgba(1,22,39,0.8)] py-4 px-6 rounded-lg shadow-lg space-y-4 z-20"
          style={{ backdropFilter: "blur(8px)" }}
        >
          {[
            { href: "/", label: "Accueil" },
            { href: "/about", label: "À propos" },
            { href: "/portfolio", label: "Portfolio" }
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-center px-4 py-2 rounded-md text-navLinkInactive hover:text-navLinkHover ${isActive(href)}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact">
            <button className="block w-[150px] mx-auto px-4 py-2 mt-6 rounded-full bg-[rgba(128,0,128,0.3)] text-white hover:bg-[rgba(128,0,128,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-300">
              Me contacter
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
