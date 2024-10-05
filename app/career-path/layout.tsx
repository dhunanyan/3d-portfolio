import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dhunanyan - career path",
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
  return children;
}
