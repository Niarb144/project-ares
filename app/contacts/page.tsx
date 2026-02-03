"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactPage() {
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
                    className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <h1 className="relative text-5xl font-bold text-white text-center">
                    My <span className="text-primary">Contacts</span>
                </h1>
            </section>
            <Contact />
            <Footer />
        </main>
    );
}