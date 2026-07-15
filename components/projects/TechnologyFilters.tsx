"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

type Props = {
  projects: Project[];
  active: string;
  onChange: (tech: string) => void;
};

export default function TechnologyFilters({ projects, active, onChange }: Props) {
  const counts = new Map<string, number>();
  projects.forEach((p) =>
    p.technologies.forEach((tech) =>
      counts.set(tech, (counts.get(tech) ?? 0) + 1)
    )
  );

  const filters = [
    { label: "All", count: projects.length },
    ...Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => ({ label, count })),
  ];

  return (
    <section className="px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
        {filters.map((filter) => {
          const isActive = active === filter.label;
          return (
            <button
              key={filter.label}
              onClick={() => onChange(filter.label)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.span
                  layoutId="active-filter-pill"
                  className="absolute inset-0 rounded-full bg-blue-600"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {filter.label} ({filter.count})
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}