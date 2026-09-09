"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clipOrigin, setClipOrigin] = useState({ x: "95%", y: "5%" });
  const pathname = usePathname();

  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    setClipOrigin({ x: `${x}%`, y: `${y}%` });
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contacts", label: "Contact" },
  ];

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.75)" : "rgba(10,10,10,0)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b transition-colors duration-500"
    >
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 z-50 group [-webkit-tap-highlight-color:transparent]"
        >
          <img
            src="/images/logo.png"
            alt="TuffSteel Logo"
            className={`transition-all duration-500 ${
              scrolled ? "h-8" : "h-10"
            } w-auto opacity-90 group-hover:opacity-100`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 absolute left-1/2 -translate-x-1/2 font-medium text-sm tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative group py-1 [-webkit-tap-highlight-color:transparent] outline-none"
              >
                <span
                  className={`transition-colors duration-200 ${
                    isActive ? "text-white" : "text-neutral-400 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-white transition-[width] duration-200 ease-out
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Section (CTA) */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/nidinc"
            className="relative px-5 py-2 rounded-full font-medium text-sm text-white border border-white/25 overflow-hidden group [-webkit-tap-highlight-color:transparent] outline-none"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out" />
            <span className="relative z-10 transition-colors duration-200 group-hover:text-black">
              Nid Inc
            </span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          ref={buttonRef}
          className="lg:hidden relative w-6 h-5 flex flex-col justify-between cursor-pointer z-[60] [-webkit-tap-highlight-color:transparent]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
            className={`block w-full h-[2px] rounded-full ${
              scrolled || menuOpen ? "bg-white" : "bg-neutral-900"
            }`}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className={`block w-full h-[2px] rounded-full ${
              scrolled || menuOpen ? "bg-white" : "bg-neutral-900"
            }`}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
            className={`block w-full h-[2px] rounded-full ${
              scrolled || menuOpen ? "bg-white" : "bg-neutral-900"
            }`}
          />
        </div>
      </div>

      {/* Radial Expanding Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ clipPath: `circle(0% at ${clipOrigin.x} ${clipOrigin.y})` }}
            animate={{ clipPath: `circle(150% at ${clipOrigin.x} ${clipOrigin.y})` }}
            exit={{ clipPath: `circle(0% at ${clipOrigin.x} ${clipOrigin.y})` }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-neutral-950 text-white flex flex-col items-center justify-center space-y-8 text-lg font-medium lg:hidden z-[40]"
          >
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative transition-colors duration-200 [-webkit-tap-highlight-color:transparent] outline-none ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-px bg-white" />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + navLinks.length * 0.1 }}
            >
              <div className="mt-6 flex flex-col items-center gap-6">
                <Link
                  href="/nidinc"
                  onClick={() => setMenuOpen(false)}
                  className="relative px-6 py-2 rounded-full font-medium text-sm border border-white/25 overflow-hidden group [-webkit-tap-highlight-color:transparent] outline-none"
                >
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out" />
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-black">
                    Nid Inc
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}