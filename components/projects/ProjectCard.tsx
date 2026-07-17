"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  Layers3,
} from "lucide-react";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  const visibleTech = project.technologies.slice(0, 3);
  const hiddenTech = project.technologies.slice(3);

  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Live Badge */}
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {project.status}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-5 p-6">

        {/* Category */}
        <div className="flex items-center gap-2 text-sm text-blue-400">
          <Layers3 size={16} />
          {project.category} Project
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            {project.description}
          </p>
        </div>

        {/* Tech */}
        <div>
          <div className="flex flex-wrap gap-2">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}

            {hiddenTech.length > 0 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300 transition hover:border-blue-500 hover:text-white"
              >
                +{hiddenTech.length}
              </button>
            )}
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 flex flex-wrap gap-2"
              >
                {hiddenTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Footer */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-slate-500">
            <Globe size={16} />
            <span className="text-sm">Production Website</span>
          </div>

          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
          >
            View Project
            
          </Link>

        </div>

      </div>
    </motion.article>
  );
}