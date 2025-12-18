"use client";

import { useState } from "react";
import TransitionProvider from "@/components/TransitionProvider";
import IntroLoader from "@/components/IntroLoader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("introPlayed");
  });

  const finishIntro = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroLoader onFinish={finishIntro} />}

      {!showIntro && (
        <TransitionProvider>
          {children}
        </TransitionProvider>
      )}
    </>
  );
}
