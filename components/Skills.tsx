"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & Tools
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Technologies I use to build fast, scalable, and elegant applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg"
            >
              {/* Icon container (uniform size) */}
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-sm font-medium text-slate-200 tracking-wide">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
