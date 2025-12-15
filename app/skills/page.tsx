"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Skills from "../../components/Skills";
import Footer from "@/components/Footer";

export default function SkillsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Skills />
            <Footer />
        </main>
    );
}