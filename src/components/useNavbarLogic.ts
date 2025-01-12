import { useState, useEffect } from "react";

export function useNavbarLogic() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (typeof window !== "undefined") {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const hasScrollableContent = maxScroll > 0;

        setScrollTop(window.scrollY);
        setIsScrolled(hasScrollableContent && window.scrollY > 50);

        // Vérification de la visibilité de la section "À propos"
        const aboutSection = document.querySelector("#abouthome");
        if (aboutSection) {
          const aboutRect = aboutSection.getBoundingClientRect();
          const isAboutVisible = aboutRect.top <= window.innerHeight * 0.4 && aboutRect.bottom >= 0;
          setIsAboutActive(isAboutVisible);
        }

        // Vérification de la visibilité de la section "Skills"
        const skillsSection = document.querySelector("#skills");
        if (skillsSection) {
          const skillsRect = skillsSection.getBoundingClientRect();
          const isSkillsVisible = skillsRect.top <= window.innerHeight * 0.3 && skillsRect.bottom >= 0;
          setIsSkillsActive(isSkillsVisible);
        }
      }
    };

    window.addEventListener("scroll", checkScroll);

    checkScroll(); // Appel initial pour vérifier l'état dès que le composant est monté.

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return { isScrolled, scrollTop, isAboutActive, isSkillsActive };
}
