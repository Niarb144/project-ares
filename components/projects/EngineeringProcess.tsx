
"use client";

import { motion } from "framer-motion";
import {
  Compass,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We explore your ideas, goals, and requirements to understand what you're looking to achieve.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    description:
      "I create the structure, layouts, and visual direction for a seamless user experience.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Your ideas take shape through clean code, modern technologies, and thoughtful implementation.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and refinement, your project is deployed and ready for the world.",
    icon: Rocket,
  },
];

export default function EngineeringProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative w-full py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-24"
        >
          <span className="mb-5 block text-xs uppercase tracking-[0.25em] text-blue-400">
            The Process
          </span>

          <h2
            id="process-title"
            className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            How I work<span className="text-blue-400">.</span>
          </h2>

          <p className="font-mono mt-6 max-w-xl text-base leading-7 text-slate-400">
            Every great project starts with an idea.
            Here's how I transform that idea into a
            meaningful digital experience.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">

          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-700 lg:block" />

          {/* Mobile connecting line */}
          <div className="absolute bottom-12 left-7 top-7 w-px bg-slate-700 lg:hidden" />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex gap-6 lg:block"
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-[#142842] text-blue-400 transition-all duration-300 hover:border-blue-400 hover:bg-[#1c3859]">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  {/* Step information */}
                  <div className="pt-1 lg:pt-0">
                    <span className="mt-7 hidden font-mono text-sm text-blue-400 lg:block">
                      {step.number}
                    </span>

                    <span className="mb-2 block font-mono text-xs text-blue-400 lg:hidden">
                      {step.number}
                    </span>

                    <h3 className="font-space mt-3 text-xl font-medium text-white lg:mt-4">
                      {step.title}
                    </h3>

                    <p className="font-mono mt-4 max-w-sm text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 flex flex-col justify-between gap-5 border-t border-slate-700/60 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-slate-400">
            A clear process. A purposeful result.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-blue-400"
          >
            Let's build something
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
