"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const technologies = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.technologies))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <section className="w-full bg-[#f7f7f5] px-5 py-20 md:px-8 lg:px-10 lg:py-24" id="projects">
      <div className="mx-auto max-w-[1500px]">
        {/* =========================
            TOP FILTER BAR
        ========================== */}
        <div className="mb-12 flex items-center justify-between gap-6">
          {/* Desktop Pills */}
          <div className="hidden flex-wrap items-center gap-2 md:flex">
            {technologies.map((tech) => {
              const isActive = activeFilter === tech;

              return (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-xs
                    font-medium
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      isActive
                        ? "bg-neutral-950 text-white"
                        : "bg-transparent text-neutral-500 hover:bg-white hover:text-neutral-900"
                    }
                  `}
                >
                  {tech}
                </button>
              );
            })}
          </div>

          {/* Optional right label */}
          <div className="hidden md:block">
            <button
              onClick={() => setActiveFilter("All")}
              className="group flex items-center gap-2 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-950"
            >
              View all projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        {/* =========================
            MOBILE FILTER
        ========================== */}
        <div className="mb-10 md:hidden">
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="
              w-full
              rounded-full
              border
              border-neutral-200
              bg-white
              px-5
              py-3
              text-sm
              text-neutral-900
              outline-none
            "
          >
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* =========================
            EDITORIAL GRID
        ========================== */}
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* =========================
              INTRO BLOCK
          ========================== */}
          <motion.div
            layout
            className="
              flex
              min-h-[320px]
              flex-col
              justify-between
              pr-2
              lg:min-h-[420px]
              lg:pr-10
            "
          >
            <div>
              {/* Small label */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />

                <span className="text-xs font-medium text-neutral-700">
                  Selected projects
                </span>
              </div>

              {/* Main heading */}
              <h2
                className="
                  max-w-md
                  text-4xl
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.045em]
                  text-neutral-950
                  sm:text-5xl
                  lg:text-[3.5rem]
                "
              >
                Digital work built with purpose.
              </h2>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-sm
                  text-sm
                  leading-6
                  text-neutral-500
                  md:text-base
                "
              >
                A selection of websites, applications, and digital experiences
                focused on clean design, thoughtful interaction, and modern
                technology.
              </p>
            </div>
          </motion.div>

          {/* =========================
              PROJECT CARDS
          ========================== */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}