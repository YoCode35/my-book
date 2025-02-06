const BASE_ABOUT_PATH = "/pages/about";
const BASE_SKILLS_PATH = "/pages/skills";
const BASE_PROJECTS_PATH = "/pages/portfolio";
const BASE_CONTACT_PATH = "/pages/contact";

export const LABELS = {
    ABOUT: "À propos",
    SKILLS: "Skills",
    PROJECTS: "Projets",
    CONTACT: "Me Contacter",
  };

export const ROUTES = {
    HOME: "/#header",

    ABOUT_HOME: "#abouthome",
    ABOUT_PATH: BASE_ABOUT_PATH,    
    ABOUT_ANCHOR: `${BASE_ABOUT_PATH}#about`, 

    SKILLS_HOME: "#skillshome",
    SKILLS_PATH: BASE_SKILLS_PATH, 
    SKILLS_ANCHOR: `${BASE_SKILLS_PATH}#skills`,

    PROJECTS_HOME: "#portfoliohome",
    PROJECTS_PATH: BASE_PROJECTS_PATH,
    PROJECTS_ANCHOR: `${BASE_PROJECTS_PATH}#portfolio`,

    CONTACT_PATH: BASE_CONTACT_PATH,
    CONTACT_ANCHOR: `${BASE_CONTACT_PATH}#contact`,
  };
  