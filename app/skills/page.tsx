"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Skills from "../../components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function SkillsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="w-full h-[40vh] flex flex-col items-center justify-center px-8 py-20 bg-gray-300">
                <h1 className="text-5xl font-bold mb-4 text-center">My <span>Skills</span></h1>
            </section>
            <Skills />
            <Projects />
            <Footer />
        </main>
    );
}