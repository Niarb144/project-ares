"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NidincPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="w-full h-[40vh] flex flex-col items-center justify-center px-8 py-20 bg-gray-300">
                <h1 className="text-5xl font-bold mb-4 text-center">Nidinc Project</h1>
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
                    <li><a href="/snake" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Snake Game</a></li>
                    <li><a href="/breakout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Breakout Game</a></li>
                </ul>   
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}