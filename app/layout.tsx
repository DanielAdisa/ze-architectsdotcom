// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "ZE-Architects",
  description: "Website for ZE Architects a architectural firm located in Dublin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content area, takes up remaining space */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
