'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ourStoryData } from '../data/data';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray<HTMLElement>('.year-section');

    if (!container || sections.length === 0) return;

    // Assign a unique id for the container animation
    const containerAnimationId = 'ourStoryContainerAnimation';

    // Scroll entire container horizontally
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        id: containerAnimationId,
        trigger: container,
        start: 'center center',
        end: () => '+=' + container.offsetWidth,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
      },
    });

    // Scroll-triggered progress bar for each section
    sections.forEach((section) => {
      const progressBar = section.querySelector('.section-progress');

      if (progressBar) {
        gsap.fromTo(
          progressBar,
          { width: '0%' },
          {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              containerAnimation: ScrollTrigger.getById(containerAnimationId)?.animation,
              start: 'left center',
              end: 'right center',
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="w-full overflow-hidden min-h-screen bg-black text-white border-t border-b border-neutral-600 py-20 text-center relative">
      <h2 className="text-3xl font-semibold mb-20 z-10 relative">Our Story</h2>

      {/* Horizontal Scroll Section */}
      <div
        ref={containerRef}
        className="flex w-[1100vw] h-[80vh] items-center px-10 space-x-5 md:space-x-16"
      >
        {ourStoryData.map((item) => (
          <div
            key={item.year}
            className="year-section w-full  md:w-[70vw] h-[500px] px-10 rounded-[50px] flex flex-col justify-center items-start text-left relative bg-[url(/gymhouse.jpg)] bg-cover bg-center bg-no-repeat shadow-lg shadow-neutral-500/20 border border-gray-100/20"
          >
            <h1 className="text-8xl font-digital mb-4">{item.year}</h1>

            {/* Individual scroll-bound progress bar */}
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden mb-6">
              <div
                className="section-progress h-full w-0 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
              />
            </div>

            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 max-w-xl">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
