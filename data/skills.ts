export type Skill = {
  id: string;
  name: string;
  image: string;
};

export const skills: Skill[] = [
  { id: "html", name: "HTML5", image: "/images/html5.png" },
  { id: "css", name: "CSS3", image: "/images/css3.png" },
  { id: "js", name: "JavaScript", image: "/images/javascript.png" },
  { id: "react", name: "React", image: "/images/react.webp" },
  { id: "node", name: "Node.js", image: "/images/nodejs.png" },
  { id: "next", name: "Next.js", image: "/images/nextjs.png" },
  { id: "tailwind", name: "Tailwind CSS", image: "/images/tailwindcss.png" },
  { id: "git", name: "Git", image: "/images/git.png" },
];
