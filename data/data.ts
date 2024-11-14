// /data/data.ts
import { Project } from '@/types/types';
import first from "@/public/Assets/auberginew_01_viz.jpg";
import second from "@/public/Assets/hero1.jpeg";
import third from "@/public/Assets/cagliari_01_viz.jpg";
import forth from "@/public/Assets/1234.png";
import fifth from "@/public/Assets/cagliari_02_viz.jpg";
import sixth from "@/public/Assets/hero.avif";

export const projects: Project[] = [
  { 
    id: '1', 
    image: first, 
    text: 'Project 1 Description' 
  },
  { 
    id: '2',
    image: second,
    text: 'Project 2 Description'
   },

  { 
    id: '3',
    image: third,
    text: 'Project 3 Description' 
  },
  { 
    id: '4', 
    image: forth, 
    text: 'Project 4 Description' 
  },
  { 
    id: '5', 
    image: fifth, 
    text: 'Project 5 Description'
   },
  { 
    id: '6', 
    image: sixth, 
    text: 'Project 6 Description'
   },
];