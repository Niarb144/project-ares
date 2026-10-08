import React from "react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        overflow-hidden
        bg-[#07111f]
        px-5
        py-8
        text-white
        md:px-8
        lg:px-12
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          flex-1
          flex-col
        "
      >
        {/* =========================
            TOP AREA
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            border-t
            border-white/10
            pt-7
            md:grid-cols-[1fr_auto]
            md:items-start
            md:justify-between
          "
        >
          {/* Left */}
          <div className="max-w-md">
            <p
              className="
                text-sm
                leading-6
                text-white/50
              "
            >
              I build thoughtful digital experiences with a focus on
              modern web development, clean interfaces, interaction,
              and performance.
            </p>

            {/* Socials */}
            <div
              id="socials"
              className="mt-8 flex items-center gap-3"
            >
              <Link
                href="https://github.com/Niarb144"
                target="_blank"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-white
                "
              >
                <FaGithub size={14} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/brian-teddy-omondi/"
                target="_blank"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-white
                "
              >
                <FaLinkedinIn size={14} />
              </Link>

              <Link
                href="https://x.com/BrianTeddy7"
                target="_blank"
                aria-label="X"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-white
                "
              >
                <FaXTwitter size={14} />
              </Link>

              <Link
                href="https://www.instagram.com/pendoria_/"
                target="_blank"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-white
                "
              >
                <FaInstagram size={14} />
              </Link>
            </div>
          </div>

          {/* Right links */}
          <div
            className="
              grid
              grid-cols-2
              gap-x-12
              gap-y-4
              md:grid-cols-1
              md:min-w-[180px]
              lg:mt-8
            "
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-6
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-white
                  text-2xl
                "
              >
                <span>{link.label}</span>

                <span
                  className="
                    text-white/20
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-blue-500
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* =========================
            SPACER
        ========================== */}
        <div className="flex-1" />

        {/* =========================
            BRAND
        ========================== */}
        <div className="relative">
          <h2
            className="
              select-none
              text-[22vw]
              font-medium
              uppercase
              leading-[0.72]
              tracking-[-0.075em]
              text-white
              sm:text-[20vw]
              lg:text-[17vw]
            "
          >
            Teddy
          </h2>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-5
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © {year} Teddy. All rights reserved.
          </span>

        </div>
      </div>
    </footer>
  );
}