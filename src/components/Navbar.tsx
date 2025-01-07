"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi"; // Importer l'icône de la flèche

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  // Fonction pour vérifier la position du scroll
  const checkScroll = () => {
    if (typeof window !== "undefined") {
      setScrollTop(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    }
  };

  useEffect(() => {
    setIsClient(true);
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const isActive = (path: string) =>
    pathname === path ? "text-navText" : "text-[#3d5b79]";

  return (
    <>
      {isClient && (
        <nav
          className={`fixed top-0 left-0 w-full flex justify-center z-40 ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-60'}`}
          style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '40' }}
        >
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
            <ul className="hidden lg:flex space-x-4 list-none">
              {[
                { href: "/", label: "Accueil" },
                ...(pathname === "/"
                  ? [
                    {
                      href: "#about-me",
                      label: "À propos",
                    },
                  ]
                  : [
                    pathname !== "/about" && {
                      href: "/about#about-me",
                      label: "À propos",
                    },
                  ].filter(Boolean)
                ),
                ...(pathname !== "/portfolio"
                  ? [
                    {
                      href: "/portfolio#portfolio",
                      label: "Portfolio",
                    },
                  ]
                  : []),
              ].filter((item): item is { href: string; label: string } => item !== false)
                .map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`px-6 py-2 text-navLinkInactive hover:text-navLinkHover ${isActive(href) === "text-navText" ? "border-b-2 border-yellow-500" : ""} ${isActive(href)}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Bouton "Me contacter" Desktop */}
            {pathname !== "/contact" && (
              <div className="ml-4 hidden lg:block">
                <Link href="/contact#contact-form">
                  <button
                    className={`px-6 py-2 rounded-full text-white hover:bg-[rgba(128,0,128,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-300 ${pathname === "/contact" ? "bg-yellow-500" : "bg-[rgba(128,0,128,0.3)]"}`}
                  >
                    Me contacter
                  </button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Flèche qui apparaît après avoir scrollé */}
      {isScrolled && (
        <div className="fixed bottom-10 right-10 z-30">
          <Link href="#header">
            <div className="bg-blue-500 p-4 rounded-full text-white shadow-lg hover:bg-blue-600">
              <FiArrowUp size={24} />
            </div>
          </Link>
        </div>
      )}

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-[70%] max-w-[400px] bg-[rgba(1,22,39,0.8)] py-4 px-6 rounded-lg shadow-lg space-y-4 z-50 list-none"
          style={{
            top: `${scrollTop + 50}px`,
            backdropFilter: "blur(8px)",
          }}
        >
          {[
            { href: "/", label: "Accueil" },
            ...(pathname === "/"
              ? [
                {
                  href: "#about-me",
                  label: "À propos",
                },
              ]
              : [
                pathname !== "/about" && {
                  href: "/about#about-me",
                  label: "À propos",
                },
              ].filter(Boolean)
            ),
            ...(pathname !== "/portfolio"
              ? [
                {
                  href: "/portfolio#portfolio",
                  label: "Portfolio",
                },
              ]
              : []),
          ].filter((item): item is { href: string; label: string } => item !== false).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block text-center px-4 py-2 rounded-md text-navLinkInactive hover:text-navLinkHover ${isActive(href)}`}
            >
              {label}
            </Link>
          ))}

          {pathname !== "/contact" && (
            <Link href="/contact#contact-form">
              <button
                onClick={() => setMenuOpen(false)}
                className="block w-[150px] mx-auto px-4 py-2 mt-6 rounded-full bg-[rgba(128,0,128,0.3)] text-white hover:bg-[rgba(128,0,128,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                Me contacter
              </button>
            </Link>
          )}
        </div>
      )}
    </>
  );
}
