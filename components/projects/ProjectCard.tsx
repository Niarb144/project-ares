"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers3,
  CircleDot,
} from "lucide-react";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full"
    >
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-neutral-200
          bg-white
          transition-all
          duration-300
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
        "
      >
        {/* =========================
            IMAGE
        ========================== */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Soft image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

          {/* Category pill */}
          <div className="absolute left-4 top-4">
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-white/90
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-neutral-800
                shadow-sm
                backdrop-blur-md
              "
            >
              <Layers3 size={13} />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Arrow */}
          <div
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white
              text-neutral-900
              shadow-sm
              transition-all
              duration-300
              group-hover:rotate-45
              group-hover:bg-blue-600
              group-hover:text-white
            "
          >
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div>
            <h3
              className="
                text-xl
                font-semibold
                tracking-[-0.025em]
                text-neutral-950
                transition-colors
                duration-300
                group-hover:text-blue-600
                md:text-2xl
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-2
                line-clamp-2
                text-sm
                leading-6
                text-neutral-500
              "
            >
              {project.description}
            </p>
          </div>

          {/* =========================
              FOOTER
          ========================== */}
          <div
            className="
              mt-auto
              flex
              items-center
              justify-between
              gap-4
              pt-6
            "
          >
            {/* Status */}
            <div className="flex items-center gap-2">
              <div
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full

                  ${
                    project.status === "Live"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600"
                  }
                `}
              >
                <CircleDot size={15} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-400">
                  Status
                </p>

                <p className="text-xs font-medium text-neutral-800">
                  {project.status}
                </p>
              </div>
            </div>

            {/* Category */}
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-400">
                Category
              </p>

              <p className="text-xs font-medium text-neutral-800">
                {project.category}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}