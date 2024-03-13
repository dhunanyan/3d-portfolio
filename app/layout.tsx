import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dhunanyan - Home",
  description:
    "Explore the intersection of passion and proficiency as [Your Name] presents a journey through projects, educational endeavors, and career milestones. Dive into a world where creativity meets expertise, and where each project is a testament to a commitment to excellence.",
  keywords: "Portfolio, Software Engineer, Creative Professional, Expertise",
  authors: [{ name: "dhunanyan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.jfif" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
