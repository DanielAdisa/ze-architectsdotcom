import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Latest from "./components/Latest";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Latest />
    </div>
  );
}

