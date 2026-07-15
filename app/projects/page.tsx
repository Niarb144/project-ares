"use client";

import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/projects/Hero";
import ProjectStats from "@/components/projects/ProjectStats";
import TechnologyFilters from "@/components/projects/TechnologyFilters";
import FeaturedProject from "@/components/projects/FeaturedProject";
import BentoGrid from "@/components/projects/BentoGrid";
import EngineeringProcess from "@/components/projects/EngineeringProcess";
import ProjectTimeline from "@/components/projects/ProjectTimeline";
import ProjectCTA from "@/components/projects/ProjectCTA";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = projects.find((p) => p.featured) ?? projects[0];

  const rest = useMemo(
    () => projects.filter((p) => p.id !== featured?.id),
    [featured?.id]
  );

  const filteredRest = useMemo(() => {
    if (activeFilter === "All") return rest;
    return rest.filter((p) => p.technologies.includes(activeFilter));
  }, [rest, activeFilter]);

  return (
    <main className="bg-slate-950">
      <Hero />

      <ProjectStats projects={projects} yearsExperience={3} />

      <TechnologyFilters
        projects={rest}
        active={activeFilter}
        onChange={setActiveFilter}
      />

      {featured && <FeaturedProject project={featured} />}

      <BentoGrid projects={filteredRest} />

      <EngineeringProcess />

      <ProjectTimeline projects={projects} />

      <ProjectCTA />
    </main>
  );
}