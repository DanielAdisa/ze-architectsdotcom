'use client';

import Image from 'next/image';
import zubi from '@/public/Assets/hero1.jpeg'; // Hero Image
import founderImage from '@/public/Assets/zubi.jpg'; // Founder Image
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative w-full h-[40em]">
        <Image
          src={zubi} // Hero image path
          alt="Hero Image"
          layout="fill"
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-4 md:p-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            About ZE-Architects
          </h1>
          <p className="text-lg md:text-2xl font-serif max-w-3xl mx-auto opacity-90">
            Explore our innovative and creative approach to architectural visualization.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-gray-100 py-16 md:py-24">
      <h2 className="text-4xl font-semibold text-center bg-stone-500/60 rounded-md  p-4 max-w-7xl mx-auto text-stone-50 mb-6">My Practice</h2>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Founder Image Section */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={founderImage}
              alt="Founder Image"
              className="rounded-md shadow-2xl object-cover mx-auto md:mx-0 "
              width={700}
              height={700}
            />
          </div>

          {/* Founder Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              ZE Architects is a practice based in Dublin, Ireland, with vast experience in architecture. We specialize in various architectural projects, ranging from leisure, master-planning, health, residential, commercial, sports/arena, education, and interior design. Our expertise includes visualizations for planning purposes, site/environmental studies, and promotional/marketing purposes.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We have a special interest in improving living standards through sustainable buildings and master-planning. We ensure that our work meets and exceeds the expectations of our clients through design quality and technical expertise.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The founding director, Zubi Efobi, is a qualified Architect registered with the Royal Institute of Architects of Ireland, with over twelve years of experience in architectural consultancy in Nigeria and Ireland. Zubi is passionate about the provision of quality housing through sustainable architecture.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At ZE Architects, we ensure that our work exceeds client expectations through a combination of quality design and technical proficiency.
            </p>

            {/* Optional Call-to-Action Button */}
            <Button className="bg-stone-500/60 text-white rounded-md w-full py-6 px-6  hover:bg-stone-500/40 transition duration-300">
            <Link href={'mailto:zubi@ze-architects.com'}>
                Get in Touch
            </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
