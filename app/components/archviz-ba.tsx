'use client';

import Image from 'next/image';
import zubi from '@/public/Assets/hero1.jpeg'; // Hero Image
import founderImage from '@/public/Assets/zubi.jpg'; // Founder Image
import { Button } from '@/components/ui/button';

const Page = () => {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About ZE-Architects</h1>
          <p className="text-xl md:text-2xl font-serif max-w-3xl mx-auto">
            Explore our innovative and creative approach to architectural visualization.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
          {/* Founder Image Section */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={founderImage}
              alt="Founder Image"
              className="rounded-md shadow-lg object-cover mx-auto md:mx-0 transition-transform transform"
              width={700}
              height={700}
            />
          </div>

          {/* Founder Text Section */}
          <div className="w-full md:w-1/2 text-center tracking-tight  md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Practice</h2>
            <p className="text-lg text-stone-800 mb-4">
              ZE Architects is a practice based in Dublin, Ireland with vast experience in architecture. We specialize in various architectural projects ranging from leisure, master-planning, health, residential, commercial, sports/arena, education, and interior design. Our expertise includes visualizations for planning purposes, site/environmental studies, and promotional/marketing purposes.
            </p>
            <p className="text-lg text-stone-800 mb-4">
              We have a special interest in the improvement of living standards through sustainable buildings and master-planning. We ensure that our work meets and exceeds the expectations of our clients through design quality and technical expertise.
            </p>
            <p className="text-lg text-stone-800 mb-4">
              The founding director, Zubi Efobi, is a qualified Architect registered with the Royal Institute of Architects of Ireland, with over twelve years of experience in architectural consultancy in Nigeria and Ireland. Zubi is passionate about the provision of quality housing through sustainable architecture.
            </p>
            <p className="text-lg text-stone-800 mb-4">
              At ZE Architects, we ensure that our work exceeds client expectations through a combination of quality design and technical proficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;


// 'use client';

// import zubi from '@/public/Assets/hero1.jpeg';
// import Image from 'next/image';
// import { PROJECTS } from '@/data/data'; // Ensure this file exists with your project data
// import Link from 'next/link';
// import { Button } from '@/components/ui/button'; // Update path if needed

// const Page = () => {
//   return (
//     <div className="">
//       {/* Hero Section */}
//       <div className="relative w-full h-[597.083px]">
//         <Image
//           src={zubi}
//           alt="Hero Image"
//           layout="fill"
//           className="object-cover absolute inset-0"
//         />
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <div className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-2 md:p-3">
//           <h1 className="text-4xl font-bold mb-4">Architectural Visualization</h1>
//           <p className="text-xl font-serif">
//             Less is only more where more is no good.
//             <br />
//             <br />– Frank Lloyd Wright
//           </p>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="mt-[30px] max-w-7xl mx-auto md:p-5 p-4 gap-4">
//   <h1 className="text-2xl md:p-0 font-bold font-grey-bold mb-[25px]">
//   Architectural Visualization
//   </h1>
//   <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//     {PROJECTS.map((item, index) => (
//       <div key={index} className="group">
//         {/* Image Wrapper with Fixed Aspect Ratio */}
//         <div className="relative w-full h-48 overflow-hidden rounded-lg">
//           <Image
//             src={item.image}
//             alt={item.title}
//             layout="fill"
//             objectFit="cover"
//             className="transition-transform ease-in-out duration-300 group-hover:scale-105"
//           />
//         </div>
//         {/* Project Title */}
//         {/* <h1 className="hidden md:block text-center mt-2">{item.title}</h1> */}
//         {/* Button Link */}
//         <Link href={`/archviz/${item.id}`}>
//   <Button
//     variant={"outline"}
//     className="dark:border-[2px] border-stone-900 dark:border-stone-100 w-full dark:text-stone-100 font-medium mt-2 p-4"
//   >
//     {`View Project ${item.title}`}
//   </Button>
// </Link>

//       </div>
//     ))}
//   </div>
// </div>

//     </div>
//   );
// };

// export default Page;
