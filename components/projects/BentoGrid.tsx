"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

// Cycle of span classes so cards vary in width without needing manual
// per-project layout config. First card in the grid always reads as "hero".
const spanPattern = [
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
];

export default function BentoGrid({ projects }: Props) {
  if (projects.length === 0) {
    return (
      <section className="px-6 py-16">
        <p className="mx-auto max-w-5xl text-center text-slate-500">
          No projects match that filter yet.
        </p>
      </section>
    );
  }

  return (
    <section className="px-6 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className={spanPattern[i % spanPattern.length]}
            >
                <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}