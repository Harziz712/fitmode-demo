import { ArrowUpLeft } from 'lucide-react';
import React from 'react'

type ValueBoxProps = {
  className?: string;
  id:string
  title: string;
  description?: string;
}

const ValueBox: React.FC<ValueBoxProps> = ({ className , id , title, description}) => {

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 group cursor-pointer ${className} border h-[360px] w-full rounded-[25px] shadow-md transition-all duration-300
        border-neutral-700
        group-hover:border-transparent
        group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-cyan-400
        `}
      style={{
        // Use a pseudo-border effect with a gradient on hover
        boxShadow:
          '0 0 0 2px transparent',
      }}
    >
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className='absolute top-5 left-5 text-md md:text-2xl'>{id}</h3>

      <div className='absolute w-1/2  bottom-0 left-5 text-md px-5 grid grid-cols-1 py-10 md:grid-cols-3 gap-6 text-left'>
        <p className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-bold col-span-1 text-xl'>{title} </p>
        <p className='text-gray-300 col-span-2'>{description}</p>
      </div>
      <a
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ArrowUpLeft className="h-4 w-4 text-black" />
      </a>
      {/* Gradient border effect */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[25px] p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to right, #22d3ee, #06b6d4)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
    </div>
  )
}

export default ValueBox