import zubi from '@/public/Assets//hero1.jpeg'
import Image from 'next/image'

const page = () => {
  return (
    <div className="">
      <div className="relative w-full h-[597.083px]">
        <Image
          src={zubi} // Replace with your hero image path
          alt="Hero Image"
          layout="fill"
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional overlay */}
        {/* Optional Hero Text */}
        <div className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-2 md:p-3">
          <h1 className="text-4xl font-bold mb-4">About ZE-Architects</h1>
          <p className="text-xl">Explore our innovative and creative projects</p>
        </div>
      </div>
      <div className=" h-screen"></div>
    </div>
  )
}
export default page


// import Link from "next/link"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel"
// import Image from "next/image"

// import image2 from "@/public/Assets/1234.png"
 


// const Page = () => {
//   return (
//     <Carousel className="pt-[136px] w-4/6 mx-auto">
//     <CarouselContent className=" mx-auto w-[90%]">
//       {/* {Array.from({ length: 5 }).map((_, index) => ( */}
//         <CarouselItem>
//           <div className="p-1">
//             <Card>
//               <CardContent className="flex aspect-square items-center justify-center p-">
//                 <Image src={image2} alt="once" className="rounded-md" />
//               </CardContent>
//             </Card>
//           </div>
//         </CarouselItem>
//         <CarouselItem>
//           <div className="p-1">
//             <Card>
//               <CardContent className="flex aspect-square items-center justify-center p-">
//                 <Image src={image2} alt="once" className="rounded-md" />
//               </CardContent>
//             </Card>
//           </div>
//         </CarouselItem>
//       {/* ))} */}
//     </CarouselContent>
//     <CarouselPrevious className="" />
//     <CarouselNext />
//   </Carousel>
//   )
// }
// export default Page