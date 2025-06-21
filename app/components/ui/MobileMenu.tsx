"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import { NavLink } from "./Navlinks";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = menuRef.current;

    if (isOpen && el) {
      gsap.fromTo(
        el,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" }
      );
    } else if (!isOpen && el) {
      gsap.to(el, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          // Optional: hide it or do something after animation
        },
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 inset-0 w-full h-[480px] rounded-3xl z-[99] text-white/50 bg-black/70 border-2 border-gray-800 backdrop-blur-sm p-6"
    >
      
      <div className="flex justify-between items-start mb-10">
        <span className=" font-bold text-xl">ZeezFitHub</span>
        <button onClick={onClose}>
          <X className=" w-6 h-6" />
        </button>
      </div>

      <nav className="flex flex-col gap-6">
        <NavLink href="#services">Home</NavLink>
        <NavLink href="#projects">Assessment</NavLink>
        <NavLink href="#testimonials">Pricing</NavLink>
        <NavLink href="#contact">Faq</NavLink>
        <NavLink href="#contact">Pricing</NavLink>


        <div className="grid  gap-4">
            <button className="rounded-full bg-transparent shadow-xs  border-gray-100/20 font-semibold backdrop-blur-md py-2 px-6 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition">
            About us
            </button>
          <button className="rounded-full text-black/80 font-semibold bg-white  py-2 px-6 flex items-center justify-center gap-2 hover:bg-black/50 hover:text-white transition">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};
