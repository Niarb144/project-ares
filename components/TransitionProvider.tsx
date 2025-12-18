"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
