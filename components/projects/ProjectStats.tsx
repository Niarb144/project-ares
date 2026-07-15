"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Project } from "@/data/projects";

type Props = {
  projects: Project[];
  /** Manually supplied since "years experience" isn't derivable from project data alone */
  yearsExperience: number;
};

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function ProjectStats({ projects, yearsExperience }: Props) {
  const totalProjects = projects.length;
  const uniqueTech = new Set(projects.flatMap((p) => p.technologies)).size;
  const commercialClients = new Set(
    projects.filter((p) => p.category === "Commercial").map((p) => p.title)
  ).size;

  const stats = [
    { value: totalProjects, suffix: "+", label: "Projects" },
    { value: uniqueTech, suffix: "+", label: "Technologies" },
    { value: commercialClients, suffix: "", label: "Commercial Clients" },
    { value: yearsExperience, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section className="border-y border-slate-800/80 bg-slate-950/60 px-6 py-14">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold text-white sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}