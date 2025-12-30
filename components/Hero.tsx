"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax values
  const bgY = useTransform(scrollY, [0, 500], [0, 120]);
  const contentY = useTransform(scrollY, [0, 500], [0, -40]);
  const glowOpacity = useTransform(scrollY, [0, 300], [0.25, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"
      />

      {/* Soft glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-widest text-slate-400 mb-4"
          >
            Hi, I’m <span className="text-white">Teddy</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            I build <span className="text-blue-500">elegant</span> web
            <br />
            experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-slate-300 text-lg"
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
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
            >
              Let’s Connect
            </a>

            <a
              href="/projects"
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-200 font-semibold hover:bg-slate-800 transition"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mb-4 mt-10 flex justify-center gap-4" id="socials">
            <Link href="https://github.com/Niarb144" target="_blank" className="mx-3 text-blue-400 hover:text-blue-400"><FaGithub /></Link>
            <Link href="https://www.linkedin.com/in/teddy-brian-7a0057228/" target="_blank" className="mx-3 text-blue-400 hover:text-blue-400"><FaLinkedinIn /></Link>
            <Link href="https://x.com/BrianTeddy7" target="_blank" className="mx-3 text-blue-400 hover:text-blue-400"><FaXTwitter /></Link>
            <Link href="https://www.instagram.com/pendoria_/" target="_blank" className="mx-3 text-blue-400 hover:text-blue-400"><FaInstagram /></Link>    
        </motion.div>   
        </div>
      </motion.div>
    </section>
  );
}
