import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dhunanyan - About",
  description:
    "Get to know me better - my journey, skills, and the motivation that drives my work. Let's connect on a more personal level.",
  keywords: "About Me, Personal Journey, Skills, Motivation",
  authors: [{ name: "dhunanyan" }],
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
