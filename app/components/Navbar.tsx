"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "./ui/MobileMenu";
import { NavLink } from "./ui/Navlinks";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl px-6 py-3 gap-20 rounded-full text-white/50 bg-transparent backdrop-blur-md border border-gray-100/20 flex justify-between items-center overflow-none">
        <a href="#home" className=" font-semibold text-2xl flex items-center gap-2">
          ZeezFitHub
        </a>

        <nav className="hidden md:flex  items-center gap-6">
         <NavLink href="#services">Home</NavLink>
        <NavLink href="#projects">Assessment</NavLink>
        <NavLink href="#testimonials">Pricing</NavLink>
        <NavLink href="#contact">Faq</NavLink>
        <NavLink href="#contact">Privacy</NavLink>
        </nav>

        <div className="hidden md:flex gap-4">
            <button className="rounded-full bg-transparent shadow-lg shadow-black/40 border-gray-100/20 font-semibold backdrop-blur-md py-2 px-6 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition">
            About us
            </button>
          <button className="rounded-full text-black/80 font-semibold bg-white  py-2 px-6 flex items-center justify-center gap-2 hover:bg-black/50 hover:text-white transition">
            Sign up
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileOpen(true)}>
          <Menu className=" w-6 h-6" />
        </button>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};

export default Navbar