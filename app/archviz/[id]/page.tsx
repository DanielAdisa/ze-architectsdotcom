"use client";

import { notFound } from 'next/navigation';
import { PROJECTS, projects } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  RiArrowLeftSLine,
  RiBuilding3Line,
  RiCalendarLine,
  RiLayoutGridLine,
  RiHome5Line
} from "react-icons/ri";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap params using React's use hook
  const unwrappedParams = use(params);

  // Find the project based on the unwrapped id
  const project = projects.find((p) => p.id === unwrappedParams.id);

  if (!project) {
    notFound(); // Trigger a 404 page if the project is not found
  }

  // Find index in projects array to get next/prev
  const projectIndex = projects.findIndex(p => p.id === project.id);
  const hasNext = projectIndex < projects.length - 1;
  const hasPrevious = projectIndex > 0;

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
      {/* Hero section with full-width image and overlay */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            priority
            className="object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </motion.div>
        
        {/* Hero Content - Positioned at the bottom */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row items-start md:items-end justify-between"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="mb-6 md:mb-0">
                <motion.div 
                  {...fadeInUp} 
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 text-stone-300 mb-3"
                >
                  <RiBuilding3Line />
                  <span>{project.category}</span>
                </motion.div>
                
                <motion.h1 
                  {...fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                  {project.title}
                </motion.h1>
                
                <motion.div 
                  {...fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="flex items-center text-stone-300 text-sm gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RiCalendarLine />
                    <span>{project.date}</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.5 }}
              >
                <Link href="/archviz" passHref>
                  <Button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full px-6 py-2 flex items-center gap-2">
                    <RiLayoutGridLine />
                    <span>View All Projects</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project details section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-stone-800 dark:text-stone-100">About This Project</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-stone-400 to-stone-600 mb-8"></div>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-12 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-lg dark:shadow-stone-800/50 relative h-[400px]"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - Featured`}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="mt-16 flex flex-wrap gap-4 justify-between">
              {hasPrevious && (
                <Link href={`/archviz/${projects[projectIndex - 1].id}`} passHref>
                  <Button className="bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-full px-6 py-5 flex items-center gap-2">
                    <RiArrowLeftSLine size={20} />
                    <span>Previous Project</span>
                  </Button>
                </Link>
              )}
              
              {hasNext && (
                <Link href={`/archviz/${projects[projectIndex + 1].id}`} passHref>
                  <Button className="bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-full px-6 py-5 flex items-center gap-2">
                    <span>Next Project</span>
                    <RiArrowLeftSLine size={20} className="rotate-180" />
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
          
          {/* Sidebar with project details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-stone-200 dark:border-stone-700">
              <h3 className="text-xl font-bold mb-6 text-stone-800 dark:text-stone-100">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-300">
                    <RiCalendarLine size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 dark:text-stone-400">Date</p>
                    <p className="text-stone-800 dark:text-stone-200">{project.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-300">
                    <RiBuilding3Line size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 dark:text-stone-400">Category</p>
                    <p className="text-stone-800 dark:text-stone-200">{project.category}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" passHref>
                  <Button className="w-full bg-stone-800 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600 text-white rounded-full py-6">
                    Request Similar Project
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/Assets/hero.jpg"
                  alt="Contact us"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Need Help?</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-stone-600 dark:text-stone-300 mb-6">
                  Contact our team for more information about our architectural visualization services.
                </p>
                <Link href="/contact" passHref>
                  <Button className="w-full bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-800 dark:text-white rounded-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
