'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const FitnessVision = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
  }, [])

  return (
    <section
      ref={containerRef}
      className="flex flex-col md:flex-row items-center justify-between gap-10 bg-black text-white p-8 rounded-xl max-w-7xl mx-auto"
    >
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src="/fitnessmodel.png" // 👈 Replace with your actual image
          alt="Fitness Model"
          width={500}
          height={600}
          className="rounded-xl object-cover"
        />
        {/* Stats */}
        <div className="absolute top-4 left-4 text-sm">
          <p className="text-teal-400 font-semibold text-lg">121</p>
          <p className="text-gray-300">💓 bpm</p>
        </div>
        <div className="absolute top-4 right-4 text-sm">
          <p className="text-pink-400 font-semibold text-lg">98.3</p>
          <p className="text-gray-300">🔻 SpO₂</p>
        </div>
        {/* Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition">
            💡 52 Fitness Suggestions
          </button>
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="bg-white/10 inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          Our Vision
        </div>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          We are on a mission to empower individuals worldwide to lead{' '}
          <span className="text-teal-400">healthier lives</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          By blending Fitness with precision{' '}
          <span className="text-sky-400 font-semibold">AI ML</span> we aim to make fitness and nutrition personalized
        </p>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>✅ AI Suggestions</span>
          <span>✅ Fitness Score</span>
        </div>
      </div>
    </section>
  )
}

export default FitnessVision
