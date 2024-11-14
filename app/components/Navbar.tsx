"use client";

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [header, setHeader] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollHeader = () => {
        if (!isMobileMenuOpen) {
            setHeader(window.scrollY >= window.innerHeight * 0.1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`${
                header ? "bg-white shadow-xl text-black" : "backdrop-blur-md text-white"
            } fixed top-0 w-full z-50 transition-all duration-300`}
        >
            <nav className="max-w-[95%] mx-auto flex items-center justify-between h-16 px-4 lg:px-0">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Avatar>
                        <AvatarFallback
                            className={`${
                                header ? "text-black bg-gray-200" : "text-white bg-black"
                            } transition duration-300`}
                        >
                            ZE
                        </AvatarFallback>
                    </Avatar>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden p-2 text-2xl text-inherit"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 text-lg font-medium">
                    {["About", "Team", "Projects", "Insights", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className={`${
                                header ? "hover:text-gray-700" : "hover:text-gray-300"
                            } transition duration-300`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-blue-600 h-screen flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold z-50 transition-opacity duration-300 ease-out">
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute top-6 right-6 text-3xl"
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                    {["About", "Team", "Projects", "Insights", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="hover:text-gray-200"
                            onClick={toggleMobileMenu}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;

// "use client";
// import { FaTimes } from "react-icons/fa";
// import { FaBars } from "react-icons/fa6";

// import logo from "@/public/Assets/zealogo.png"
// import Image from "next/image"
// import Link from "next/link"
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"
// import { useEffect, useState } from "react"
 

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     }

//     // const handleScroll = (e, id) => {

//     //     e.preventDefault();
//     //     const targetElement = document.getElementById(id);
//     //     if (targetElement)  {
//     //         const offsetTop = targetElement.offsetTop - 80;
//     //         window.scrollTo({
//     //             top: offsetTop,
//     //             behavior: "smooth"
//     //         })
//     //     }
//     //     setIsMobileMenuOpen(false)
//     // }

//   const [header , setHeader] = useState(false);
//     const scrollHeader = () => {
//         if(window.scrollY >= screen.height*0.1){
//             setHeader(true);
//         }else{
//             setHeader(false);
//         }
//     }

//     useEffect(() =>{
//         window.addEventListener('scroll', scrollHeader);
//         return () => {
//             window.removeEventListener('scroll', scrollHeader);
//                     }
//     },[])
//   return (
//     <div className={header ? 'z-50 fixed text-black  w-screen md:h-fit  bg-white shadow-xl transition-all ease-in-out' : 'z-50 fixed transition-all text-stone-50 w-screen md:h-fit  backdrop-blur-x opacity-100 ease-in-out'}>
//         <div className=" max-w-[95%] md:h-[70px] h-[80px] mx-auto flex  items-center justify-between ">
//             <div className=" pt-2 pl-0 w-[40%] flex justify-start p-4">
//                 {/* <Image src={logo} height={100} width={150} alt="logo"/> */}
//                     <Link className="p-4 hover:text-black/80" href={"/"}>
//                 <Avatar>
//                     {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
//                     <AvatarFallback className={header ? 'text-stone-950 bg-stone-300 transition-all ease-in-out ' : ' bg-black hover:bg-stone-300 transition-all ease-in-out hover:text-stone-950' }>ZE</AvatarFallback>
//                 </Avatar>
//                     </Link>
//             </div>
//             <div className="lg:hidden p-5">
//                 <button onClick={toggleMobileMenu }>
//                     {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>
//             <div className="w-[50%] text-[18px] font-medium hidden   md:flex justify-between">
//                 <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 bg-black/70 rounded-md ' } href={"/about"}><span className="">About</span></Link>
//                 <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 bg-black/70 rounded-md ' } href={"/"}><span className="">Team</span></Link>
//                 <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 bg-black/70 rounded-md ' } href={"/projects"}><span className="">Projects</span></Link>
//                 <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 bg-black/70 rounded-md ' } href={"/"}><span className="">Insights</span></Link>
//                 <Link className={header ? ' p-4 hover:text-black/60 ' : 'p-4 hover:text-white/60 bg-black/70 rounded-md ' } href={"/"}><span className="">Contact</span></Link>
//             </div>
//         </div>
//         {isMobileMenuOpen && (
//             <div className="w-full space-y-5 mt-0 pt-0  p-5 text-center backdrop-blur-2xl lg:hidden h-fit ">
//                 <Link className={header ? '  hover:text-black/60 w-full ' : ' hover:text-white/60 ' } href={"/about"}><span className="">About</span></Link><br/>
//                 <Link className={header ? '  hover:text-black/60 w-full ' : ' hover:text-white/60 ' } href={"/"}><span className="">Team</span></Link><br/>
//                 <Link className={header ? '  hover:text-black/60 w-full ' : ' hover:text-white/60 ' } href={"/projects"}><span className="">Projects</span></Link><br/>
//                 <Link className={header ? '  hover:text-black/60 w-full ' : ' hover:text-white/60 ' } href={"/"}><span className="">Insights</span></Link><br/>
//                 <Link className={header ? '  hover:text-black/60 w-full ' : ' hover:text-white/60 ' } href={"/"}><span className="">Contact</span></Link><br/>
//             </div>
//         )}
//     </div>
//   )
// }
// export default Navbar