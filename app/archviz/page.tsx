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
          <h1 className="text-4xl font-bold mb-4">Architectural Visualisation</h1>
          <p className="text-xl font-serif">Less is only more where more is no good.<br className=''/> <br className=''/> - Frank Lloyd Wright</p>
        </div>
      </div>
      <div className=" h-screen"></div>
    </div>
  )
}
export default page