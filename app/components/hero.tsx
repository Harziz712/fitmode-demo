'use client';

import { ArrowDownIcon } from "lucide-react";



const Hero = () => {
  return (
<section
  id="home"
  className="relative px-4 md:py-48 pt-48  md:pt-72 pb-5 h-[100vh] overflow-hidden border-b-2 border-b-neutral-600 bg-[url(/herobg.png)] bg-cover bg-center bg-no-repeat bg-fixed"
>
      <div className="absolute inset-0 bg-black/20 z-10" />

  <div className="flex flex-col md:flex-row items-center  justify-between h-full w-full">
    <div className="flex-1 w-full h-[100vh] flex items-center">
      <div className="z-10 w-full lg:w-3/4 text-left text-white mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Next.<br />
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Generation.</span><br />
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Fitness.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10">
          At ZeezFitHub, we’re not just a fitness and nutrition platform; we’re your dedicated partners on your journey to a healthier, happier you.
        </p>
        <button
          onClick={() => window.location.href = "#about"} 
          className="border border-white text-white hover:bg-white rounded-md hover:text-black transition-all flex items-center gap-2 px-4 py-2 "
        >
         Meet Our Team <ArrowDownIcon /> 
        </button>
      </div>
    </div>
    <div className="flex-1 w-full h-[100vh] relative">
      {/* <img
        src="/heroimg.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}
    </div>
  </div>
</section>

  );
};

export default Hero;
