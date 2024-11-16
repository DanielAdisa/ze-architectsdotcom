'use client';

import { useState } from 'react';
import Image from 'next/image';
import zubi from '@/public/Assets/hero1.jpeg';
import { PROJECTS } from '@/data/data';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showNext = () => setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  const showPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-[597.083px]">
        <Image
          src={zubi}
          alt="Hero Image"
          layout="fill"
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-2 md:p-3">
          <h1 className="text-4xl font-bold mb-4">Architectural Visualization</h1>
          <p className="text-xl font-serif">
            Less is only more where more is no good.
            <br />
            <br />– Frank Lloyd Wright
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-[30px] max-w-7xl mx-auto md:p-5 p-4 gap-4">
        <h1 className="text-2xl md:p-0 font-bold font-grey-bold mb-[25px]">
          Architectural Visualization
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PROJECTS.map((item, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => openModal(index)}>
              {/* Image Wrapper */}
              <div className="relative w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform ease-in-out duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-5xl w-full p-4">
            {/* Close Button */}
            <Button
              className="absolute md:-top-10 md:-right-14 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </Button>

            {/* Image Display */}
            <div className="relative w-full h-[500px]">
              <Image
                src={PROJECTS[currentIndex].image}
                alt={PROJECTS[currentIndex].title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-md shadow-md"
                onClick={showPrevious}
              >
                Previous
              </button>
              <h2 className="text-white text-lg font-bold">
                {PROJECTS[currentIndex].title}
              </h2>
              <button
                className="bg-white px-4 py-2 rounded-md shadow-md"
                onClick={showNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
