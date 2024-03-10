import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dhunanyan - Career Path",
  description:
    "Navigate through my professional journey, milestones, and aspirations. Join me as I continue to grow and contribute in the ever-evolving world of technology.",
  keywords: "Career Path, Professional Journey, Milestones, Aspirations",
  authors: [{ name: "dhunanyan" }],
};

export default function CareerPathLayout({
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
