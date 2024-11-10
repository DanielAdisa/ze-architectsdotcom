import Link from "next/link"
import Hero from "./Hero"

const Footer = () => {
  return (
    <section id="footer" className=" mt-20 text-stone-50 w-full pt-[40px] p-16 h-[300px] rounded-t-xl bg-black">
        <div className="flex w-full items-cente justify-between">

        <div className="flex-col space-y-4 text-start w-1/3">
          <div className="">1 Rosse Court Heights, Balgaddy,<br/> Lucan, Co. Dublin</div>
          <div className="">Mobile: +353 86 1750772</div>
          <div className="">Email: zubi@ze-architects.com</div>
        </div>

        <div className="text-cent w-1/3">
          Socials
        </div>

        <div className="w-1/3 text-right">
          <Link href={"/"}>Back To top</Link>
        </div>
        </div>

        <div className=""></div>
    </section>
  )
}
export default Footer