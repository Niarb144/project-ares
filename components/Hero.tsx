"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax values
  const bgY = useTransform(scrollY, [0, 500], [0, 120]);
  const contentY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-white"
      />

      {/* Subtle grid texture instead of the blue glow */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-widest text-neutral-500 mb-4"
          >
            Hi, I’m <span className="text-neutral-900 font-medium">Teddy</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-neutral-900 leading-[1.05] tracking-tight"
          >
            I build <span className="text-blue-600">elegant</span> web
            <br />
            experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A fullstack developer passionate about clean design,
            smooth animations, and modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contacts"
              className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-700 transition-colors"
            >
              Let’s Connect
            </a>

            <a
              href="/projects"
              className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-800 font-semibold hover:border-neutral-900 hover:bg-neutral-50 transition-colors"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mb-4 mt-10 flex justify-center gap-6"
            id="socials"
          >
            <Link
              href="https://github.com/Niarb144"
              target="_blank"
              className="text-neutral-500 hover:text-neutral-900 transition-colors text-lg"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/teddy-brian-7a0057228/"
              target="_blank"
              className="text-neutral-500 hover:text-neutral-900 transition-colors text-lg"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="/docs/Brian Teddy Omondi Resume 2026.pdf"
              target="_blank"
              className="text-neutral-500 hover:text-neutral-900 transition-colors text-lg"
            >
              <IoDocumentTextOutline />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}