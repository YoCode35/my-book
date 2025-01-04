"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-navText" : "text-[#3d5b79]";

  return (
    <>
      <nav className="absolute top-3 left-0 w-full flex justify-center z-10">
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:max-w-[900px] px-2 py-2 bg-[rgba(1,22,39,0.6)] rounded-full border border-gray-800 flex justify-between items-center">
          <div className="text-white font-orbitron text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            Yoann GREGOIRE
          </div>

          {/* Icône Sandwich (Hamburger) sur les petits écrans */}
          <div className="lg:hidden flex items-center" style={{ transform: 'translateX(-10px)' }}>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <FiMenu size={30} />
            </button>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex space-x-4">
            {[ 
              { href: "/", label: "Accueil" },
              { href: "/about", label: "À propos" },
              { href: "/portfolio", label: "Portfolio" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-6 py-2 text-navLinkInactive hover:text-navLinkHover ${isActive(href) === "text-navText"
                    ? "border-b-2 border-yellow-500"
                    : ""} ${isActive(href)}`}
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
                className={`px-6 py-2 rounded-full text-white hover:bg-[rgba(128,0,128,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                  pathname === "/contact"
                    ? "bg-yellow-500"
                    : "bg-[rgba(128,0,128,0.3)]"
                }`}
              >
                Me contacter
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-0 left-1/2 transform -translate-x-1/2 w-[70%] max-w-[400px] bg-[rgba(1,22,39,0.8)] py-4 px-6 rounded-lg shadow-lg space-y-4 z-20"
          style={{ backdropFilter: "blur(8px)" }}
        >
          {[
            { href: "/", label: "Accueil" },
            { href: "/about", label: "À propos" },
            { href: "/portfolio", label: "Portfolio" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)} // Fermeture du menu au clic
              className={`block text-center px-4 py-2 rounded-md text-navLinkInactive hover:text-navLinkHover ${isActive(href)}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact">
            <button
              onClick={() => setMenuOpen(false)} // Fermeture du menu lorsque "Me contacter" est cliqué
              className="block w-[150px] mx-auto px-4 py-2 mt-6 rounded-full bg-[rgba(128,0,128,0.3)] text-white hover:bg-[rgba(128,0,128,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Me contacter
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
