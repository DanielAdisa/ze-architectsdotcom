// /app/projects/[id]/page.tsx
"use client";
import { notFound } from 'next/navigation';
import { projects } from '@/data/data';
import Image from 'next/image';
import { use } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCalendar, 
  FiTag, 
  FiArrowLeft, 
  FiShare2, 
  FiBookmark,
  FiMapPin,
  FiInfo,
  FiGrid,
  FiClock,
  FiDownload,
  FiAward,
  FiLayers,
  FiUsers,
  FiChevronRight,
  FiHeart
} from 'react-icons/fi';
import {
  RiBuilding4Line,
  RiLightbulbFlashLine,
  RiPlanetLine,
  RiDoubleQuotesR,
  RiArrowRightUpLine
} from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const ProjectPage = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap params using React's use hook
  const unwrappedParams = use(params);
  const router = useRouter();

  // Find the project based on the unwrapped id
  const project = projects.find((p) => p.hash === unwrappedParams.id);

  if (!project) {
    notFound(); // Trigger a 404 page if the project is not found
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Related projects - exclude current project
  const relatedProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] dark:from-[#020617] dark:via-[#0f172a] dark:to-[#1e293b]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl dark:from-blue-500/10 dark:to-purple-500/10" />
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl dark:from-cyan-500/10 dark:to-teal-500/10" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-500/20 to-pink-500/20 rounded-full blur-3xl dark:from-amber-500/10 dark:to-pink-500/10" />
      </div>

      {/* Header with navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Button 
            onClick={() => router.back()} 
            variant="ghost" 
            className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <FiArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300 ease-out" />
            <span className="font-medium">Projects</span>
          </Button>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-md hover:scale-105">
              <FiHeart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-md hover:scale-105">
              <FiShare2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-md hover:scale-105">
              <FiDownload className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero section with advanced glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="relative w-full h-[75vh] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 dark:border-gray-800/50">
            {/* Main project image */}
            <Image
              src={project.image}
              alt={`Project ${project.title}`}
              fill
              className="object-cover"
              priority
              quality={90}
            />
            
            {/* Advanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-8 right-8 backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-full px-5 py-2 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-white font-medium">
                <RiBuilding4Line className="h-4 w-4 text-blue-400" />
                <span>{project.category}</span>
              </div>
            </div>
            
            {/* Project title overlay - neo glass card */}
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-white/10 dark:bg-black/40 p-8 md:p-10 border-t border-white/10 shadow-[0_-10px_50px_rgba(0,0,0,0.25)]">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  className="flex flex-wrap items-center gap-4 text-white/80 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <FiClock className="h-4 w-4 text-blue-400" />
                    <span>Completed {project.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FiGrid className="h-4 w-4 text-blue-400" />
                    <span>Project #{project.id}</span>
                  </div>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.title}
                </motion.h1>
                
                <motion.p
                  className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content sections */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main content area - 8 column span */}
          <motion.div 
            className="lg:col-span-8 space-y-10"
            variants={itemVariants}
          >
            {/* Project overview section */}
            <motion.section 
              className="bg-white dark:bg-gray-800/40 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100/80 dark:border-gray-700/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-500">
                  <RiLightbulbFlashLine className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Design Concept</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-600/30">
                  <div className="flex items-start gap-4">
                    <RiDoubleQuotesR className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                    <blockquote className="text-lg italic text-gray-600 dark:text-gray-300">
                      The design approach for this project focuses on sustainability and harmonious integration with its surroundings, creating spaces that evoke emotion while remaining highly functional.
                    </blockquote>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/30">
                    <FiAward className="h-6 w-6 text-blue-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Award-winning</h3>
                    <p className="text-gray-600 dark:text-gray-400">Recognized for innovative design solutions</p>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800/30">
                    <RiPlanetLine className="h-6 w-6 text-emerald-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sustainable</h3>
                    <p className="text-gray-600 dark:text-gray-400">Built with eco-friendly materials and systems</p>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-100 dark:border-amber-800/30">
                    <FiUsers className="h-6 w-6 text-amber-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">User-centered</h3>
                    <p className="text-gray-600 dark:text-gray-400">Designed with human experience at the core</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Location section */}
            <motion.section 
              className="bg-white dark:bg-gray-800/40 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100/80 dark:border-gray-700/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-500">
                  <FiMapPin className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Location Context</h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                This project is situated in a unique context that enhances its architectural significance. The surroundings played a key role in determining the design approach and material selections.
              </p>
              
              <div className="aspect-video relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <FiMapPin className="h-5 w-5" />
                    Interactive location map
                  </p>
                </div>
              </div>
            </motion.section>
            
            {/* Materials and architecture */}
            <motion.section 
              className="bg-white dark:bg-gray-800/40 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100/80 dark:border-gray-700/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-500">
                  <FiLayers className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Materials & Techniques</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    The project employs cutting-edge materials and construction techniques to achieve both aesthetic beauty and structural integrity.
                  </p>
                  
                  <ul className="space-y-3">
                    {['Sustainable concrete', 'Recycled steel', 'Smart glass', 'Bamboo accents'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400">
                          <FiChevronRight className="h-4 w-4" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl p-1">
                  <div className="aspect-square w-full relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <p className="text-gray-500 dark:text-gray-400">Material detail image</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>

          {/* Sidebar - 4 column span */}
          <motion.div 
            className="lg:col-span-4 space-y-10"
            variants={itemVariants}
          >
            {/* Project details card */}
            <div className="bg-white dark:bg-gray-800/40 rounded-3xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/30 backdrop-blur-sm sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Project Specifications</h3>
              
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Project Category</p>
                  <p className="text-base font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <FiTag className="h-4 w-4 text-blue-500" />
                    {project.category}
                  </p>
                </div>
                
                <Separator className="bg-gray-200 dark:bg-gray-700" />
                
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Completion Date</p>
                  <p className="text-base font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <FiCalendar className="h-4 w-4 text-blue-500" />
                    {project.date}
                  </p>
                </div>
                
                <Separator className="bg-gray-200 dark:bg-gray-700" />
                
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Project ID</p>
                  <p className="text-base font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <FiGrid className="h-4 w-4 text-blue-500" />
                    #{project.id}
                  </p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 dark:shadow-blue-500/15 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 hover:scale-[1.02]">
                  Contact About Project
                  <RiArrowRightUpLine className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Related projects card */}
            <div className="bg-white dark:bg-gray-800/40 rounded-3xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Related Projects</h3>
              
              <div className="space-y-4">
                {relatedProjects.map((p) => (
                  <Link 
                    key={p.id} 
                    href={`/projects/${p.hash}`}
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all"
                  >
                    <div className="h-16 w-16 relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image 
                        src={p.image} 
                        alt={p.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{p.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{p.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <Link 
                href="/projects"
                className="mt-6 flex items-center justify-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
              >
                View all projects
                <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectPage;
