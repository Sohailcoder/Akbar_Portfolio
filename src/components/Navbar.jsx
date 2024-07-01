import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="mb-4 lg:mb-20 flex flex-wrap items-center justify-between py-6 ">
      <div className="flex items-center w-full lg:w-auto gap-2 mb-4 lg:mb-0">
        <div className="flex gap-3 md:flex-1 items-center">
          <div className="rounded-2xl border-4 border-neutral-800">
            <img 
              src={logo} 
              className="w-17 h-16 lg:w-[5rem] lg:h-16 mt-2 p-0.5" 
              alt="Logo" 
            />
          </div>
          <p className="logo text-4xl lg:text-6xl mt-5">Akbar.Ali</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-auto gap-2 lg:gap-6 text-xl lg:text-2xl">
        <a href="http://www.linkedin.com/in/Akbar3D" className="hover:text-blue-500" aria-label="LinkedIn" target='_blank'>
          <FaLinkedinIn />
        </a>
        <a href="" className="hover:text-purple-500" aria-label="Discord">
          <SiDiscord />
        </a>
        <a href="https://www.instagram.com/the_deadly_saber?igsh=Y3VqZzBjNG5zaHpw" className="hover:text-pink-500" aria-label="Instagram" target='_blank'>
          <FaInstagram />
        </a>
        <a href="https://x.com/Swagsterskh?t=nmd5ngGVWkJSH70EemTzog&s=08" className="hover:text-blue-400" aria-label="Twitter" target='_blank'>
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
