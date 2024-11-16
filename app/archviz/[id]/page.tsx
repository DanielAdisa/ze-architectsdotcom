// /app/projects/[id]/page.tsx
"use client";
import { notFound } from 'next/navigation';
import { PROJECTS, projects } from '@/data/data';
import Image from 'next/image';
import { use } from 'react';

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap params using React's use hook (this is required for async params)
  const unwrappedParams = use(params);

  // Find the project based on the unwrapped id
  const project = PROJECTS.find((p) => p.id === unwrappedParams.id);

  if (!project) {
    notFound(); // Trigger a 404 page if the project is not found
  }

  return (
    <div className="h-fit w-full">
      <div className="relative w-full h-screen">
        {/* Display project image with a gradient overlay */}
        <Image
          src={project.image}
          alt={`Project ${project.id}`}
          width={1920} 
          height={1080} 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
        
        {/* Project title and basic details over the image */}
        <div className="absolute bottom-10 left-10 text-white text-3xl font-bold px-4 md:px-8 py-2 md:py-4">
          <h1 className="text-2xl md:text-4xl">{project.title}</h1>
          {/* <p className="mt-2 text-lg md:text-xl">{project.category}</p> */}
          {/* <p className="mt-1 text-sm md:text-base text-gray-300">{project.date}</p> */}
        </div>
      </div>

      {/* Project detailed information in a full-screen section */}
      <div className="h-screen p-6 md:p-10 bg-gray-100 flex items-center justify-center">
        <div className="max-w-3xl text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{project.title}</h2>
          {/* <p className="text-base md:text-lg text-gray-700">{project.description}</p> */}
          <p className="text-sm md:text-base text-gray-600 italic">
            {/* Category: {project.category} | Date: {project.date} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
