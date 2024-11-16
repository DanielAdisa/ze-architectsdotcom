// Footer.tsx

import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaSquareInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-stone-50 w-full p-8 md:p-8 bg-blue-900 rounded-t-x">
      <div className="md:flex w-full items-center justify-between">
        
        {/* Address Section */}
        <div className="space-y-4 text-start md:w-1/3">
          <div>1 Rosse Court Heights, Balgaddy,<br /> Lucan, Co. Dublin</div>
          <div>Mobile: +353 86 1750772</div>
          <div>Email: <Link href="mailto:zubi@ze-architects.com" className="underline hover:text-blue-300">zubi@ze-architects.com</Link></div>
        </div>

        {/* Socials Section */}
        <div className="text-center md:w-1/3 mt-10 md:mt-0">
          <h3 className="font-semibold text-lg">Socials</h3>
          <ul className="flex h-fit w-full items-center justify-center gap-5 mt-10">
            <li><Link href="#" className="hover:text-blue-300 hover:bg-white/10"><FaLinkedinIn className=" md:text-3xl text-xl"/></Link></li>
            <li><Link href="#" className="hover:text-blue-300 hover:bg-white/10"><FaTwitter className=" md:text-3xl text-xl"/></Link></li>
            <li><Link href="#" className="hover:text-blue-300 hover:bg-white/10"><FaInstagram className=" md:text-3xl text-xl"/></Link></li>
          </ul>
        </div>

        {/* Back to Top Section */}
        <div className="md:w-1/3 mt-10 md:mt-0 text-right">
          <Link href="#top">
            <Link href={"#top"} className="text-blue-200 font-semibold hover:text-blue-300">Back to Top</Link>
          </Link>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-8 pt-4 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} ZE Architects. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
