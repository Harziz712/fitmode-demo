"use client"

import CoreValues from "./components/CoreValues";
import FitnessVision from "./components/FitnessVision";
import Hero from "./components/hero";
import Navbar  from "./components/Navbar";
import OurStory from "./components/OurStory";


export default function Home() {
  return (
    <>
   <Navbar/>
     <main className="relative">
        <Hero />
       <FitnessVision/>
       <CoreValues/>
       <OurStory/>
        {/* Other sections go here */}
      </main>
    </>
  );
}
