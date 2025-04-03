"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/data';
import { Project } from '@/types/types';
import zubi from '@/public/Assets/hero1.jpeg';
import ProjectsHero from '../components/ProjectsHero';
import ProjectFilter from '../components/ProjectFilter';
import ProjectsGrid from '../components/ProjectsGrid';
import ProjectCTA from '../components/ProjectCTA';
import ProjectCard from '../components/ProjectCard';
import { RiArrowUpLine } from 'react-icons/ri';

const ProjectsPage: React.FC = () => {
  // State for category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // State for scroll-to-top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Extract unique categories from projects
  const categories = [...new Set(projects.map(project => project.category))];
  
  // Handle scroll event to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Featured projects section (first 3 projects for alternating layout display)
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section with Parallax Effect */}
      <ProjectsHero backgroundImage={zubi} />
      
      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 -mt-10 md:-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-2xl shadow-2xl shadow-black/5 p-6 mb-12">
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Featured Projects Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our most innovative and cutting-edge architectural designs that showcase 
              our expertise and creative vision.
            </p>
          </motion.div>
          
          <div>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Grid Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-2">Browse All Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our complete portfolio of architectural projects spanning various categories and styles.
            </p>
          </motion.div>
        </div>
        
        <ProjectsGrid projects={projects} category={activeCategory} />
      </section>
      
      {/* Call to Action Section */}
      <ProjectCTA />
      
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5,
          y: showScrollTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-white 
          flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary/90"
        aria-label="Scroll to top"
      >
        <RiArrowUpLine className="text-xl" />
      </motion.button>
    </div>
  );
};

export default ProjectsPage;
