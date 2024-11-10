import Image from "next/image"
import zubi from "@/public/Assets/zubi.png"

const Hero = () => {
  return (
    <section  id="hero" className="hero  md:flex items-center pt-24 md:h-screen p-5 h-fit w-screen mx-auto">
        <div className=" md:w-9/12 md:flex md:items-center  rounded-md mx-auto h-auto">
           <div className="md:w-[50%] w-full">
              <Image src={zubi} alt="" height={1000} width={1000} className=" rounded-xl"/>
           </div>
           <div className="md:w-[50%] md:backdrop-blur-xl backdrop-blur-xl mt-16  p-5 rounded-lg text-stone-50 text-[15px]  md:text-[30px] font-light">
           The mother of Art is Architecture.<br/> Without an architecture of our own we have no soul of our own civilisation.<br/><br/>
          <span className="md:text-[50px] text-[30px] font-bold">- Frank Lloyd Wright.</span>

           </div>
        </div>
    </section>
  )
}
export default Hero

