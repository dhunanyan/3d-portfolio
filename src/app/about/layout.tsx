import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.jfif" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
