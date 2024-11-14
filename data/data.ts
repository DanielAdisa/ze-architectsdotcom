// /data/data.ts
import { Project } from '@/types/types';
import first from "@/public/Assets/auberginew_01_viz.jpg";
import second from "@/public/Assets/hero1.jpeg";
import third from "@/public/Assets/cagliari_01_viz.jpg";
import fourth from "@/public/Assets/1234.png";
import fifth from "@/public/Assets/cagliari_02_viz.jpg";
import sixth from "@/public/Assets/hero.avif";

export const projects: Project[] = [
  { 
    id: '1', 
    title: 'Urban Living', 
    image: first, 
    description: 'A visionary project that redefines urban lifestyle with a mix of nature and modern architecture.',
    category: 'Architecture',
    date: '2023-07-01'
  },
  { 
    id: '2', 
    title: 'Coastal Retreat', 
    image: second, 
    description: 'An exquisite retreat by the sea, designed to maximize tranquility and natural beauty.', 
    category: 'Vacation Homes',
    date: '2023-05-15'
  },
  { 
    id: '3', 
    title: 'Mountain Getaway', 
    image: third, 
    description: 'A cozy mountain cabin with sustainable building practices and breathtaking views.', 
    category: 'Cabins',
    date: '2023-03-22'
  },
  { 
    id: '4', 
    title: 'Modern Office Space', 
    image: fourth, 
    description: 'A cutting-edge workspace designed for productivity and collaboration in the modern era.', 
    category: 'Office',
    date: '2023-09-10'
  },
  { 
    id: '5', 
    title: 'Suburban Home', 
    image: fifth, 
    description: 'A family home with spacious interiors and energy-efficient features.', 
    category: 'Residential',
    date: '2023-01-18'
  },
  { 
    id: '6', 
    title: 'Eco-Friendly Villa', 
    image: sixth, 
    description: 'A luxury villa focused on sustainability, featuring solar energy and a green roof.', 
    category: 'Eco-Friendly',
    date: '2023-11-08'
  },
];
