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
      className="flex flex-col md:flex-row items-center justify-between gap-10 bg-black text-white p-8 rounded-xl max-w-7xl mx-auto"
    >
           <div className="flex justify-center items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-8">
      <div className=" md:col-span-3 relative p-4 rounded-2xl flex flex-col space-y-6">
        <img
          src="/fitnessmodel.png" 
          alt="Fitness Model"
          width={500}
          height={600}
          className="rounded-xl  object-cover"
        />
        <div className="absolute top-8 left-8 text-sm">
          <p className=" font-semibold text-lg">121</p>
          <p className="text-gray-300 flex justify-center items-center gap-2"><HeartIcon color='teal' height={16}  width={16}/>  bpm</p>
        </div>
        <div className="absolute top-8 right-8 text-sm">
          <p className=" font-semibold text-lg">98.3</p>
          <p className="text-gray-300 flex justify-center items-center gap-2"><Activity color='red' height={16}  width={16}/>  SpO₂</p>
        </div>
        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2">
          <button className="bg-green-500 px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-green-600 transition flex justify-center items-center gap-3">
            <Lightbulb height={16}  width={16}/> 52 Fitness Suggestions
          </button>
        </div>
      </div>

      <div className="md:col-span-4 pt-15 px-15 rounded-2xl space-y-12">
        <div className="border  inline-block px-3 py-3 rounded-md text-xs font-semibold tracking-wide uppercase">
          Our Vision
        </div>
        <h2 className="text-xl md:text-2xl font-semibold leading-tight">
          We are on a mission to empower individuals worldwide to lead{' '}
          <span className="text-teal-400">healthier lives</span>
        </h2>
        <h2 className="text-xl md:text-2xl font-semibold leading-tight">
          By blending Fitness with precision{' '}
          <span className="text-sky-400 font-semibold">AI ML</span> we aim to make fitness and nutrition personalized
        </h2>
        <div className="flex pt-20 space-x-24 text-sm text-gray-400">
          <span className='flex justify-center items-center gap-3'><Check height={16}  width={16}/>  AI Suggestions</span>
          <span  className='flex justify-center items-center gap-3'><Check height={16}  width={16}/>   Fitness Score</span>
        </div>
      </div>


      </div>
      </div>
    </section>
  )
}

export default FitnessVision
