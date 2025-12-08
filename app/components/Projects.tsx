import React from "react";
import Link from "next/link";

export default function Projects() {
    return (
        <section className="w-full py-20 px-8 bg-white" id="projects">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card Example */}
                <div className="border rounded-lg overflow-hidden shadow-lg">
                    <img src="/images/abok.png" alt="Project 1" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">Project One</h3>
                        <p className="text-gray-700 mb-4">A brief description of Project One highlighting its features and technologies used.</p>
                        <Link href="https://abokadventures.com" target="_blank" className="text-blue-600 hover:underline">View Project</Link>
                    </div>
                </div>
                <div className="border rounded-lg overflow-hidden shadow-lg">
                    <img src="/images/epione.png" alt="Project 2" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
                        <p className="text-gray-700 mb-4">A brief description of Project Two highlighting its features and technologies used.</p>
                        <Link href="https://epione-health.com" target="_blank" className="text-blue-600 hover:underline">View Project</Link>
                    </div>
                </div>
                <div className="border rounded-lg overflow-hidden shadow-lg">
                    <img src="/images/imaara-main.png" alt="Project 3" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
                        <p className="text-gray-700 mb-4">A brief description of Project Three highlighting its features and technologies used.</p>
                        <Link href="https://theimaara.co.ke" target="_blank" className="text-blue-600 hover:underline">View Project</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}