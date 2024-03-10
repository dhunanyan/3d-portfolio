import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dhunanyan - Contact",
  description:
    "Connect with me to discuss potential collaborations, projects, or simply to connect. I'm excited to hear from you.",
  keywords: "Contact Me, Collaboration, Project Inquiry, Networking",
  authors: [{ name: "dhunanyan" }],
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
