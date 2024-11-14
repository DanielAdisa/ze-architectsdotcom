// /app/projects/[id]/page.tsx
"use client"
import { notFound } from 'next/navigation';
import { projects } from '@/data/data';
import Image from 'next/image';
import { use } from 'react';

// Type definition for params as a Promise
const ProjectPage = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap params using React's use hook (this is required for async params)
  const unwrappedParams = use(params);

  // Find the project based on the unwrapped id
  const project = projects.find((p) => p.id === unwrappedParams.id);

  if (!project) {
    notFound(); // Trigger a 404 page if the project is not found
  }

  return (
    <div className="relative h-screen w-full">
      <Image
        src={project.image}
        alt={`Project ${project.id}`}
        width={1920} // Adjust according to your image aspect ratio
        height={1080} // Adjust as needed
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
      <div className="absolute bottom-10 left-10 text-white text-3xl font-bold">
        {project.text}
      </div>
    </div>
  );
};

export default ProjectPage;
