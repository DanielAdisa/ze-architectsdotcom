import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"

import image2 from "@/public/Assets/1234.png"
 


const Page = () => {
  return (
    <Carousel className=" w-4/6 mx-auto">
    <CarouselContent className=" mx-auto w-[90%]">
      {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-">
                <Image src={image2} alt="once" className="rounded-md" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-">
                <Image src={image2} alt="once" className="rounded-md" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      {/* ))} */}
    </CarouselContent>
    <CarouselPrevious className="" />
    <CarouselNext />
  </Carousel>
  )
}
export default Page