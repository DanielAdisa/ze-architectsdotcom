'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use `usePathname` for active states in Next.js 13
import { FaArrowPointer, FaBars, FaMaximize, } from 'react-icons/fa6';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
    const pathname = usePathname(); // For active state tracking
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
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, [isMobileMenuOpen]);

    const routes = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/archviz', label: 'ArchViz' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string): boolean => pathname === path;

    return (
        <header
            className={`${
                header ? 'bg-white shadow-xl text-black' : 'backdrop-blur-xl text-white'
            } fixed top-0 w-full z-50 transition-all duration-300`}
        >
            <nav className="max-w-[95%] mx-auto flex items-center justify-between h-16 px-4 lg:px-0">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Avatar>
                        <AvatarFallback
                            className={`${
                                header ? 'text-black bg-gray-200' : 'text-white bg-black'
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
                    {isMobileMenuOpen ? <FaMaximize /> : <FaBars />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-10 text-lg font-medium">
                    {routes.map(({ path, label }) => (
                        <Link
                            key={path}
                            href={path}
                            className={`${
                                isActive(path)
                                    ? 'text-stone-50 font-semibold bg-blue-500/70 p-2 pl-4 pr-4 rounded-full hover:bg-stone-500/50'
                                    : header
                                    ? 'hover:text-gray-700 text-stone-50 bg-stone-500/60   p-2 pl-4 pr-4 rounded-full hover:bg-stone-500/50'
                                    : 'hover:text-gray-300  bg-white/10  p-2 pl-4 pr-4 rounded-full hover:bg-stone-500/50'
                            } transition duration-300`}
                        >
                            {label}
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
                        <FaMaximize  />
                    </button>
                    {routes.map(({ path, label }) => (
                        <Link
                            key={path}
                            href={path}
                            className={`${
                                isActive(path) ? 'text-blue-400' : 'hover:text-gray-200'
                            } transition duration-300`}
                            onClick={toggleMobileMenu}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
