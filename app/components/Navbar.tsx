"use client";

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [header, setHeader] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollHeader = () => {
        if (!isMobileMenuOpen) {
            setHeader(window.scrollY >= window.innerHeight * 0.1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`${
                header ? "bg-white shadow-xl text-black" : "backdrop-blur-md text-white"
            } fixed top-0 w-full z-50 transition-all duration-300`}
        >
            <nav className="max-w-[95%] mx-auto flex items-center justify-between h-16 px-4 lg:px-0">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Avatar>
                        <AvatarFallback
                            className={`${
                                header ? "text-black bg-gray-200" : "text-white bg-black"
                            } transition duration-300`}
                        >
                            ZE
                        </AvatarFallback>
                    </Avatar>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden p-2 text-2xl text-inherit transition-all ease-in-out"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-10 text-lg font-medium">
                    {["About", "Team", "Projects","ArchViz", "Insights", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className={`${
                                header ? "hover:text-gray-700 bg-stone-500/60 p-2 pl-4 pr-4 rounded-full hover:bg-stone-500/50" : "hover:text-gray-300 p-2 pl-4 pr-4 hover:bg-black/10 bg-black/15 rounded-full"
                            } transition duration-300`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 h-screen bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold z-50">
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute top-6 right-6 text-3xl"
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                    {["/","About", "Team", "Projects","ArchViz", "Insights", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="hover:text-gray-200"
                            onClick={toggleMobileMenu}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
