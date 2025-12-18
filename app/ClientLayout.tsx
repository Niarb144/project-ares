"use client";

import { useEffect, useState } from "react";
import TransitionProvider from "@/components/TransitionProvider";
import IntroLoader from "@/components/IntroLoader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Mark when we're on the client
  useEffect(() => {
    setMounted(true);
    const played = sessionStorage.getItem("introPlayed");
    if (played) setShowIntro(false);
  }, []);

  const finishIntro = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {showIntro && <IntroLoader onFinish={finishIntro} />}
      {!showIntro && <TransitionProvider>{children}</TransitionProvider>}
    </>
  );
}
