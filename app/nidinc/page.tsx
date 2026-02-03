"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function NidincPage() {
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
                className="relative h-[50vh] overflow-hidden flex items-center justify-center"
                >
                {/* Background */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[url('/images/nidinc-bg.jpg')] bg-cover bg-bottom"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <h1 className="relative text-5xl font-bold text-white text-center">
                    Nid<span className="text-primary">inc</span>
                </h1>
            </section>
            <div className="max-w-6xl mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                <ul className="list-disc list-inside space-y-4 text-lg text-gray-800">
                    <li><a href="/tictactoe" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Tic Tac Toe</a></li>
                    <li><a href="/hermes" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Hermes</a></li>
                    <li><a href="/breakout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Breakout Game</a></li>
                </ul>   
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}