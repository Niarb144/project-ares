import React from "react";
import Link from "next/link";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Expertise from "../../components/Expertise";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";


export default function HomePage() {
  return (
    <div className="">
      <main className="">
        
        <Hero />  
        <About />
        <Expertise />
        <Projects />
        <Skills />
        <Contact />
        
      </main>
    </div>
  );
}