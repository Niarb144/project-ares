
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  PenTool,
  Code2,
  PanelsTopLeft,
  ShoppingCart,
  Database,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Creating clean, intuitive and visually engaging interfaces that reflect your brand and elevate user experience.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Building modern, responsive and high-performance websites designed to look great and work seamlessly.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Web Apps & Systems",
    description:
      "Developing custom applications and management systems that simplify workflows and solve real business challenges.",
    icon: PanelsTopLeft,
  },
  {
    number: "04",
    title: "E-commerce",
    description:
      "Building user-friendly online stores with smooth shopping experiences, product management and payment integrations.",
    icon: ShoppingCart,
  },
  {
    number: "05",
    title: "Backend & APIs",
    description:
      "Developing secure server-side solutions, databases and APIs that power reliable digital applications.",
    icon: Database,
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "Keeping digital products updated, optimized and performing smoothly through ongoing technical support.",
    icon: Wrench,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* Section heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-2xl md:mb-20"
        >
          <span className="mb-5 block text-xs uppercase tracking-[0.25em] text-blue-400">
            What I Do
          </span>

          <h2
            id="services-heading"
            className="font-space text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Services
            <span className="text-blue-400">.</span>
          </h2>

          <p className="font-mono mt-6 max-w-xl text-base leading-7 text-slate-400">
            From concept to completion, I create digital
            solutions that combine thoughtful design,
            modern technology and purposeful functionality.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={
            reduceMotion ? undefined : containerVariants
          }
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            grid-cols-1
            gap-px
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-white/10
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={
                  reduceMotion ? undefined : cardVariants
                }
                className="
                  group
                  relative
                  flex min-h-[250px]
                  flex-col justify-between
                  bg-[#0D2038]
                  p-7
                  transition-colors duration-300
                  hover:bg-[#142C49]
                  md:p-8
                "
              >
                {/* Icon and number */}
                <div className="flex items-start justify-between">
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="
                      text-blue-400
                      transition-transform duration-300
                      group-hover:-translate-y-1
                    "
                  />

                  <span className="font-mono text-xs text-slate-500">
                    {service.number}
                  </span>
                </div>

                {/* Service information */}
                <div className="mt-12">
                  <h3 className="text-xl font-medium tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="font-mono mt-3 max-w-sm text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>
                </div>

              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-400">
            Have an idea or project in mind?
          </p>

          <a
            href="#contact"
            className="
              group inline-flex items-center gap-3
              text-sm font-medium text-white
              transition-colors duration-300
              hover:text-blue-400
            "
          >
            Let's discuss your project
            <ArrowUpRight
              size={18}
              className="
                transition-transform duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}
