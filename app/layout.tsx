import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
