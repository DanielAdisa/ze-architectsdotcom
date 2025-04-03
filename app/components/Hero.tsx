"use client"

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiChevronDown, FiPlus, FiChevronsRight } from "react-icons/fi";

// Import images
import first from "@/public/Assets/auberginew_01_viz.jpg"
import second from "@/public/Assets/hero1.jpeg"
import third from "@/public/Assets/cagliari_01_viz.jpg"
import forth from "@/public/Assets/1234.png"
import fifth from "@/public/Assets/cagliari_02_viz.jpg"
import sixth from "@/public/Assets/hero.avif"

const defaultSlides = [
  { 
    image: first, 
    title: 'Aubergine Residences',
    description: 'Modern living spaces designed for comfort and style',
    category: 'Residential'
  },
  { 
    image: second, 
    title: 'Urban Perspectives',
    description: 'Redefining skylines with innovative architectural solutions',
    category: 'Commercial'
  },
  { 
    image: third, 
    title: 'Cagliari Heights',
    description: 'Luxury apartments with panoramic ocean views',
    category: 'Residential'
  },
  { 
    image: forth, 
    title: 'Geometric Harmony',
    description: 'Where mathematical precision meets aesthetic beauty',
    category: 'Mixed-Use'
  },
  { 
    image: fifth, 
    title: 'Cagliari Plaza',
    description: 'Contemporary spaces that foster community connections',
    category: 'Commercial'
  },
  { 
    image: sixth, 
    title: 'Horizon Collection',
    description: 'Pushing boundaries with visionary design concepts',
    category: 'Concept'
  },
];

const Hero = ({ slides = defaultSlides, interval = 8000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  
  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  // Navigation handlers
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000); // Resume autoplay after 10 seconds
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000); // Resume autoplay after 10 seconds
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000); // Resume autoplay after 10 seconds
  };
  
  // Autoplay effect
  useEffect(() => {
    if (!isAutoplay || isHovering) return;
    
    const changeSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const intervalId = setInterval(changeSlide, interval);
    return () => clearInterval(intervalId);
  }, [slides.length, interval, isAutoplay, isHovering]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Animation Layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-[2px] z-0"
        animate={{ 
          backgroundPosition: isHovering ? '100% 0%' : '0% 100%',
          opacity: [0.6, 0.7, 0.6]
        }}
        transition={{ 
          duration: 8, 
          ease: "easeInOut", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      {/* Main Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
          style={{ y }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={`${slides[currentSlide].title}`}
            priority={currentSlide === 0}
            quality={90}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ 
              objectPosition: 'center',
            }}
          />
          
          {/* Gradient overlays for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col justify-end z-10">
        <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="max-w-2xl"
            >
              <motion.span 
                className="inline-block mb-3 py-1 px-3 rounded-full text-xs font-medium tracking-widest bg-white/10 backdrop-blur-sm text-white border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentSlide].category}
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Link href="/projects" className="group inline-flex items-center">
                  <span className="relative inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 text-white overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/30">
                    <span className="relative flex items-center gap-2">
                      Explore Our Projects <FiChevronsRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 md:right-12 z-20 flex items-center gap-3">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <FiArrowLeft />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <FiArrowRight />
        </motion.button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-8 md:left-12 z-20 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/70 rotate-90 origin-bottom-left translate-y-5">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown className="text-white/70 text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

