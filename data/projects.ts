export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "abok",
    title: "Abok Adventures",
    description: "Tourism and adventure booking platform.",
    image: "/images/abok.png",
    url: "https://abokadventures.com",
    technologies: ["HTML", "Tailwind", "JavaScript", "Google Translate", "EmailJS", "Swiper.js", "Bootstrap"],
  },
  {
    id: "epione",
    title: "Epione Health",
    description: "Healthcare management and booking system.",
    image: "/images/epione.png",
    url: "https://epione-health.com",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "imaara",
    title: "Imaara Mall",
    description: "Modern real estate and mall showcase website.",
    image: "/images/imaara-main.png",
    url: "https://theimaara.co.ke",
    technologies: ["HTML", "CSS", "PHP", "SQL", "JavaScript"],
  },
];
