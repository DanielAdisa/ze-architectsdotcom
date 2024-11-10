import Image from "next/image"
import zubi from "@/public/Assets/zubi.png"

const Hero = () => {
  return (
    <section  id="hero" className="hero fixed flex items-center h-screen w-screen mx-auto">
        <div className=" w-9/12 flex items-center rounded-md mx-auto h-auto">
           <div className="w-[50%]">
              <Image src={zubi} alt="" height={1000} width={1000} className=" rounded-md"/>
           </div>
           <div className="w-[50%]   p-5 rounded-lg text-stone-50 text-[30px] font-normal">
           The mother of Art is Architecture.<br/> Without an architecture of our own we have no soul of our own civilisation.<br/><br/>
          <span className="text-[50px] font-bold">- Frank Lloyd Wright.</span>

           </div>
        </div>
    </section>
  )
}
export default Hero

