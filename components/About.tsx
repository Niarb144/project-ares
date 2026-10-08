
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white px-6 py-28 text-neutral-500 md:px-12 lg:px-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            About Me
          </span>
        </div>

        {/* Main quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-mono my-10 max-w-6xl text-3xl font-medium leading-[1.35] tracking-tight md:my-28 md:text-4xl lg:text-5xl"
        >
          “I'm a creative developer who transforms{" "}
          <span className="text-neutral-500">
            ideas into digital experiences.
          </span>{" "}
          I design and build websites, applications, and systems
          that connect{" "}
          <span className="text-neutral-500">
            creativity with functionality.
          </span>
          ”
        </motion.blockquote>

      </div>
    </section>
  );
}
