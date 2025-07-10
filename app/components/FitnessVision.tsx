'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Activity, Check, Globe2Icon, Heart, HeartIcon, Lightbulb } from 'lucide-react'

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
      className="flex flex-col items-center justify-between gap-10 bg-black text-white p-4 md:p-8 max-w-full md:max-w-7xl mx-auto"
    >
      <div className="flex justify-center items-center w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-6 md:gap-8">
          <div className="relative p-2 md:p-4 rounded-2xl flex flex-col space-y-6 md:px-10 md:px-0 md:col-span-3">
            <div className="relative">
              <img
                src="/fitnessmodel.png"
                alt="Fitness Model"
                width={500}
                height={600}
                className="rounded-xl object-cover w-full h-[600px] md:max-h-[600px]"
              />
              <div className="absolute top-4 left-4 md:top-8 md:left-8 text-xs md:text-sm">
                <p className="font-semibold text-base md:text-lg">121</p>
                <p className="text-gray-300 flex items-center gap-2">
                  <HeartIcon color="teal" height={16} width={16} /> bpm
                </p>
              </div>
              <div className="absolute top-4 right-4 md:top-8 md:right-8 text-xs md:text-sm">
                <p className="font-semibold text-base md:text-lg">98.3</p>
                <p className="text-gray-300 flex items-center gap-2">
                  <Activity color="red" height={16} width={16} /> SpO₂
                </p>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-green-500 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-green-600 transition flex items-center gap-2 md:gap-3">
                  <Lightbulb height={16} width={16} /> 52 Fitness Suggestions
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-15 px-0 md:px-15 rounded-2xl space-y-8 md:space-y-12 md:col-span-4 flex flex-col justify-center">
            <div className="border inline-block px-2 py-2 md:px-3 md:py-3 rounded-md text-xs font-semibold tracking-wide uppercase w-max md:mx-0 mx-auto">
                Our Vision
            </div>
            <h2 className="text-lg md:text-2xl font-semibold leading-tight">
              We are on a mission to empower individuals worldwide to lead{' '}
              <span className="text-teal-400">healthier lives</span>
            </h2>
            <h2 className="text-lg md:text-2xl font-semibold leading-tight">
              By blending Fitness with precision{' '}
              <span className="text-sky-400 font-semibold">AI ML</span> we aim to make fitness and nutrition personalized
            </h2>
            <div className="flex flex-row md:flex-row pt-8 md:pt-20 space-x-4  md:space-x-24 text-sm text-gray-400">
              <span className="flex items-center gap-2 md:gap-3">
                <Check height={16} width={16} /> AI Suggestions
              </span>
              <span className="flex items-center gap-2 md:gap-3">
                <Check height={16} width={16} /> Fitness Score
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FitnessVision
