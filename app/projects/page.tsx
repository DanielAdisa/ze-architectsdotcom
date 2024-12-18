// /app/page.tsx
"use client";
import Link from 'next/link';
import { FC } from 'react';
import { projects } from '@/data/data';
import { Project } from '@/types/types';
import Image from 'next/image';
import zubi from '@/public/Assets/hero1.jpeg'
import { Button } from '@/components/ui/button';

const Home: FC = () => {
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

      {/* Projects Section */}
      <div className="p-6 pt-[100px] max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>
        
        {/* Project list with alternating layout */}
        <div className="space-y-12">
          {projects.map((project: Project, index) => (
            <Link key={project.id} href={`/projects/${project.hash}`} className="group">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? 'md:flex-row-reverse ga' : ''
                } items-center md:space-x- space-y-4 md:space-y-5`}
              >
                {/* Image */}
                <div className="w-full md:w-2/3 mb-4 md:mb-5">
                  <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    width={800}  // Higher resolution for better quality
                    height={500}
                    className="w-full p- h-64 md:h-96 object-cover rounded-lg transition-transform duration-300"
                  />
                </div>
                
                {/* Text */}
                <div className="w-full relati md:w-1/3 flex flex-col items-center justify-betwee h-fit gap-5 p-4 pr-0 pl-0 md:p-5">
                  <h2 className="text-3xl place-content-start font-bold text-gray-800 hover:text-primary transition duration-300">{project.title}</h2>
                  <p className="text-sm text-gray-500">{project.date}</p>
                  <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                    {project.description}
                  </p>
                  <Button className="mt-4   hover:bg-stone-500/40 w-full bg-stone-500/60 text-white rounded-md  transition">
                    Learn More
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
