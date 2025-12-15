import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="text-2xl font-bold">
            <img src="/images/logo.png" alt="Teddy Logo" className="h-8 w-auto inline-block mr-2"/>    
        </div> 
        <div className="space-x-6">
            <Link href="#home" className="mx-3 hover:text-blue-400">Home</Link>
            <Link href="#projects" className="mx-3 hover:text-blue-400">Projects</Link>
            <Link href="#skills" className="mx-3 hover:text-blue-400">Skills</Link>
            <Link href="#contact" className="mx-3 hover:text-blue-400">Contact</Link>
            <Link href="/tictactoe">Tic Tac</Link>
        </div>
    </nav>
    );
}