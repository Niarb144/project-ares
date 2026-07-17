"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/skills";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-slate-950 relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            Toolbox
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & Tools
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Technologies I use to build fast, scalable, and elegant applications.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl p-6
                         bg-gradient-to-b from-slate-900 to-slate-900/60
                         border border-slate-800
                         shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
                         hover:border-indigo-500/40
                         hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.35)]
                         transition-all duration-300"
            >
              {/* Uniform icon chip: fixed square, light backing so dark logos stay visible */}
              <div
                className="relative w-16 h-16 rounded-xl bg-white/95 ring-1 ring-white/10
                           flex items-center justify-center overflow-hidden
                           shadow-inner group-hover:ring-indigo-400/40 transition-all duration-300"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  sizes="64px"
                  className="object-contain p-2.5 grayscale-0 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-sm font-medium text-slate-200 tracking-wide text-center">
                {skill.name}
              </h3>

              {/* subtle underline accent on hover */}
              <span className="absolute bottom-3 h-px w-0 bg-indigo-400 group-hover:w-8 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}