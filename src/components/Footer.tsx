import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { FaSignInAlt } from "react-icons/fa"; // Ajoute l'icône de connexion

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
                      shadow-[0_0_20px_0_rgba(0,0,0,1)]"
    >
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '10px 10px'
      }}></div>

      <p className="relative 
                    z-10 
                    text-[#2d3748] 
                    text-sm sm:text-base md:text-lg
                    font-orbitron"
      >© 2025 Yoann GREGOIRE. Tous droits réservés.</p>

      {/* Conteneur pour les icônes à droite */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-4 z-20">
        {/* Lien LinkedIn */}
        <a href="https://www.linkedin.com/in/yoann-gregoire/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white text-2xl hover:text-gray-400 transition-colors cursor-pointer"
        >
          <FaLinkedin />
        </a>

        {/* Lien GitHub */}
        <a href="https://github.com/YoCode35"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white text-2xl hover:text-gray-400 transition-colors cursor-pointer"
        >
          <FaGithub />
        </a>

        {/* Lien Connexion 
        <a href="pages/login" 
           className="text-white text-2xl hover:text-gray-400 transition-colors cursor-pointer"
        >
          <FaSignInAlt />
        </a>*/}
      </div>
    </footer>
  );
}
