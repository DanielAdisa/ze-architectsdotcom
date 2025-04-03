"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiArrowRightLine, RiChat3Line, RiMailAddLine } from 'react-icons/ri';

const ProjectCTA: React.FC = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />
      
      {/* Floating Orbs - Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Let's Collaborate
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Architectural Vision</span>?
            </h2>
            
            <p className="text-lg text-foreground/70 mb-10">
              We're passionate about bringing architectural dreams to life. Connect with our team 
              to discuss your project and explore how we can help realize your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center bg-primary hover:bg-primary/90 text-primary-foreground 
                    px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary/20 w-full sm:w-auto"
                >
                  <RiMailAddLine className="mr-2" />
                  Contact Us
                  <RiArrowRightLine className="ml-2" />
                </motion.button>
              </Link>
              
              <Link href="#">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center bg-white/10 backdrop-blur-md hover:bg-white/20 
                    border border-white/10 text-foreground px-8 py-3 rounded-xl font-medium 
                    w-full sm:w-auto"
                >
                  <RiChat3Line className="mr-2" />
                  Book a Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCTA;