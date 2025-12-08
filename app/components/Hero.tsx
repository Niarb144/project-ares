import React from "react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full h-dvh flex flex-col items-center justify-center px-8 py-20 bg-gray-100">
            <h1 className="text-5xl font-bold mb-4 text-center">Welcome to Teddy's Portfolio</h1>
            <p className="text-lg mb-8 text-center max-w-2xl">Discover my projects, skills, and experience in web development. Let's build something amazing together!</p>
            <Link href="#contacts" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Let's Connect</Link>
        </section>
    );
}