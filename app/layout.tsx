import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "Teddy",
  description: "A developer with a passion for creating elegant solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
