
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  onFinish: () => void;
};

const DURATION = 1800;

export default function IntroLoader({ onFinish }: Props) {
  const [dots, setDots] = useState(0);

  // Animated ellipses
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex w-64 flex-col items-center justify-center gap-5">

        {/* Decoding text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center font-mono text-2xl tracking-[0.25em] text-white"
        >
          <span>Decoding</span>

          <span className="inline-block w-8 text-left">
            {".".repeat(dots)}
          </span>
        </motion.div>

        {/* Loading bar */}
        <div className="h-[4px] w-full overflow-hidden bg-white/15">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: DURATION / 1000,
              ease: "easeInOut",
            }}
            onAnimationComplete={onFinish}
          />
        </div>

      </div>
    </motion.div>
  );
}
