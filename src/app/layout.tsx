import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Kumar — Software Developer",
  description:
    "Full-stack software developer specializing in MERN stack. Building performant, user-friendly web applications.",
  keywords: [
    "Ayush Kumar",
    "Software Developer",
    "Full Stack",
    "MERN",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Ayush Kumar" }],
  openGraph: {
    title: "Ayush Kumar — Software Developer",
    description:
      "Full-stack software developer specializing in MERN stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
