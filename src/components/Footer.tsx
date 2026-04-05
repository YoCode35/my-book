import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa"; // Ajoute l'icône de connexion
export default function Footer() {
  return (
    <footer className="bg-black
                      text-white 
                      text-center 
                      p-4 
                      fixed 
                      bottom-0 
                      left-0 
                      w-full 
                      z-10 
                      shadow-[0_0_20px_0_rgba(0,0,0,1)]
                      4xl:h-[100px]"
    >
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '10px 10px'
      }}></div>
{/* Conteneur du texte avec disposition responsive */}
<div className="relative 
                z-10 
                flex 
                flex-col sm:flex-row 
                sm:space-x-2 sm:items-center 
                justify-center h-full"
>
  <span className=" text-[#2d3748] text-xs sm:text-base md:text-lg 2xl:text-xl 
                    font-orbitron 
                    text-left 
                    text-xs 2xl:text-base 4xl:text-3xl"
  >
    © {new Date().getFullYear()} Yoann GREGOIRE.
  </span>
  <span className=" text-[#2d3748] 
                    font-orbitron 
                    text-left 
                    text-xxs sm:text-xxxs md:text-xxs 2xl:text-xs 4xl:text-3xl"
  >
    Tous droits réservés.
  </span>
</div>
      {/* Conteneur pour les icônes à droite */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-4 z-20">
        {/* Lien LinkedIn */}
        <a href="https://www.linkedin.com/in/yoann-gregoire/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white 
                      text-2xl 2xl:text-4xl 4xl:text-6xl 
                      hover:text-gray-400 
                      transition-colors 
                      cursor-pointer"
        >
          <FaLinkedin />
        </a>
        {/* Lien GitHub */}
        <a href="https://github.com/YoCode35"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white 
                      text-2xl 2xl:text-4xl 4xl:text-6xl 
                      hover:text-gray-400 
                      transition-colors 
                      cursor-pointer"
        >
          <FaGithub />
        </a>
        {/* Lien de connexion */}
        <Link href="/login#form" 
              className=" text-white 
                          text-2xl 2xl:text-4xl 4xl:text-6xl 
                          hover:text-gray-400 
                          transition-colors 
                          cursor-pointer" 
              title="Espace privé">
          <FaSignInAlt />
        </Link>
      </div>
    </footer>
  );
}