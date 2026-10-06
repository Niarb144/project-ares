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
      "Discover Your Dream Safari",

    description:
      "A multilingual safari booking experience designed for international travellers. With a focus on user experience, the platform allows users to explore and book safari packages seamlessly. As well as allow authenticated users to manage their bookings and inquiries.",

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
      "Travel to different corners of the African landscape, without going around in circles.",

    description:
      "A multilingual safari booking experience designed for international travellers. With a focus on user experience, the platform allows users to explore and book safari packages seamlessly. As well as allow authenticated users to manage their bookings and inquiries.",

    featured: false,

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
      "Cloudinary",
      "JWT Authentication",
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
      "Explore a world of endless possibilities at The Imaara Mall, where innovation meets convenience.",

    description:
      "A mall website designed to showcase various stores and services, allowing users to explore and learn more about the offerings. The platform also provides a content management system for easy updates and management of the mall's content.",

    featured: false,

    category: "Commercial",

    status: "In Progress",

    year: 2026,

    role: "Full Stack Developer",

    image: "/images/imaara-construction.png",

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
  {
    id: "level-designer",

    title: "Level Designer",

    tagline:
      "Design 2D levels for immersive game experiences.",

    description:
      "A level designer for creating engaging 2D game levels. The platform allows users to design, test, and export levels for use in various game engines. It provides a user-friendly interface with tools for placing objects, defining player paths, and setting up game mechanics.",

    featured: false,

    category: "Open Source",

    status: "Live",

    year: 2026,

    role: "Full Stack Developer",

    image: "/images/level-designer.png",

    gallery: [
      "/images/level-designer.png",
    ],

    liveUrl:
      "https://level-designer-jade.vercel.app/",

    githubUrl:"",

    technologies:[
      "Javascript",
      "HTML",
      "CSS",
      "Canvas API",
    ],

    problem:
      "Game developers needed a tool to easily design, visualize and test their 2D game levels without relying on complex game engines.",

    solution:
      "Designed and developed a level designer with a user-friendly interface, allowing users to create, test, and export 2D game levels efficiently.",

    impact:[
      "Exports the levels in JSON format for easy integration with game engines",
      "Supports various game mechanics and object placements",
      "User-friendly interface for level design"
    ],

    metrics:[
      
      {
        label:"Performance",
        value:"98"
      },
    ],

    architecture:[
      "Javascript",
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
  // {
  //   id: "bytespere",
  //   title: "Bytespere",
  //   description: "IT solutions and services company website.",
  //   image: "/images/bytespere.png",
  //   url: "https://bytespere.vercel.app/",
  //   technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
  // },
];
