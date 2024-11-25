import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ZE-Architects",
  description: "Website for ZE Architects, an architectural firm located in Dublin",
  icons: {
    icon: "/zealogo.svg", // Path to your favicon
  },
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
        <main className="flex-grow">{children}</main>

        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
