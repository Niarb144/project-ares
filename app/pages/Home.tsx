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
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}