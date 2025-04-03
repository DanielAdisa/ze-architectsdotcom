"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/types';
import { motion } from 'framer-motion';
import { 
  RiArrowRightLine, 
  RiCalendarLine, 
  RiBuilding3Line, 
  RiQuoteText, 
  RiDoubleQuotesR 
} from 'react-icons/ri';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Alternating layout based on index
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
        rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 
        backdrop-blur-md border border-white/10 shadow-xl shadow-black/5
        my-16 hover:shadow-2xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Effects */}
      <div className="relative w-full md:w-2/3 overflow-hidden">
        <motion.div
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="relative h-64 md:h-[400px] w-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
          
          {/* Category badge */}
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full 
            text-xs font-medium text-white border border-white/20 flex items-center">
            <RiBuilding3Line className="mr-1" />
            {project.category}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-2">
            <RiQuoteText className="text-primary/50 text-xl" />
            <h3 className="text-3xl font-bold ml-2 tracking-tight">
              {project.title}
            </h3>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <RiCalendarLine className="mr-1" />
            {project.date}
          </div>
          
          <p className="text-foreground/80 leading-relaxed mb-6 relative">
            {project.description}
            <RiDoubleQuotesR className="absolute -bottom-4 right-0 text-primary/50 text-xl" />
          </p>
        </div>
        
        <Link href={`/projects/${project.hash}`} className="group">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center bg-gradient-to-r 
              from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70
              text-primary-foreground py-3 px-6 rounded-xl font-medium 
              shadow-lg shadow-primary/20 transition-all duration-300"
          >
            Explore Project 
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <RiArrowRightLine className="ml-2 text-lg" />
            </motion.div>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;