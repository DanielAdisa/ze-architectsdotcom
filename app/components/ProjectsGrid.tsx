"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/types';
import { 
  RiArrowRightUpLine, 
  RiCalendarLine,
  RiBuilding3Line
} from 'react-icons/ri';

interface ProjectsGridProps {
  projects: Project[];
  category: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, category }) => {
  // Filter projects by category
  const filteredProjects = category === 'All' 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <GridItem key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <div className="text-4xl mb-4">🏗️</div>
          <h3 className="text-xl font-medium text-center mb-2">No projects found</h3>
          <p className="text-muted-foreground text-center">
            No projects match the selected category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

interface GridItemProps {
  project: Project;
  index: number;
}

const GridItem: React.FC<GridItemProps> = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md 
        border border-white/10 shadow-xl h-[460px] hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-[260px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={index < 6}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
        
        {/* Category badge */}
        <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full 
          text-xs font-medium text-white border border-white/20 flex items-center">
          <RiBuilding3Line className="mr-1" />
          {project.category}
        </div>
        
        {/* Date badge */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full 
          text-xs font-medium text-white/80 flex items-center">
          <RiCalendarLine className="mr-1" />
          {project.date}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow justify-between p-6">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-foreground/70 line-clamp-3">
            {project.description}
          </p>
        </div>
        
        <Link href={`/projects/${project.hash}`}>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-medium">View Details</span>
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary transition-colors duration-300">
              <RiArrowRightUpLine className="text-primary group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </Link>
      </div>
      
      {/* Highlight border effect on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 
        rounded-2xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectsGrid;