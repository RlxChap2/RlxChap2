import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "/avatar.png",
  title: "Mohammed Mahmoud",
  description: "Mohammed Mahmoud Portfolio",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "Mohammed Mahmoud - Portfolio",
    description:
      "Explore the portfolio of Mohammed Mahmoud, showcasing my work, skills, and projects.",
    url: "https://www.relaxdev.site",
    siteName: "Mohammed Mahmoud Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Mahmoud Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mahmoud - Portfolio",
    description: "Explore the portfolio of Mohammed Mahmoud.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Mahmoud Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
