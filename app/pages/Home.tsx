import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <Hero />  
        <Projects />
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}