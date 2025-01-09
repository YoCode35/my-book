"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiHome } from "react-icons/fi";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isAboutActive, setIsAboutActive] = useState(false);

  const checkAboutVisibility = () => {
    if (typeof window !== "undefined") {
      const aboutSection = document.querySelector("#abouthome");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
        setIsAboutActive(isVisible);
      }
    }
  };  

  useEffect(() => {
    const checkScroll = () => {
      if (typeof window !== "undefined") {
        setScrollTop(window.scrollY);
        setIsScrolled(window.scrollY > 50);
        checkAboutVisibility();
      }
    };
  
    setIsClient(true);
    window.addEventListener("scroll", checkScroll);
  
    checkScroll(); // Appel initial pour vérifier l'état dès que le composant est monté.
  
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
          className={`fixed
                      top-0 left-0
                      w-full
                      flex
                      justify-center
                      z-40
                      ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-60'}`}
        >
          <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:max-w-[900px]
                          px-2 py-2
                          bg-[rgba(1,22,39,0.6)]
                          rounded-full
                          border border-gray-800
                          flex
                          justify-between
                          items-center"
          >
            <div className="text-white
                            font-orbitron
                            text-[8px]
                            sm:text-[10px] md:text-[12px] lg:text-[14px]
                            ml-2 sm:ml-4 md:ml-6 lg:ml-8"
            >
              Yoann GREGOIRE
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden flex items-center" style={{ transform: 'translateX(-10px)' }}>
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                <FiMenu size={30} />
              </button>
            </div>

            {/* Desktop Navbar */}
            <ul className="hidden lg:flex space-x-4 list-none">
              <li className="flex items-center">
                <Link
                  href="/#header"
                  className={`px-6 py-2 
                              text-navLinkInactive
                              hover:text-navLinkHover
                              ${pathname === "/" ? "text-navLinkHover" : "text-navLinkInactive"}`}
                >
                  <FiHome
                    size={24}
                    className={`${
                      pathname === "/" ? "text-navLinkHover" : "text-navLinkInactive"
                    } hover:text-navLinkHover`}
                  />
                </Link>
              </li>
              {[
                ...(pathname === "/"
                  ? [
                    {
                      href: "#abouthome",
                      label: "À propos",
                    },
                  ]
                  : [
                    pathname !== "/about" && {
                      href: "/about#about",
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
                  <li key={href} className="flex items-center">
                    <Link
                      href={href}
                      className={`px-6 py-2 
                                  text-navLinkInactive
                                  hover:text-navLinkHover
                                  ${href === "#abouthome" && isAboutActive
                                    ? "text-navLinkHover"
                                    : isActive(href) === "text-navText"
                                    ? "text-navLinkHover"
                                    : "text-navLinkInactive"}`}
                                    style={{ color: href === "#abouthome" && isAboutActive ? '#fff000' : '' }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
            {pathname !== "/contact" && (
              <div className="ml-4 hidden lg:block">
                <Link href="/contact#contact">
                  <button
                    className={`
                      px-6 py-2
                      rounded-full
                      text-white
                      hover:bg-navLinkHover
                      hover:text-black
                      hover:font-bold
                      focus:outline-none focus:ring-2 focus:ring-purple-300
                      ${pathname === "/contact" ? "bg-navLinkHover" : "bg-[rgba(128,0,128,0.3)]"}
                    `}
                    style={{
                      minWidth: "160px",
                    }}
                  >
                    Me contacter
                  </button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* "back-to-top arrow */}
      {isScrolled && (
        <div className="fixed 
                        bottom-5 
                        center lg:right-5 
                        z-30"
        >
          <Link href="#header">
            <div className="bg-blue-500
                            p-4 rounded-full 
                            text-white 
                            shadow-lg 
                            hover:bg-blue-600"
            >
              <FiArrowUp size={24} />
            </div>
          </Link>
        </div>
      )}

      {/* Mobile Navbar */}
      {menuOpen && (
        <div
          className="lg:hidden
                      absolute 
                      left-1/2 
                      transform 
                      -translate-x-1/2 
                      w-[70%] max-w-[400px]
                      bg-[rgba(1,22,39,0.8)]
                      py-4 px-6
                      rounded-lg
                      shadow-lg
                      space-y-4
                      z-50
                      list-none"
          style={{
            top: `${scrollTop + 50}px`,
            backdropFilter: "blur(8px)",
          }}
        >
          {[
            {
              href: "/#header",
              label: (
                <div
                  className={`flex justify-center items-center w-full ${
                    pathname === "/" ? "text-navLinkHover" : "text-white"
                  } hover:text-navLinkHover`}
                >
                  <FiHome size={24} />
                </div>
              ),
            },
            ...(pathname === "/"
              ? [
                  {
                    href: "#abouthome",
                    label: "À propos",
                  },
                ]
              : [
                  pathname !== "/about" && {
                    href: "/about#about",
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
          ]
            .filter((item): item is { href: string; label: string } => item !== false)
            .map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block
                            text-center
                            px-4 py-2
                            rounded-md
                            text-navLinkInactive
                            hover:text-navLinkHover ${isActive(href)}`}
              >
                {label}
              </Link>
            ))}
            {pathname !== "/contact" && (
              <Link href="/contact#contact">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="block
                              w-[150px]
                              mx-auto
                              px-4 py-2
                              mt-6
                              rounded-full
                              bg-[rgba(128,0,128,0.3)]
                              hover:bg-navLinkHover
                              hover:text-black
                              hover:font-bold
                              text-white
                              focus:outline-none focus:ring-2 focus:ring-purple-300"
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
