"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

export default function ProjectTimeline({ projects }: Props) {
  const sorted = [...projects].sort((a, b) => a.year - b.year);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white">Development Timeline</h2>
          <p className="mt-3 text-slate-400">
            Progression from first commercial build to current work.
          </p>
        </div>

        <div className="relative border-l border-slate-800 pl-8">
          {sorted.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
              </span>

              <div className="text-sm font-mono text-slate-500">
                {project.year}
              </div>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{project.tagline}</p>
            </motion.div>
          ))}

          <div className="relative">
            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-emerald-500/40 bg-slate-950">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            </span>
            <div className="text-sm font-medium text-emerald-400">Current</div>
          </div>
        </div>
      </div>
    </section>
  );
}