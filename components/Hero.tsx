"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Hero() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 700], [0, 120]);
  const contentY = useTransform(scrollY, [0, 700], [0, -40]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#f2f0e8]">
      {/* Background image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -inset-y-20 inset-x-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background.png')",
          }}
        />
      </motion.div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20" />

      {/* Optional subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-8 pt-32 md:px-10 lg:px-14 lg:pb-12"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Small intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#f2f0e8]" />

            <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/70 md:text-sm">
              Fullstack Developer 
            </p>
          </motion.div>

          {/* Bottom hero layout */}
          <div className="grid items-end gap-6 lg:grid-cols-[1.6fr_0.7fr] lg:gap-6">
            {/* Giant Teddy text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1
                className="
                  font-space
                  text-[25vw]
                  font-medium
                  uppercase
                  leading-[0.72]
                  tracking-[-0.075em]
                  text-[#f2f0e8]
                  sm:text-[22vw]
                  lg:text-[18vw]
                "
              >
                Teddy
              </h1>
            </motion.div>

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pb-1 lg:pb-4"
            >
              {/* Decorative mark */}
              {/* <div className="mb-4 text-3xl font-light leading-none">
                ✳
              </div> */}

              <p className="font-mono max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                Creating
                thoughtful digital experiences that balance usability,
                performance, and visual detail.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contacts"
                  className="
                    font-mono
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#f2f0e8]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white
                  "
                >
                  Let&apos;s Connect

                  <span
                    className="
                      font-mono
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="
                    font-mono
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-white/30
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-sm
                    transition-colors
                    hover:border-white
                    hover:bg-white/10
                  "
                >
                  View Projects
                </Link>
              </div>

              {/* Social links */}
              <div
                id="socials"
                className="mt-7 flex items-center gap-5 border-t border-white/20 pt-5"
              >
                <Link
                  href="https://github.com/Niarb144"
                  target="_blank"
                  aria-label="GitHub"
                  className="text-lg text-white/60 transition-all hover:-translate-y-1 hover:text-white"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/brian-teddy-omondi/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-lg text-white/60 transition-all hover:-translate-y-1 hover:text-white"
                >
                  <FaLinkedinIn />
                </Link>

                <Link
                  href="/docs/Brian Teddy Omondi Resume 2026.pdf"
                  target="_blank"
                  aria-label="Resume"
                  className="text-xl text-white/60 transition-all hover:-translate-y-1 hover:text-white"
                >
                  <IoDocumentTextOutline />
                </Link>

                <span className="font-mono ml-auto text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Github · LinkedIn · CV
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}