"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HermesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="w-full h-[40vh] flex flex-col items-center justify-center px-8 py-20 bg-gray-300">
                <h1 className="text-5xl font-bold mb-4 text-center">Hermes Project</h1>
            </section>
            <div className="max-w-6xl mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <a href="https://path-to-hermes.netlify.app/">
                        <img src="/images/hermes1.png" alt="Hermes Project Screenshot" className="w-auto h-[40dvh] rounded-lg shadow-lg" />
                    </a>
                
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}