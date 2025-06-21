"use client"

import Hero from "./components/hero";
import Navbar  from "./components/Navbar";


export default function Home() {
  return (
    <>
   <Navbar/>
     <main className="relative">
        <Hero />
       <FitnessVision/>
        {/* Other sections go here */}
      </main>
    </>
  );
}
