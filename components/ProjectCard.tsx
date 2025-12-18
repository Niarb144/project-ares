"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-4">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={project.url}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
}
