"use client";

import logo from "@/public/Assets/zealogo.png"
import Image from "next/image"
import Link from "next/link"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useEffect, useState } from "react"
 

const Navbar = () => {
  const [header , setHeader] = useState(false);
    const scrollHeader = () => {
        if(window.scrollY >= screen.height*0.1){
            setHeader(true);
        }else{
            setHeader(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
                    }
    },[])
  return (
    <div className={header ? 'z-50 fixed text-black  w-screen h-fit bg-stone-50 transition-all ease-in-out' : 'z-50 fixed transition-all text-stone-50 w-screen h-fit backdrop-blur-md opacity-100 ease-in-out'}>
        <div className=" max-w-7xl mx-auto flex items-center justify-between ">
            <div className=" pt-2 pl-0 w-[40%] flex justify-start p-4">
                {/* <Image src={logo} height={100} width={150} alt="logo"/> */}
                    <Link className="p-4 hover:text-black/80" href={"/"}>
                <Avatar>
                    {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
                    <AvatarFallback className={header ? 'text-stone-950 bg-stone-300 transition-all ease-in-out ' : ' bg-black hover:bg-stone-300 transition-all ease-in-out hover:text-stone-950' }>ZE</AvatarFallback>
                </Avatar>
                    </Link>
            </div>
            <div className="w-[50%] p-5 text-[18px] font-medium   flex justify-between">
                <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 ' } href={"/about"}><span className="">About</span></Link>
                <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 ' } href={"/"}><span className="">Team</span></Link>
                <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 ' } href={"/projects"}><span className="">Projects</span></Link>
                <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 ' } href={"/"}><span className="">Insights</span></Link>
                <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 ' } href={"/"}><span className="">Contact</span></Link>
            </div>
        </div>
    </div>
  )
}
export default Navbar