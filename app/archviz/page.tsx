'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import zubi from '@/public/Assets/hero1.jpeg';
import { PROJECTS, projects } from '@/data/data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectFilter from '../components/ProjectFilter';
import { 
  RiArrowLeftSLine, 
  RiArrowRightSLine, 
  RiCloseLine,
  RiBuilding4Line,
  RiZoomInLine,
  RiHotelLine
} from "react-icons/ri";

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = new Set(projects.map(p => p.category));
    return Array.from(uniqueCategories);
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((_, index) => projects[index]?.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    // Staggered animation for gallery items
    const timer = setTimeout(() => {
      const indices = Array.from({ length: filteredProjects.length }, (_, i) => i);
      setAnimatedItems(indices);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showNext = () => setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  const showPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-200 dark:from-stone-900 dark:to-stone-800">
      {/* Hero Section with Parallax effect */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={zubi}
            alt="Architectural Visualization"
            layout="fill"
            className="object-cover scale-105 transition-transform duration-[3000ms]"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-4 md:p-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-2"
            >
              <RiBuilding4Line className="inline-block text-6xl text-stone-100 mb-6" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Architectural Visualization
            </motion.h1>
            
            <motion.div 
              className="relative flex items-center justify-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <RiHotelLine 
                className="text-stone-400/40 absolute -left-8 -top-4 transform -scale-x-100" 
                size={40} 
              />
              <motion.p 
                className="text-xl md:text-2xl font-serif italic text-stone-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                "Less is only more where more is no good."
                <span className="block mt-2 text-stone-400 text-base">– Frank Lloyd Wright</span>
              </motion.p>
              <RiHotelLine 
                className="text-stone-400/40 absolute -right-8 -bottom-4" 
                size={40} 
              />
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8"
            >
              <Button 
                className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-20 text-white rounded-full px-8 py-6 font-medium transition-all duration-300"
                onClick={() => window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                })}
              >
                Explore Gallery
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Section with Modern Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-3 text-stone-800 dark:text-stone-100"
            >
              Our Projects
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-gradient-to-r from-stone-400 to-stone-600 mb-6"
            ></motion.div>
          </div>
          
          {/* Filter Component */}
          <ProjectFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        
        {/* Projects Grid with Filtering */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={animatedItems.includes(index) ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div 
                    onClick={() => openModal(index)}
                    className="relative h-80 w-full overflow-hidden rounded-xl cursor-pointer bg-stone-200 dark:bg-stone-800"
                  >
                    {/* Glass card effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    
                    {/* Project category tag */}
                    {projects[index]?.category && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-black/30 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                          {projects[index].category}
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transition-transform duration-300">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      
                      {/* Desktop buttons (visible on hover) */}
                      <div className="hidden md:flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(index);
                          }}
                          className="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 hover:bg-white/30 text-white rounded-full p-2"
                        >
                          <RiZoomInLine size={20} />
                        </Button>
                        <Link href={`/archviz/${project.id}`} passHref>
                          <Button 
                            className="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                      
                      {/* Mobile button (always visible) */}
                      <div className="flex md:hidden items-center justify-between mt-2">
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(index);
                          }}
                          className="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 hover:bg-white/30 text-white rounded-full p-2"
                        >
                          <RiZoomInLine size={20} />
                        </Button>
                        <Link href={`/archviz/${project.id}`} passHref>
                          <Button 
                            className="bg-white bg-opacity-20 backdrop-blur-md border border-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center"
              >
                <p className="text-xl text-stone-500 dark:text-stone-400">No projects found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal with Improved UI */}
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-5xl w-full bg-stone-900/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Close Button */}
            <Button
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white w-10 h-10 p-0 rounded-full backdrop-blur-sm"
              onClick={closeModal}
            >
              <RiCloseLine size={24} />
            </Button>

            {/* Image Display */}
            <div className="relative w-full h-[70vh]">
              <Image
                src={filteredProjects[currentIndex].image}
                alt={filteredProjects[currentIndex].title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-6 bg-gradient-to-t from-black/80 to-transparent">
              <Button
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center"
                onClick={showPrevious}
              >
                <RiArrowLeftSLine size={24} className="text-white" />
              </Button>
              
              <div className="flex flex-col items-center">
                <h2 className="text-white text-xl font-semibold px-6 py-2 bg-black/30 backdrop-blur-md rounded-full">
                  {filteredProjects[currentIndex].title}
                </h2>
                {projects[filteredProjects.findIndex(p => p.id === filteredProjects[currentIndex].id)]?.category && (
                  <span className="text-stone-300 text-sm mt-2">
                    {projects[filteredProjects.findIndex(p => p.id === filteredProjects[currentIndex].id)].category}
                  </span>
                )}
              </div>
              
              <Button
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center"
                onClick={showNext}
              >
                <RiArrowRightSLine size={24} className="text-white" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Page;
