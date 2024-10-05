import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dhunanyan - projects",
  description:
    "Explore my diverse portfolio showcasing my skills, creativity, and passion. Each project tells a unique story, and I'm eager to share them with you.",
  keywords: "Portfolio, Projects, Creative Work, Skills Showcase",
  authors: [{ name: "dhunanyan" }],
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
