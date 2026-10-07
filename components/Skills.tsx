"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] =
    useState<string | null>(skillCategories[0]?.id ?? null);

  const [expandedCategory, setExpandedCategory] =
    useState<string | null>(null);

  const activeCategory =
    skillCategories.find(
      (category) => category.id === hoveredCategory
    ) ??
    skillCategories.find(
      (category) => category.id === expandedCategory
    ) ??
    skillCategories[0];

  const toggleCategory = (id: string) => {
    setExpandedCategory((current) =>
      current === id ? null : id
    );

    setHoveredCategory(id);
  };

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-neutral-950
        px-5
        py-24
        text-white
        md:px-8
        lg:px-12
        lg:py-32
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[20%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* ========================
            SECTION HEADER
        ======================== */}
        <div
          className="
            mb-16
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-end
            md:justify-between
            lg:mb-20
          "
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/50
                "
              >
                Toolbox
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                text-4xl
                font-medium
                leading-[0.95]
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Technologies I use to build digital experiences.
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-white/40
            "
          >
            My toolkit spans interface development, server-side
            applications, design systems and development workflows.
          </p>
        </div>

        {/* ========================
            MAIN INTERACTIVE AREA
        ======================== */}
        <div
          className="
            relative
            grid
            grid-cols-1
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
          "
        >
          {/* ========================
              LEFT — CATEGORIES
          ======================== */}
          <div>
            {skillCategories.map((category, index) => {
              const isExpanded = expandedCategory === category.id;
              const isHovered = hoveredCategory === category.id;

              return (
                <motion.div
                  key={category.id}
                  layout
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="relative border-t border-white/15"
                >
                  {/* CATEGORY BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className="
                      group
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      py-6
                      text-left
                      md:py-8
                    "
                  >
                    <div className="flex items-start gap-5 md:gap-8">
                      <span
                        className="
                          pt-2
                          text-[10px]
                          tracking-[0.2em]
                          text-blue-500
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`
                          text-[12vw]
                          font-medium
                          leading-[0.8]
                          tracking-[-0.055em]
                          transition-colors
                          duration-300

                          sm:text-5xl
                          md:text-6xl
                          lg:text-[4.8rem]

                          ${
                            isHovered || isExpanded
                              ? "text-white"
                              : "text-white/35"
                          }
                        `}
                      >
                        {category.title}
                      </h3>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isExpanded ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-colors
                        duration-300

                        ${
                          isHovered || isExpanded
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-white/15 text-white/40"
                        }
                      `}
                    >
                      <ArrowUpRight size={17} />
                    </motion.div>
                  </button>

                  {/* =========================
                      FLOATING LOGOS
                      anchored to this row
                  ========================== */}
                  <AnimatePresence>
                    {isHovered && !isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="
                          pointer-events-none
                          absolute
                          left-[calc(100%+3rem)]
                          top-1/2
                          hidden
                          h-[220px]
                          w-[420px]
                          -translate-y-1/2
                          lg:block
                        "
                      >
                        {category.skills.map((skill, skillIndex) => {
                          const positions = [
                            {
                              top: "10%",
                              left: "6%",
                              rotate: -8,
                            },
                            {
                              top: "2%",
                              left: "42%",
                              rotate: 6,
                            },
                            {
                              top: "48%",
                              left: "18%",
                              rotate: 5,
                            },
                            {
                              top: "52%",
                              left: "58%",
                              rotate: -7,
                            },
                            {
                              top: "20%",
                              left: "70%",
                              rotate: 4,
                            },
                            {
                              top: "62%",
                              left: "0%",
                              rotate: -4,
                            },
                          ];

                          const position =
                            positions[skillIndex % positions.length];

                          return (
                            <motion.div
                              key={skill.id}
                              initial={{
                                opacity: 0,
                                scale: 0.65,
                                y: 15,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -8, 0],
                                rotate: position.rotate,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.75,
                              }}
                              transition={{
                                opacity: {
                                  delay: skillIndex * 0.04,
                                },
                                scale: {
                                  delay: skillIndex * 0.04,
                                  duration: 0.35,
                                },
                                y: {
                                  duration: 3 + skillIndex * 0.35,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                },
                              }}
                              style={{
                                top: position.top,
                                left: position.left,
                              }}
                              className="
                                absolute
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                rounded-[20px]
                                border
                                border-white/10
                                bg-white
                                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                              "
                            >
                              <div className="relative h-12 w-12">
                                <Image
                                  src={skill.image}
                                  alt={skill.name}
                                  fill
                                  sizes="48px"
                                  className="object-contain"
                                />
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* =========================
                      ACCORDION CONTENT
                  ========================== */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 md:pl-14">
                          <p
                            className="
                              mb-6
                              max-w-md
                              text-sm
                              leading-6
                              text-white/40
                            "
                          >
                            {category.description}
                          </p>

                          <div
                            className="
                              grid
                              grid-cols-2
                              gap-3
                              sm:grid-cols-3
                            "
                          >
                            {category.skills.map(
                              (skill, skillIndex) => (
                                <motion.div
                                  key={skill.id}
                                  initial={{
                                    opacity: 0,
                                    y: 15,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                  }}
                                  transition={{
                                    delay: skillIndex * 0.05,
                                  }}
                                  className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-3
                                  "
                                >
                                  <div
                                    className="
                                      relative
                                      h-10
                                      w-10
                                      shrink-0
                                      overflow-hidden
                                      rounded-lg
                                      bg-white
                                    "
                                  >
                                    <Image
                                      src={skill.image}
                                      alt={skill.name}
                                      fill
                                      sizes="40px"
                                      className="object-contain p-1.5"
                                    />
                                  </div>

                                  <span
                                    className="
                                      text-xs
                                      font-medium
                                      text-white/70
                                    "
                                  >
                                    {skill.name}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <div className="border-t border-white/15" />
          </div>          
        </div>
      </div>
    </section>
  );
}