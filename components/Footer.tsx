import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="absolute b-0 w-full flex flex-col items-center justify-center px-8 py-6 bg-blue-400 text-white mt-12"> 
        <div className="mb-4 flex justify-center gap-4" id="socials">
            <Link href="https://github.com/Niarb144" target="_blank" className="mx-3 hover:text-blue-400"><FaGithub /></Link>
            <Link href="https://www.linkedin.com/in/teddy-brian-7a0057228/" target="_blank" className="mx-3 hover:text-blue-400"><FaLinkedinIn /></Link>
            <Link href="https://x.com/BrianTeddy7" target="_blank" className="mx-3 hover:text-blue-400"><FaXTwitter /></Link>
            <Link href="https://www.instagram.com/pendoria_/" target="_blank" className="mx-3 hover:text-blue-400"><FaInstagram /></Link>    
        </div>   
        <div className="text-sm">&copy; {new Date().getFullYear()} Teddy. All rights reserved.</div>
    </footer>
  );
}