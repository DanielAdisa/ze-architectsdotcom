// /app/page.tsx
"use client"
import Link from 'next/link';
import { FC } from 'react';
import { projects } from '@/data/data';
import { Project } from '@/types/types';
import Image from 'next/image';

const Home: FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
        {projects.map((project: Project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="relative">
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.text}
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
