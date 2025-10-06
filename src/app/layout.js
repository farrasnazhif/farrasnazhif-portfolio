import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "My Portfolio | Built with Next.js",
  description:
    "A modern portfolio built using Next.js, React, and Tailwind CSS.",
  keywords: ["Next.js", "React", "Portfolio", "Frontend Developer"],
  authors: [{ name: "Your Name", url: "https://farrasnazhif.com" }],
  openGraph: {
    title: "My Portfolio",
    description:
      "A sleek portfolio website showcasing projects and creativity.",
    url: "https://farrasnazhif.com",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://farrasnazhif.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "farrasnazhif",
    title: "My Portfolio",
    description: "A modern portfolio built with Next.js",
    creator: "@farrasnazhif",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};

// ✅ Root Layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
