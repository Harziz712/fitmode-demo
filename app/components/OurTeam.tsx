'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Azunyan U. Wu',
    role: 'CEO, Co-Founder',
    image: '/fitnessmodel.png',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Bocchi D. Rock',
    role: 'Chief Scientific Officer',
    image: '/fitnessmodel.png',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Jared M. Leto',
    role: 'Senior Product Designer',
    image: '/fitnessmodel.png',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const OurTeam = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      const image = card.querySelector('img');
      const socials = card.querySelector('.social-icons');

      gsap.set(socials, { autoAlpha: 0, y: 20 });

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { borderColor: '#22c55e', duration: 0.3 });
        gsap.to(socials, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { borderColor: 'transparent', duration: 0.3 });
        gsap.to(socials, { autoAlpha: 0, y: 20, duration: 0.4, ease: 'power2.out' });
      });
    });
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Sherlock D. Holmes"
              className="w-full px-4 py-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none"
            />
            <button className="absolute right-3 top-3 text-gray-500">🔍</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el!; }}
              className="group relative rounded-xl border-2 border-transparent p-6 transition-all duration-300 bg-gradient-to-b from-neutral-900 to-black"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="rounded-lg object-cover w-full h-64"
              />

              {/* Social Icons */}
              {member.social && Object.keys(member.social).length > 0 && (
                <div className="social-icons absolute top-4 left-4 flex gap-4">
                  {member.social.twitter && <a href={member.social.twitter}>🐦</a>}
                  {member.social.instagram && <a href={member.social.instagram}>📸</a>}
                  {member.social.linkedin && <a href={member.social.linkedin}>💼</a>}
                </div>
              )}

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300">
            Load More Members ➕
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
