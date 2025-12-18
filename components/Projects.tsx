"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const technologies = [
    "All",
    ...Array.from(new Set(projects.flatMap(p => p.technologies))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(project =>
          project.technologies.includes(activeFilter)
        );

  return (
    <section className="w-full py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Selected Projects
          </h2>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-10">
          <label className="block text-sm text-slate-400 mb-2">
            Filter by technology
          </label>
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="w-full rounded-lg bg-slate-900 border border-slate-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Pills */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-16">
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition
                ${
                  activeFilter === tech
                    ? "bg-blue-600 text-white border-blue-500"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
