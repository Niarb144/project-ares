"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  const visibleTech = project.technologies.slice(0, 3);
  const hiddenTech = project.technologies.slice(3);

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className="relative h-[420px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-800/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-slate-800/80 text-slate-200 border border-slate-700 backdrop-blur"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expand toggle */}
          {hiddenTech.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-3 text-slate-300 hover:text-white transition"
              aria-label="Show more technologies"
            >
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>
          )}
        </div>

        {/* Expanded technologies */}
        <AnimatePresence>
          {expanded && hiddenTech.length > 0 && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-3 flex flex-wrap gap-2"
            >
              {hiddenTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-slate-800/80 text-slate-200 border border-slate-700 backdrop-blur"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <Link
          href={project.url}
          target="_blank"
          className="mt-6 inline-block text-blue-400 hover:text-blue-300 font-medium transition"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
}
