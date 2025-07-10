'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { LuggageIcon } from 'lucide-react'

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="p-4 sm:p-6 md:p-10"
    >
      <div className="w-full rounded-2xl bg-gradient-to-r from-teal-400 via-teal-400 to-green-400 p-0">
        <div className="w-full rounded-2xl bg-gradient-to-r from-teal-400 via-teal-400 to-green-400 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg bg-[url(/barbell.png)] bg-cover bg-center bg-no-repeat min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <div className="flex flex-col gap-4 md:gap-10  max-w-full md:max-w-xl pt-24 md:pt-0 md:pl-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Let's Join Our Team!
            </h2>
            <p className="flex items-center gap-2 text-white/90 font-medium text-base sm:text-lg md:text-xl">
              <LuggageIcon /> <span>87 Openings Available.</span>
            </p>
            <button className="mt-2 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-full w-fit hover:bg-gray-200 transition">
              See Job Openings →
            </button>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
