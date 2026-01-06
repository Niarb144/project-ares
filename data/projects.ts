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
    description: "Safari and adventure booking platform.",
    image: "/images/abok.png",
    url: "https://abokadventures.com",
    technologies: ["HTML", "Tailwind", "JavaScript", "Google Translate", "EmailJS", "Swiper.js", "Bootstrap", "Captcha"],
  },
  {
    id: "epione",
    title: "Epione Health",
    description: "A pharmaceutical company website.",
    image: "/images/epione.png",
    url: "https://epione-health.com",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "EmailJS", "Captcha"],
  },
  {
    id: "imaara",
    title: "Imaara Mall",
    description: "Modern mall showcase website.",
    image: "/images/imaara-main.png",
    url: "https://theimaara.co.ke",
    technologies: ["HTML", "CSS", "PHP", "SQL", "JavaScript"],
  },
  {
    id:"tuffsteel",
    title: "Tuff Steel",
    description: "Steel manufacturing company website.",
    image: "/images/tuffsteel.png",
    url: "https://tuffsteelproject.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
  },
  {
    id: "bytespere",
    title: "Bytespere",
    description: "IT solutions and services company website.",
    image: "/images/bytespere.png",
    url: "https://bytespere.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
  },
];
