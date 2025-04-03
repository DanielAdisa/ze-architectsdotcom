'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiFilterLine, 
  RiArrowDownSLine,
  RiCheckLine,
  RiHistoryLine,
  RiCloseLine
} from "react-icons/ri";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProjectFilter = ({ categories, activeCategory, setActiveCategory }: ProjectFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentCategories, setRecentCategories] = useState<string[]>([]);

  // Add category to recent when selected
  useEffect(() => {
    if (activeCategory === 'All') return;
    
    setRecentCategories(prev => {
      // Remove if already exists to avoid duplicates
      const filtered = prev.filter(cat => cat !== activeCategory);
      // Add to beginning and limit to 3 recent items
      return [activeCategory, ...filtered].slice(0, 3);
    });
  }, [activeCategory]);

  return (
    <div className="relative z-10 mb-8">
      <motion.div 
        className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Main Filter Button */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-stone-800/40 backdrop-blur-md rounded-full border border-stone-200/20 dark:border-stone-700/50 text-stone-700 dark:text-stone-200 hover:bg-white/20 dark:hover:bg-stone-700/50 transition-all duration-300"
          >
            <RiFilterLine size={18} className="text-stone-500 dark:text-stone-400" />
            <span>Filter by: <span className="font-medium">{activeCategory}</span></span>
            <RiArrowDownSLine size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 w-64 bg-white dark:bg-stone-800 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-700 overflow-hidden"
              >
                <div className="p-1">
                  {/* Recent Selections Section */}
                  {recentCategories.length > 0 && (
                    <div className="mb-2 px-3 pt-3">
                      <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                        <RiHistoryLine size={14} />
                        <span>Recent</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentCategories.map(cat => (
                          <button
                            key={`recent-${cat}`}
                            onClick={() => {
                              setActiveCategory(cat);
                              setIsOpen(false);
                            }}
                            className="px-3 py-1 text-xs rounded-full bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                      <div className="h-px bg-stone-200 dark:bg-stone-700 my-2"></div>
                    </div>
                  )}
                  
                  {/* All Categories List */}
                  <div className="max-h-60 overflow-y-auto overscroll-contain">
                    <button
                      onClick={() => {
                        setActiveCategory('All');
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between w-full px-4 py-2.5 text-left hover:bg-stone-100 dark:hover:bg-stone-700/50 rounded-lg transition-colors ${activeCategory === 'All' ? 'bg-stone-100 dark:bg-stone-700' : ''}`}
                    >
                      <span>All Projects</span>
                      {activeCategory === 'All' && (
                        <RiCheckLine className="text-blue-500" size={18} />
                      )}
                    </button>
                    
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between w-full px-4 py-2.5 text-left hover:bg-stone-100 dark:hover:bg-stone-700/50 rounded-lg transition-colors ${activeCategory === category ? 'bg-stone-100 dark:bg-stone-700' : ''}`}
                      >
                        <span>{category}</span>
                        {activeCategory === category && (
                          <RiCheckLine className="text-blue-500" size={18} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Active Filters Tags */}
        <div className="flex flex-wrap gap-2">
          {activeCategory !== 'All' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-stone-800 dark:bg-stone-700 text-white text-sm"
            >
              {activeCategory}
              <button
              title='Remove filter'
                onClick={() => setActiveCategory('All')}
                className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-stone-700 dark:hover:bg-stone-600 transition-colors"
              >
                <RiCloseLine size={14} />
              </button>
            </motion.span>
          )}
        </div>
      </motion.div>
      
      {/* Click outside to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectFilter;