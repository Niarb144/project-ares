import React from "react";
import Link from "next/link";

export default function Contact(){
    return (
        <section id="contact" className="w-full flex flex-col items-center justify-center px-8 py-12 mt-12 bg-gray-100">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg mb-8 text-center max-w-2xl">I'm always open to discussing new projects, creative ideas,
                 or opportunities to be part of your visions. Feel free to reach out!<Link href="mailto:teddybrian543@gmail.com" className="px-6 py-3 text-blue-500">Contact Me</Link></p>
            
            <form className="w-full max-w-lg mt-12">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" placeholder="Your Name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" placeholder="
                    Your Email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows={5} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send Message</button>
            </form>
        </section>
    );
}