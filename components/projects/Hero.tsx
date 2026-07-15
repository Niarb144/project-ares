"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Layered radial gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400"
        >
          Selected Work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Building scalable digital products with modern web technologies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
        >
          Thoughtful user experiences, backed by production-grade engineering
          for real clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400"
        >
          {["Commercial Projects", "SaaS Platforms", "UI Engineering"].map(
            (item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-slate-700" />}
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}