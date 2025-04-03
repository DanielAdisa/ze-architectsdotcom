// Footer.tsx

"use client";

import Link from "next/link";
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaChevronUp,
  FaRegCopyright,
  FaBuilding,
  FaGlobe
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Control visibility of back-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Modern decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <div className="absolute w-full h-24 bg-blue-900 -top-12 rounded-[100%] opacity-20"></div>
      </div>
      
      {/* Background with advanced gradient */}
      <div className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900 text-stone-50 pt-16 pb-8">
        {/* Decorative background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-blue-300/5 blur-2xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-200px,rgba(120,180,255,0.15),transparent)] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          {/* Company and Logo Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-white/10 pb-12">
            <div className="flex items-center mb-8 md:mb-0">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg mr-3">
                <FaBuilding className="text-2xl text-white" />
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">ZE Architects</h2>
                <p className="text-blue-200 text-sm mt-1">Designing the future</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 rounded-l-full backdrop-blur-sm">
                <FaGlobe className="inline-block mr-1 text-blue-300" /> Global
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-indigo-500/20 rounded-r-full backdrop-blur-sm">
                Architecture & Design
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Address Section - Redesigned */}
            <div className="backdrop-blur-md bg-white/5 p-6 rounded-3xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-500 mr-3">
                  <FaMapMarkerAlt className="text-blue-300" />
                </span>
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-stone-50 to-blue-200">
                  Visit Us
                </h3>
              </div>
              <div className="space-y-4 text-stone-200">
                <div className="group/item flex items-start gap-3 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 blur opacity-0 group-hover/item:opacity-70 transition-all duration-300"></div>
                    <span className="relative z-10 mt-1 text-blue-300"><FaMapMarkerAlt /></span>
                  </div>
                  <span className="group-hover/item:text-blue-100 transition-all duration-300">
                    1 Rosse Court Heights, Balgaddy,<br /> Lucan, Co. Dublin
                  </span>
                </div>
                <div className="group/item flex items-center gap-3 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 blur opacity-0 group-hover/item:opacity-70 transition-all duration-300"></div>
                    <span className="relative z-10 text-blue-300"><FaPhoneAlt /></span>
                  </div>
                  <span className="group-hover/item:text-blue-100 transition-all duration-300">+353 86 1750772</span>
                </div>
                <div className="group/item flex items-center gap-3 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 blur opacity-0 group-hover/item:opacity-70 transition-all duration-300"></div>
                    <span className="relative z-10 text-blue-300"><FaEnvelope /></span>
                  </div>
                  <Link 
                    href="mailto:zubi@ze-architects.com" 
                    className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full group-hover/item:text-blue-100"
                  >
                    zubi@ze-architects.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="backdrop-blur-md bg-white/5 p-6 rounded-3xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-500 mr-3">
                  <FaGlobe className="text-blue-300" />
                </span>
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-stone-50 to-blue-200">
                  Explore
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="group/link flex items-center text-stone-200 hover:text-blue-100 transition-all duration-300">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 group-hover/link:w-2 transition-all duration-300"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="group/link flex items-center text-stone-200 hover:text-blue-100 transition-all duration-300">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 group-hover/link:w-2 transition-all duration-300"></span>
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="/archviz" className="group/link flex items-center text-stone-200 hover:text-blue-100 transition-all duration-300">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 group-hover/link:w-2 transition-all duration-300"></span>
                    Arch Visualization
                  </Link>
                </li>
                <li>
                  <Link href="/practice" className="group/link flex items-center text-stone-200 hover:text-blue-100 transition-all duration-300">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 group-hover/link:w-2 transition-all duration-300"></span>
                    Our Practice
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="group/link flex items-center text-stone-200 hover:text-blue-100 transition-all duration-300">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover/link:opacity-100 group-hover/link:w-2 transition-all duration-300"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Section - Enhanced */}
            <div className="backdrop-blur-md bg-white/5 p-6 rounded-3xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-500 mr-3">
                  <FaInstagram className="text-blue-300" />
                </span>
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-stone-50 to-blue-200">
                  Connect
                </h3>
              </div>
              <ul className="flex flex-wrap gap-3 mb-6">
                <li>
                  <Link 
                    href="#" 
                    aria-label="LinkedIn"
                    className="group/social flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-blue-600/50 hover:to-blue-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <FaLinkedinIn className="text-xl text-stone-50 group-hover/social:text-blue-100" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover/social:opacity-100 transition-all duration-300">LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    aria-label="Twitter"
                    className="group/social flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-sky-500/50 hover:to-sky-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20"
                  >
                    <FaTwitter className="text-xl text-stone-50 group-hover/social:text-sky-100" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover/social:opacity-100 transition-all duration-300">Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    aria-label="Instagram"
                    className="group/social flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-pink-500/50 hover:via-red-500/50 hover:to-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
                  >
                    <FaInstagram className="text-xl text-stone-50 group-hover/social:text-pink-100" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover/social:opacity-100 transition-all duration-300">Instagram</span>
                  </Link>
                </li>
              </ul>
              <p className="text-sm text-stone-300 text-center">Follow our latest projects and updates</p>
            </div>

            {/* Newsletter - New Section */}
            <div className="backdrop-blur-md bg-white/5 p-6 rounded-3xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-500 mr-3">
                  <FaEnvelope className="text-blue-300" />
                </span>
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-stone-50 to-blue-200">
                  Newsletter
                </h3>
              </div>
              <p className="text-sm text-stone-300 mb-4">Subscribe to get the latest updates on our projects and innovations.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-stone-400 text-sm transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium py-1.5 px-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom Section */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-stone-400 mb-4 md:mb-0">
              <FaRegCopyright className="mr-1.5 text-stone-500" /> 
              <span>{new Date().getFullYear()} ZE Architects. All rights reserved.</span>
            </div>
            <div className="flex items-center">
              <Link 
                href="https://daniel-port-sept.vercel.app/" 
                className="text-sm text-stone-400 hover:text-blue-300 transition-colors duration-300"
              >
                Built by Adisa Made It
              </Link>
              <span className="mx-4 h-1 w-1 rounded-full bg-stone-700"></span>
              <button 
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`group flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <FaChevronUp className="text-sm text-blue-300 group-hover:text-blue-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
