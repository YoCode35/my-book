"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiHome } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import { useNavbarLogic } from "./useNavbarLogic";
import { LABELS, ROUTES, PAGE_NAMES } from "./route";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const { isScrolled, scrollTop, isAboutActive, isSkillsActive, isMyProjectsActive } = useNavbarLogic();

  const isActive = (path: string) =>
    pathname === path ? "text-navText" : "text-[#3d5b79]";

  return (
    <>
      <nav
        className={`fixed
                    top-0
                    left-0 sm:left-auto
                    right-0 sm:right-auto               
                    flex
                    justify-center
                    items-center
                    z-40
                    ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-60'}`}
      >
        <div className="w-[300px] sm:w-[100%] 3xl:w-[1000px] 4xl:w-[1300px]
                        px-2 py-2
                        bg-[rgba(1,22,39,0.6)]
                        rounded-full
                        border border-gray-800
                        flex
                        justify-between
                        items-center
                        mx-auto"
        >
          <div className="text-white
                          font-orbitron
                          text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] 4xl:text-[20px]
                          tracking-wider sm:tracking-widest md:tracking-[0.1em] lg:tracking-[0.15em]
                          text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px]
                          ml-2 sm:ml-4 md:ml-6 lg:ml-8
                          mr-2 sm:mr-4 md:mr-6 lg:mr-8"
          >
            Yoann GREGOIRE
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex space-x-4 list-none">
            <li className="flex items-center">
              <Link
                href={ROUTES.HOME}
                className={`px-6 py-2 
                            text-navLinkInactive
                            hover:text-navLinkHover
                            ${pathname === "/" ? "text-navLinkHover" : "text-navLinkInactive"}`}
              >
                <FiHome
                  className={`hover:text-navLinkHover ${pathname === "/" ? "text-navLinkHover" : "text-navLinkInactive"
                    }  w-6 h-6 3xl:w-8 3xl:h-8 4xl:w-12 3xl:h-12`}
                />
              </Link>
            </li>

            {/* About Link */}
            {pathname !== ROUTES.ABOUT_PATH && (
              <li key={PAGE_NAMES.ABOUT} className="flex items-center">
                <Link
                  href={pathname === "/" ? ROUTES.ABOUT_HOME : ROUTES.ABOUT_ANCHOR}
                  className={`px-6 py-2 
                              text-navLinkInactive
                              hover:text-navLinkHover
                              ${pathname === "/" && isAboutActive ? "text-navLinkHover" : "text-navLinkInactive"}
                              3xl:text-2xl 4xl:text-3xl`
                            }
                              style={{
                                  color: pathname === "/" && isAboutActive ? "#fff000" : "",
                              }}
                >
                  {LABELS.ABOUT}
                </Link>
              </li>
            )}

            {/* Skills Link */}
            {pathname !== ROUTES.SKILLS_PATH && (
              <li key={PAGE_NAMES.SKILLS} className="flex items-center">
                <Link
                  href={pathname === "/" ? ROUTES.SKILLS_HOME : ROUTES.SKILLS_ANCHOR}
                  className={`px-6 py-2 
                              text-navLinkInactive
                              hover:text-navLinkHover
                                ${pathname === "/" && isSkillsActive ? "text-navLinkHover" : "text-navLinkInactive"}
                                3xl:text-2xl 4xl:text-3xl`}
                  style={{
                    color: pathname === "/" && isSkillsActive ? "#fff000" : "",
                  }}
                >
                  {LABELS.SKILLS}
                </Link>
              </li>
            )}

            {/* Projects Links */}
            {pathname !== ROUTES.PROJECTS_PATH && (
              <li key={PAGE_NAMES.PROJECTS} className="flex items-center">
                <Link
                  href={pathname === "/" ? ROUTES.PROJECTS_HOME : ROUTES.PROJECTS_ANCHOR}
                  className={`px-6 py-2 
                              text-navLinkInactive
                              hover:text-navLinkHover
                          ${pathname === "/" && (isMyProjectsActive) ? "text-navLinkHover" : "text-navLinkInactive"}
                          3xl:text-2xl 4xl:text-3xl`}
                  style={{
                    color: (pathname === "/" && isMyProjectsActive) ? "#fff000" : "",
                  }}
                >
                  {LABELS.PROJECTS}
                </Link>
              </li>
            )}
          </ul>

          {/* Contact Button */}
          {pathname !== ROUTES.CONTACT_PATH && (
            <div className="ml-4 hidden lg:block">
              <Link href= {ROUTES.CONTACT_ANCHOR}>
                <button
                  data-testid="contact-button"
                  className={`px-6 py-2
                              w-[180px] 4xl:w-[250px]
                              rounded-full
                              text-white
                              hover:bg-navLinkHover
                              hover:text-black
                              hover:font-bold
                              focus:outline-none focus:ring-2 focus:ring-purple-300
                              ${pathname === ROUTES.CONTACT_PATH ? "bg-navLinkHover" : "bg-buttonColorBkgd"}
                              3xl:text-xl 4xl:text-3xl`}
                  style={{ minWidth: "160px" }}
                >
                  {LABELS.CONTACT}
                </button>
              </Link>
            </div>
          )}

          {/* Hamburger Icon */}
          <div className="lg:hidden 
                          flex 
                          items-center
                          ml-2 sm:ml-4 md:ml-6" style={{ transform: 'translateX(-10px)' }}>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <FiMenu size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      {menuOpen && (
        <div className="lg:hidden
                        absolute 
                        inset-x-0
                        mx-auto
                        w-[180px] sm:w-[30%]
                        max-w-[300px]
                        bg-[rgba(1,22,39,0.8)]
                        py-8 px-6
                        rounded-b-lg
                        shadow-lg
                        space-y-4
                        z-50
                        list-none
                        h-auto"
          style={{
            top: `${scrollTop + 48}px`,
            backdropFilter: "blur(8px)",
          }}
        >
          {[
            { href: "/#header", label: <div className={`flex justify-center items-center ${pathname === "/" ? "text-navLinkHover" : "text-white"} hover:text-navLinkHover`}><FiHome size={24} /></div> },
            ...(pathname === "/" ? [
              { href: ROUTES.ABOUT_HOME, label: <span className={`${isAboutActive ? "text-navLinkHover" : "text-white"}`}>{LABELS.ABOUT}</span> },
              { href: ROUTES.SKILLS_HOME, label: <span className={`${isSkillsActive ? "text-navLinkHover" : "text-white"}`}>{LABELS.SKILLS}</span> },
              { href: ROUTES.PROJECTS_HOME, label: <span className={`${isMyProjectsActive ? "text-navLinkHover" : "text-white"}`}>{LABELS.PROJECTS}</span> },
            ] : [
              pathname !== ROUTES.ABOUT_PATH && { href: ROUTES.ABOUT_ANCHOR, label: LABELS.ABOUT },
              pathname !== ROUTES.SKILLS_PATH && { href: ROUTES.SKILLS_ANCHOR, label: LABELS.SKILLS },
              pathname !== ROUTES.PROJECTS_PATH && { href: ROUTES.PROJECTS_ANCHOR, label: LABELS.PROJECTS },
            ]).filter(Boolean),
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
                            text-navLinkInactive
                            hover:text-navLinkHover 
                      ${isActive(href)}`}
              >
                {label}
              </Link>
            ))}
          {pathname !== ROUTES.CONTACT_PATH && (
            <Link href={ROUTES.CONTACT_ANCHOR}>
              <button
                onClick={() => setMenuOpen(false)}
                className=" block
                            w-[130px] sm:w-[150px]
                            w-full
                            mx-auto
                            px-4 py-2
                            mt-6
                            rounded-full
                            bg-buttonColorBkgd
                            hover:bg-navLinkHover
                            hover:text-black
                            hover:font-bold
                            text-white
                            focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                {LABELS.CONTACT}
              </button>
            </Link>
          )}
        </div>
      )}

{/* "back-to-top arrow" */}
{isScrolled && pathname !== "/login" && (
  <div className="fixed 
                  bottom-5 
                  center lg:right-5 xl:right-5
                  bottom-[70px] sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 3xl:bottom-20
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

    </>
  );
}
