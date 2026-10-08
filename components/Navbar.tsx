"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [clipOrigin, setClipOrigin] = useState({
    x: "95%",
    y: "5%",
  });

  const pathname = usePathname();

  const buttonRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  /* ----------------------------------
      Detect page scroll
  ---------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ----------------------------------
      Get hamburger position for
      radial menu animation
  ---------------------------------- */
  useEffect(() => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    const x =
      ((rect.left + rect.width / 2) / window.innerWidth) * 100;

    const y =
      ((rect.top + rect.height / 2) / window.innerHeight) * 100;

    setClipOrigin({
      x: `${x}%`,
      y: `${y}%`,
    });
  }, [menuOpen, scrolled]);

  /* ----------------------------------
      Prevent scrolling while menu open
  ---------------------------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <motion.nav
        initial={false}
        animate={{
          top: scrolled ? 16 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 z-50 pointer-events-none"
      >
        <motion.div
          initial={false}
          animate={{
            maxWidth: scrolled ? 850 : 1600,
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.95)"
              : "rgba(255,255,255,0)",
            boxShadow: scrolled
              ? "0 12px 40px rgba(0,0,0,0.12)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            pointer-events-auto
            mx-auto
            flex
            items-center
            justify-between
            backdrop-blur-md
            transition-[padding,border-radius]
            duration-500
            ease-out

            ${
              scrolled
                ? "mx-4 rounded-full px-5 py-3 md:mx-auto md:px-7"
                : "px-6 py-5 md:px-10 lg:px-14"
            }
          `}
        >
          {/* =========================
              LOGO
          ========================== */}
          <Link
            href="/"
            className="
              relative
              z-[70]
              flex
              items-center
              [-webkit-tap-highlight-color:transparent]
            "
          >
            <img
              src="/images/logo.png"
              alt="Teddy Logo"
              className={`
                w-auto
                object-contain
                transition-all
                duration-500

                ${scrolled ? "h-8" : "h-10"}
              `}
            />
          </Link>

          {/* =========================
              MENU BUTTON
          ========================== */}
          <div
            ref={buttonRef}
            role="button"
            tabIndex={0}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setMenuOpen((prev) => !prev);
              }
            }}
            className="
              relative
              z-[70]
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-full
              [-webkit-tap-highlight-color:transparent]
            "
          >
            <div className="relative h-[18px] w-7">
              {/* Top */}
              <motion.span
                initial={false}
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 8 : 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  absolute
                  left-0
                  top-0
                  block
                  h-[2px]
                  w-full
                  rounded-full
                  transition-colors
                  duration-300

                  ${
                    menuOpen
                      ? "bg-blue-600"
                      : scrolled
                      ? "bg-blue-600"
                      : "bg-white"
                  }
                `}
              />

              {/* Middle */}
              <motion.span
                initial={false}
                animate={{
                  opacity: menuOpen ? 0 : 1,
                  scaleX: menuOpen ? 0 : 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`
                  absolute
                  left-0
                  top-1/2
                  block
                  h-[2px]
                  w-full
                  -translate-y-1/2
                  rounded-full
                  transition-colors
                  duration-300

                  ${
                    menuOpen
                      ? "bg-white"
                      : scrolled
                      ? "bg-blue-600"
                      : "bg-white"
                  }
                `}
              />

              {/* Bottom */}
              <motion.span
                initial={false}
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -8 : 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  absolute
                  bottom-0
                  left-0
                  block
                  h-[2px]
                  w-full
                  rounded-full
                  transition-colors
                  duration-300

                  ${
                    menuOpen
                      ? "bg-blue-400"
                      : scrolled
                      ? "bg-blue-600"
                      : "bg-white"
                  }
                `}
              />
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* =========================
          FULLSCREEN MENU
      ========================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{
              clipPath: `circle(0% at ${clipOrigin.x} ${clipOrigin.y})`,
            }}
            animate={{
              clipPath: `circle(150% at ${clipOrigin.x} ${clipOrigin.y})`,
            }}
            exit={{
              clipPath: `circle(0% at ${clipOrigin.x} ${clipOrigin.y})`,
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              inset-0
              z-[40]
              flex
              min-h-screen
              bg-neutral-950
              text-white
            "
          >
            <div
              className="
                mx-auto
                flex
                w-full
                max-w-[1600px]
                flex-col
                justify-end
                px-6
                pb-12
                pt-32
                md:px-10
                md:pb-16
                lg:px-14
              "
            >
              {/* Small menu label */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="
                  mb-8
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Navigation
              </motion.p>

              {/* Main links */}
              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.28 + index * 0.08,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        border-t
                        border-white/10
                      "
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          py-4
                          md:py-3
                        "
                      >
                        <span
                          className={`
                            text-[6vw]
                            font-medium
                            leading-none
                            tracking-[-0.05em]
                            transition-colors
                            duration-300
                            sm:text-2xl
                            md:text-3xl
                            lg:text-3xl

                            ${
                              isActive
                                ? "text-white"
                                : "text-white/40 group-hover:text-white"
                            }
                          `}
                        >
                          {link.label}
                        </span>

                        <motion.span
                          className="
                            text-2xl
                            text-white/30
                            transition-colors
                            group-hover:text-blue-500
                            md:text-3xl
                          "
                        >
                          ↗
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="border-t border-white/10" />
              </div>

              {/* Bottom area */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                }}
                className="
                  mt-10
                  flex
                  flex-col
                  gap-6
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <p className="max-w-sm text-sm leading-relaxed text-white/40">
                  Fullstack developer creating modern digital
                  experiences with thoughtful design and technology.
                </p>

                <Link
                  href="/nidinc"
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-5
                    rounded-full
                    bg-blue-600
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-blue-500
                  "
                >
                  Nid Inc

                  <span className="bg-white rounded-full transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}