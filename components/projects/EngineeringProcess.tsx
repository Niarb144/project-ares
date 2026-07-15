"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding business requirements and constraints.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes, UI planning and content structure.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description: "Modern frontend architecture, built for maintainability.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deployment",
    description: "CI/CD, testing and monitoring in production.",
    icon: Rocket,
  },
];

export default function EngineeringProcess() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white">How I Work</h2>
          <p className="mt-3 text-slate-400">
            A consistent process, from first conversation to production
            deploy.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-slate-600">
                  {step.number}
                </span>
                <step.icon size={20} className="text-blue-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-700 lg:block">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}