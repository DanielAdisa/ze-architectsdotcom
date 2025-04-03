"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  RiArrowDownLine, 
  RiBuilding4Line, 
  RiPencilRuler2Line,
  RiCommunityLine
} from 'react-icons/ri';

interface HeroProps {
  backgroundImage: string | any;
}

const ProjectsHero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt="ZE Architects Projects"
          fill
          priority
          className="object-cover"
        />
        
        {/* Advanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full 
              mb-6 border border-white/20"
          >
            <span className="text-white/80 text-sm font-medium">INNOVATIVE ARCHITECTURAL DESIGNS</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Projects</span> Portfolio
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Explore our collection of innovative architectural designs that define the future 
            of spaces and push the boundaries of modern architecture.
          </motion.p>
          
          {/* Project Categories with Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { icon: <RiBuilding4Line className="text-xl mr-2" />, text: "Residential" },
              { icon: <RiCommunityLine className="text-xl mr-2" />, text: "Commercial" },
              { icon: <RiPencilRuler2Line className="text-xl mr-2" />, text: "Urban Planning" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10"
              >
                {item.icon}
                <span className="text-white/90 text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
              <RiArrowDownLine className="text-white" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsHero;