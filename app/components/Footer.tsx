import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="absolute b-0 w-full flex flex-col items-center justify-center px-8 py-6 bg-gray-800 text-white mt-12"> 
        <div className="mb-4 flex justify-center gap-4" id="socials">
            <Link href="http://github.com" className="mx-3 hover:text-blue-400"><FaGithub /></Link>
            <Link href="https://linkedin.com/in/teddybrian543" className="mx-3 hover:text-blue-400"><FaLinkedinIn /></Link>
            <Link href="https://x.com/teddybrian543" className="mx-3 hover:text-blue-400"><FaXTwitter /></Link>
            <Link href="https://instagram.com/teddybrian543" className="mx-3 hover:text-blue-400"><FaInstagram /></Link>    
        </div>   
        <div className="text-sm">&copy; {new Date().getFullYear()} Teddy. All rights reserved.</div>
    </footer>
  );
}