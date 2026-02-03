"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Skills from "../../components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SkillsPage() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    });

    // Move background vertically for parallax
    const y = useTransform(scrollYProgress, [0, 1], ["-60%", "60%"]);

    return (
        <main className="min-h-screen">
            <Navbar />
            <section
                ref={ref}
                className="relative h-[40vh] overflow-hidden flex items-center justify-center"
                >
                {/* Background */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[url('/images/skills-bg.jpg')] bg-cover bg-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <h1 className="relative text-5xl font-bold text-white text-center">
                    My <span className="text-primary">Skills</span>
                </h1>
            </section>
            <Skills />
            <Projects />
            <Footer />
        </main>
    );
}