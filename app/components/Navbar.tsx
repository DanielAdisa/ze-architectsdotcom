'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiInfo, 
  FiBriefcase, 
  FiImage, 
  FiMail,
  FiChevronRight
} from 'react-icons/fi';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [header, setHeader] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollHeader = () => {
        if (!isMobileMenuOpen) {
            setHeader(window.scrollY >= window.innerHeight * 0.05);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, [isMobileMenuOpen]);

    const routes = [
        { path: '/', label: 'Home', icon: <FiHome className="inline-block mr-2" /> },
        { path: '/about', label: 'About', icon: <FiInfo className="inline-block mr-2" /> },
        { path: '/projects', label: 'Projects', icon: <FiBriefcase className="inline-block mr-2" /> },
        { path: '/archviz', label: 'ArchViz', icon: <FiImage className="inline-block mr-2" /> },
        { path: '/contact', label: 'Contact', icon: <FiMail className="inline-block mr-2" /> },
    ];

    const isActive = (path: string): boolean => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    return (
        <header
            className={`${
                header 
                    ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] text-slate-900' 
                    : 'bg-black/20 backdrop-blur-xl text-white'
            } fixed top-0 w-full z-50 transition-all duration-500`}
        >
            <div className="max-w-[95%] mx-auto">
                <nav className="flex items-center justify-between h-16 px-4 lg:px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative overflow-hidden rounded-full">
                            <Avatar className="ring-2 ring-offset-2 ring-offset-transparent transition-all duration-300 ring-white/20 group-hover:ring-white/50">
                                <AvatarFallback
                                    className={`${
                                        header ? 'text-slate-900 bg-gradient-to-br from-gray-100 to-gray-300' : 'text-white bg-gradient-to-br from-slate-800 to-slate-900'
                                    } transition duration-300`}
                                >
                                    ZE
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                        </div>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-xl text-inherit transition-all duration-300 ease-in-out"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1 text-[15px] font-medium">
                        {routes.map(({ path, label, icon }) => (
                            <Link
                                key={path}
                                href={path}
                                className="relative px-5 py-2 mx-1"
                                onMouseEnter={() => setHoveredItem(path)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <span className="relative z-10 flex items-center">
                                    {isActive(path) && icon}
                                    {label}
                                    {isActive(path) && (
                                        <FiChevronRight className="ml-1 w-3 h-3 animate-pulse" />
                                    )}
                                </span>
                                
                                {/* Background effect */}
                                {isActive(path) ? (
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full -z-0"></span>
                                ) : (
                                    hoveredItem === path && (
                                        <span className="absolute inset-0 bg-white/10 rounded-full -z-0 backdrop-blur-sm"></span>
                                    )
                                )}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Mobile Fullscreen Menu - with AnimatePresence for smooth transitions */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 h-screen bg-gradient-to-br from-slate-900/95 to-black/95 backdrop-blur-md flex flex-col items-center justify-center z-50"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={toggleMobileMenu}
                            className="absolute top-6 right-6 text-2xl p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                            aria-label="Close menu"
                        >
                            <FiX />
                        </motion.button>
                        
                        <div className="flex flex-col space-y-6 w-full max-w-md px-8">
                            {routes.map(({ path, label, icon }) => (
                                <motion.div
                                    key={path}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.3, delay: routes.findIndex(route => route.path === path) * 0.1 }}
                                >
                                    <Link
                                        href={path}
                                        className={`group flex items-center justify-between p-4 ${
                                            isActive(path) 
                                                ? 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80 text-white rounded-xl' 
                                                : 'hover:bg-white/5 text-gray-200 hover:text-white rounded-xl transition-all duration-300'
                                        }`}
                                        onClick={toggleMobileMenu}
                                    >
                                        <div className="flex items-center">
                                            <div className={`mr-4 ${isActive(path) ? 'text-white' : 'text-gray-400'}`}>
                                                {icon}
                                            </div>
                                            <span className="text-lg font-medium">{label}</span>
                                        </div>
                                        <FiChevronRight className={`transform transition-transform duration-300 ${isActive(path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
