export type Skill = {
  id: string;
  name: string;
  image: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Interfaces, interactions and responsive experiences built for the web.",
    skills: [
      {
        id: "html",
        name: "HTML5",
        image: "/images/html5.png",
      },
      {
        id: "css",
        name: "CSS3",
        image: "/images/css3.png",
      },
      {
        id: "js",
        name: "JavaScript",
        image: "/images/javascript.png",
      },
      {
        id: "react",
        name: "React",
        image: "/images/react.webp",
      },
      {
        id: "next",
        name: "Next.js",
        image: "/images/nextjs.png",
      },
    ],
  },

  {
    id: "styling",
    title: "Styling & UI",
    description:
      "Design systems, responsive layouts and visual polish for modern interfaces.",
    skills: [
      {
        id: "tailwind",
        name: "Tailwind CSS",
        image: "/images/tailwindcss.png",
      },
      {
        id: "framer",
        name: "Framer Motion",
        image: "/images/framer-motion.png",
      },
      {
        id: "gsap",
        name: "GSAP",
        image: "/images/gsap.png",
      }
    ],
  },

  {
    id: "backend",
    title: "Backend",
    description:
      "Server-side applications, APIs and application logic.",
    skills: [
      {
        id: "node",
        name: "Node.js",
        image: "/images/nodejs.png",
      },
      {
        id: "express",
        name: "Express.js",
        image: "/images/express.png",
      }
    ],
  },

  {
    id: "tools",
    title: "Tools & Workflow",
    description:
      "Development tools used for version control, collaboration and deployment.",
    skills: [
      {
        id: "git",
        name: "Git",
        image: "/images/git.png",
      },
      {
        id: "vercel",
        name: "Vercel",
        image: "/images/vercel.png",
      },
      {
        id: "resend",
        name: "Resend",
        image: "/images/resend.png",
      },
      {
        id: "cloudinary",
        name: "Cloudinary",
        image: "/images/cloudinary.png",
      }
    ],
  },

  {
    id: "databases",
    title: "Databases",
    description:
      "Data storage solutions, querying and database design.",
    skills: [
      {
        id: "mongodb",
        name: "MongoDB",
        image: "/images/mongodb.png",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        image: "/images/postgresql.png",
      },
      {
        id: "supabase",
        name: "Supabase",
        image: "/images/supabase.png",
      },
    ],
  },

  {
    id: "others",
    title: "Other Technologies",
    description:
      "The tools that I use for my projects outside web applications and databases.",
    skills: [
      {
        id: "blender",
        name: "Blender",
        image: "/images/blender.png",
      },
      {
        id: "Godot",
        name: "Godot",
        image: "/images/godot.png",
      }
    ]
  },
];