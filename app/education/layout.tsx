import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dhunanyan - Education",
  description:
    "Explore my educational background and the continuous pursuit of knowledge that fuels my professional growth. Education is a lifelong journey, and I'm dedicated to it.",
  keywords:
    "Education, Academic Background, Lifelong Learning, Professional Growth",
  authors: [{ name: "dhunanyan" }],
};

export default function EducationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
