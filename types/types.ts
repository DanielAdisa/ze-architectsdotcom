// /types/types.ts

import { StaticImageData } from "next/image";

export interface Project {
  id: any;
  title: any;
  image: any; // Adjusted to match Next.js image type

  description: any;
  category: any;
  date: any; // Date in ISO string format or any other preferred format
}
