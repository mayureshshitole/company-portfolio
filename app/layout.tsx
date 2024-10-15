import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ambicube | From ideas to reality, empowering your digital journey",
  description:
    "Discover innovative software development solutions with Ambicube. We specialize in custom web and mobile app development, AI/ML development, Data Analysis, Cloud Solutions, delivering tailored, scalable, and cutting-edge technology to empower your business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
