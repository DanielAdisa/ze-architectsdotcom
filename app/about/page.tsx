'use client';

import Image from 'next/image';
import zubi from '@/public/Assets/hero1.jpeg'; // Hero Image
import founderImage from '@/public/Assets/zubi.jpg'; // Founder Image
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaQuoteLeft, FaQuoteRight, FaLeaf, FaBuilding, FaUserTie, FaMedal } from 'react-icons/fa';

const Page = () => {
  return (
    <div className="relative">
      {/* Hero Section - Modernized */}
      <div className="relative w-full h-[40em] overflow-hidden">
        <Image
          src={zubi}
          alt="Hero Image"
          layout="fill"
          className="object-cover absolute inset-0 transform hover:scale-105 transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-4 md:p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-300">About ZE-Architects</span>
          </h1>
          <p className="text-lg md:text-2xl font-serif max-w-3xl mx-auto opacity-90 backdrop-blur-sm bg-black/20 p-4 rounded-xl">
            Explore our innovative and creative approach to architectural visualization.
          </p>
        </div>
      </div>

      {/* About Section - Modernized */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-center relative inline-flex items-center mx-auto">
              <span className="bg-gradient-to-r from-stone-700 to-stone-500 bg-clip-text text-transparent">Our Practice</span>
              <span className="h-1 w-24 bg-gradient-to-r from-stone-500 to-stone-300 absolute -bottom-4 left-1/2 transform -translate-x-1/2"></span>
            </h2>
          </div>
          
          {/* Content Layout - Redesigned */}
          <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16">
            {/* Founder Image Section - Modern Styling */}
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-stone-500 to-stone-300 rounded-xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src={founderImage}
                  alt="Founder Image"
                  className="rounded-lg shadow-2xl object-cover w-full h-auto transform group-hover:scale-[1.01] transition duration-500"
                  width={700}
                  height={700}
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg p-3 text-white">
                  <h3 className="text-lg font-medium">Zubi Efobi</h3>
                  <p className="text-sm">Founding Director</p>
                </div>
              </div>
            </div>

            {/* Text Content - Enhanced with Icons and Modern Layout */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex items-start space-x-4">
                <FaBuilding className="text-stone-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-stone-800 mb-2">Architectural Excellence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    ZE Architects is a practice based in Dublin, Ireland, with vast experience in architecture. We specialize in various architectural projects, ranging from leisure, master-planning, health, residential, commercial, sports/arena, education, and interior design.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaLeaf className="text-stone-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-stone-800 mb-2">Sustainability Focus</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We have a special interest in improving living standards through sustainable buildings and master-planning. We ensure that our work meets and exceeds the expectations of our clients through design quality and technical expertise.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaUserTie className="text-stone-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-stone-800 mb-2">Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The founding director, Zubi Efobi, is a qualified Architect registered with the Royal Institute of Architects of Ireland, with over twelve years of experience in architectural consultancy in Nigeria and Ireland. Zubi is passionate about the provision of quality housing through sustainable architecture.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaMedal className="text-stone-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-stone-800 mb-2">Our Promise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    At ZE Architects, we ensure that our work exceeds client expectations through a combination of quality design and technical proficiency.
                  </p>
                </div>
              </div>
              
              {/* Testimonial-style Quote */}
              <div className="bg-gradient-to-br from-stone-100 to-stone-200 p-6 rounded-xl shadow-sm mt-6">
                <div className="flex items-start">
                  <FaQuoteLeft className="text-stone-400 text-xl mr-2" />
                  <p className="text-stone-700 italic font-medium">
                    We believe architecture should not only be beautiful, but also sustainable and functional for generations to come.
                  </p>
                  <FaQuoteRight className="text-stone-400 text-xl ml-2 self-end" />
                </div>
              </div>

              {/* Modern CTA Button */}
              <Button className="group relative w-full py-6 px-8 overflow-hidden rounded-lg bg-gradient-to-r from-stone-700 to-stone-500 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href={'mailto:zubi@ze-architects.com'} className="flex items-center justify-center">
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-600 to-stone-400 opacity-0 group-hover:opacity-100 group-hover:scale-[1.05] transform transition-all duration-500"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
