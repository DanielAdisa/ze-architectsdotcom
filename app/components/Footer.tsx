import Link from "next/link"
import Hero from "./Hero"

const Footer = () => {
  return (
    <section id="footer" className=" absolut bottom- mt-20 text-stone-50 w-full pb- pt-[40px] p-16 h-fit rounded-t-xl bg-black">
        <div className="md:flex w-full items-cente justify-between">

        <div className="md:flex-col md:space-y-4 space-y-10 text-start md:w-1/3">
          <div className="">1 Rosse Court Heights, Balgaddy,<br/> Lucan, Co. Dublin</div>
          <div className="">Mobile: +353 86 1750772</div>
          <div className="">Email: zubi@ze-architects.com</div>
        </div>

        <div className="text-cent md:w-1/3">
          Socials
        </div>

        <div className="md:w-1/3 mt-5 text-right">
          <Link href={"/"}>Back To top</Link>
        </div>
        </div>

        <div className=""></div>
    </section>
  )
}
export default Footer