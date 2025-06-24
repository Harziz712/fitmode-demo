'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

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
    <div
      ref={cardRef}
      onClick={onClick}
      className="relative group cursor-pointer rounded-xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800 text-white transition-all duration-300 hover:scale-[1.015] border border-neutral-700"
    >
      <img src={member.image} alt={member.name} className="w-full h-80 object-cover opacity-70 group-hover:opacity-100 transition" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-neutral-400">{member.role}</p>
      </div>
      {/* Social Icons on hover */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Object.entries(member.socials).map(([key, url]) => (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer">
            <span className="text-white text-xl hover:text-green-400">
              {key === 'twitter' ? '🐦' : key === 'linkedin' ? '🔗' : '📘'}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
