export type Project = {
  id: string;

  title: string;
  tagline: string;
  description: string;

  image: string;
  gallery?: string[];

  featured: boolean;

  liveUrl: string;
  githubUrl?: string;

  category: "Commercial" | "Personal" | "Open Source";

  year: number;

  status: "Live" | "In Progress";

  technologies: string[];

  problem: string;

  solution: string;

  impact: string[];

  metrics: {
    label: string;
    value: string;
  }[];

  architecture: string[];

  color: string;

  role: string;
};

export const projects: Project[] = [
 {
    id: "luxe",

    title: "Luxe Plains Africa Safaris",

    tagline:
      "Luxury safari booking platform",

    description:
      "A multilingual safari booking experience designed for international travellers.",

    featured: true,

    category: "Commercial",

    status: "Live",

    year: 2026,

    role: "Full Stack Developer",

    image: "/images/luxeplainsafricasafaris.png",

    gallery: [
      "/images/luxe-home.png",
      "/images/luxe-tour.png",
      "/images/luxe-admin.png"
    ],

    liveUrl:
      "https://luxeplainsafricasafaris.com",

    githubUrl:"",

    technologies:[
      "Next.js",
      "Supabase",
      "Tailwind",
      "TypeScript",
      "Framer Motion"
    ],

    problem:
      "The company needed a premium booking platform capable of handling multilingual content and inquiries.",

    solution:
      "Designed and developed a fully responsive booking platform with CMS integration, multilingual support and email automation.",

    impact:[
      "Supports 12 languages",
      "Responsive across all devices",
      "Dynamic CMS",
      "Automated inquiry workflow"
    ],

    metrics:[
      {
        label:"Languages",
        value:"12"
      },
      {
        label:"Pages",
        value:"20+"
      },
      {
        label:"Performance",
        value:"98"
      },
      {
        label:"SEO",
        value:"100"
      }
    ],

    architecture:[
      "Next.js",
      "Supabase",
      "Resend",
      "Next-Intl",
      "Vercel"
    ],

    color:"#3B82F6"
  },
   {
    id: "abok",

    title: "Abok Adventures",

    tagline:
      "Safari and adventure booking platform",

    description:
      "A multilingual safari booking experience designed for international travellers.",

    featured: true,

    category: "Commercial",

    status: "Live",

    year: 2025,

    role: "Full Stack Developer",

    image: "/images/abok.png",

    gallery: [
      "/images/abok-home.png",
      "/images/abok-tour.png",
      "/images/abok-admin.png"
    ],

    liveUrl:
      "https://abokadventures.com",

    githubUrl:"",

    technologies:[
      "Next.js",
      "MongoDB",
      "Tailwind",
      "TypeScript",
      "Framer Motion",
      "Express.js",
    ],

    problem:
      "The company needed a premium booking platform capable of handling multilingual content and inquiries.",

    solution:
      "Designed and developed a fully responsive booking platform with CMS integration, multilingual support and email automation.",

    impact:[
      "Supports 9+ languages",
      "Responsive across all devices",
      "Dynamic CMS",
      "Automated inquiry workflow"
    ],

    metrics:[
      {
        label:"Languages",
        value:"9+"
      },
      {
        label:"Pages",
        value:"20+"
      },
      {
        label:"Performance",
        value:"98"
      },
      {
        label:"SEO",
        value:"100"
      }
    ],

    architecture:[
      "Next.js",
      "NodeJs",
      "MongoDB",
      "Resend",
      "Next-Intl",
      "Vercel"
    ],

    color:"#3B82F6"
  },
  {
    id: "imaara",

    title: "The Imaara Mall",

    tagline:
      "A mall website showcasing various stores and services",

    description:
      "A multilingual mall website showcasing various stores and services",

    featured: false,

    category: "Commercial",

    status: "In Progress",

    year: 2026,

    role: "Full Stack Developer",

    image: "/images/imaara-main.png",

    gallery: [
      "/images/abok-home.png",
      "/images/abok-tour.png",
      "/images/abok-admin.png"
    ],

    liveUrl:
      "https://theimaara.co.ke",

    githubUrl:"",

    technologies:[
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Framer Motion",
    ],

    problem:
      "The company needed a premium mall website capable of showcasing their stores and a system that allows them to easily manage and update their content.",

    solution:
      "Designed and developed a fully responsive mall website with CMS integration email automation.",

    impact:[
      "Supports 9+ languages",
      "Responsive across all devices",
      "Dynamic CMS",
      "Automated inquiry workflow"
    ],

    metrics:[
      
      {
        label:"Pages",
        value:"20+"
      },
      {
        label:"Performance",
        value:"98"
      },
      {
        label:"SEO",
        value:"100"
      }
    ],

    architecture:[
      "Next.js",
      "Vercel"
    ],

    color:"#3B82F6"
  },
  // // {
  // //   id: "imaara",
  // //   title: "Imaara Mall",
  // //   description: "Modern mall showcase website.",
  // //   image: "/images/imaara-main.png",
  // //   url: "https://theimaara.co.ke",
  // //   technologies: ["HTML", "CSS", "PHP", "SQL", "JavaScript"],
  // // },
  // {
  //   id:"tuffsteel",
  //   title: "Tuff Steel",
  //   description: "Steel manufacturing company website.",
  //   image: "/images/tuffsteel.png",
  //   url: "https://tuffsteelproject.vercel.app/",
  //   technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
  // },
  // // {
  // //   id: "bytespere",
  // //   title: "Bytespere",
  // //   description: "IT solutions and services company website.",
  // //   image: "/images/bytespere.png",
  // //   url: "https://bytespere.vercel.app/",
  // //   technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
  // // },
];
