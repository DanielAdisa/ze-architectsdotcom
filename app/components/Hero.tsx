"use client"

import Image from "next/image"
import zubi from "@/public/Assets/zubi.png"
import first from "@/public/Assets/auberginew_01_viz.jpg"
import second from "@/public/Assets/hero1.jpeg"
import third from "@/public/Assets/cagliari_01_viz.jpg"
import forth from "@/public/Assets/1234.png"
import fifth from "@/public/Assets/cagliari_02_viz.jpg"
import sixth from "@/public/Assets/hero.avif"



import { useEffect, useState } from "react";
import Link from "next/link";


const defaultSlides = [
  { image: first, text: 'Welcome to our website' },
  { image: second, text: 'Explore our services' },
  { image: third, text: 'Contact us for more info' },
  { image: forth, text: 'Welcome to our website' },
  { image: fifth, text: 'Explore our services' },
  { image: sixth, text: 'Explore our services' },
];



const Hero = ({ slides = defaultSlides, interval = 7000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const changeSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const intervalId = setInterval(changeSlide, interval);
    return () => clearInterval(intervalId);
  }, [slides.length, interval]);

  return (
     <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent " />
          <div className="absolute bottom-10 left-20 text-white text-3xl font-normal">
            {slide.text}
          </div>
        </div>
      ))}
    </section>
  )
}
export default Hero

