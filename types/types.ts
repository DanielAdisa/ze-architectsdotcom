// /types/types.ts

import { StaticImageData } from "next/image";

export interface Project {
  id: any;
  title: any;
  image: any; // Adjusted to match Next.js image type
  hash: any;
  description: any;
  category: any;
  date: any; // Date in ISO string format or any other preferred format
}

// /types/types.ts
export interface PROJECTS {
  id: any; // Unique identifier for the project
  title: any; // Title of the project
  image: any; // Path to the project's image
  description: any; // Description of the project
  category: any; // Category of the project (e.g., Residential, Commercial)
  date: any; // Date associated with the project
}

