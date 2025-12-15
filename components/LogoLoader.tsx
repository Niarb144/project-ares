"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}

        className="w-20 h-20"
      >
        <Image
          src="/favicon.png"
          alt="Loading"
          width={80}
          height={80}
          priority
        />
      </motion.div>
    </div>
  );
}
