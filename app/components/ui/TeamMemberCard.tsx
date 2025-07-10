'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, X } from 'lucide-react';
import GradientBorderWrapper from './GradientBorderWrapper';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  member: {
    name: string;
    role: string;
    image: string;
    socials: Record<string, string>;
  };
  onClick: () => void;
};

export const TeamMemberCard = ({ member, onClick }: Props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <GradientBorderWrapper
      ref={cardRef}
      onClick={onClick}
      className="w-[350px] h-[420px] sm:h-[420px] sm:w-[300px] relative group"
      rounded="rounded-xl"
    >
      {/* Image */}
      <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover opacity-40 grayscale-100 group-hover:opacity-100 transition rounded-xl"
      />

      {/* Name and Role */}
      <div className="p-4 z-20 absolute bottom-0 left-0 right-0">
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-neutral-400">{member.role}</p>
      </div>

      {/* Social Icons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center items-center py-2 px-4 rounded-md bg-white/20 backdrop-blur-lg shadow-lg z-20 sm:static sm:opacity-100 sm:bg-white/10 sm:backdrop-blur-none sm:shadow-none sm:p-2 sm:mt-2">
      {Object.entries(member.socials).map(([key, url]) => (
        <a key={key} href={url} target="_blank" rel="noopener noreferrer">
        <span className="text-white text-sm hover:text-green-400 text-center flex items-center justify-center">
          {key === 'twitter' ? (
          <X size={20} />
          ) : key === 'linkedin' ? (
          <Linkedin size={20} />
          ) : (
          <Instagram size={20} />
          )}
        </span>
        </a>
      ))}
      </div>
    </GradientBorderWrapper>
  );
};
