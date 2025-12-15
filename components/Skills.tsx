import React from "react";
import Link from "next/link";

export default function Skills() {
    return (
        <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full px-8">
                {/* Skill Item Example */}
                <div className="flex flex-col items-center">
                    <img src="/images/html5.png" alt="HTML5" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">HTML5</h3>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/css3.png" alt="CSS3" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">CSS3</h3>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/javascript.png" alt="JavaScript" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">JavaScript</h3>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/react.webp" alt="React" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">React</h3>
                </div>
                <div className="flex flex-col items-center">    
                    <img src="/images/nodejs.png" alt="Node.js" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">Node.js</h3>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/nextjs.png" alt="Next.js" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">Next.js</h3>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/tailwindcss.png" alt="Tailwind CSS" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">Tailwind CSS</h3>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/git.png" alt="Git" className="w-16 h-16 mb-4"/>
                    <h3 className="text-xl font-semibold">Git</h3>
                </div>
            </div>
        </section>
    );
}