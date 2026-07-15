"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <section className="px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl lg:grid-cols-2"
      >
        {/* Screenshot */}
        <div className="relative min-h-[320px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-blue-400">
              Featured Case Study
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-slate-400">{project.tagline}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Problem
              </div>
              <p className="mt-1.5 text-sm leading-6 text-slate-300">
                {project.problem}
              </p>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Solution
              </div>
              <p className="mt-1.5 text-sm leading-6 text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-3 border-y border-slate-800 py-5">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
            >
              View Case Study
            </Link>

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
              >
                <Github size={18} />
                Repository
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}