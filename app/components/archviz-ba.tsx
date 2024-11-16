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
