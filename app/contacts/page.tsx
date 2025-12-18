"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="w-full h-[40vh] flex flex-col items-center justify-center px-8 py-20 bg-gray-300">
                <h1 className="text-5xl font-bold mb-4 text-center">Let's <span>Chat</span></h1>
            </section>
            <Contact />
            <Footer />
        </main>
    );
}