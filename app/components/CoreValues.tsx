import React from 'react'
import ValueBox from './ui/ValueBox'

const CoreValues = () => {
  return (
       <div id='corevalues' className="min-h-screen bg-black text-white pb-24 border-t  border-b-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>

           <div className='grid grid-cols-1 md:p-20 md:grid-rows-2  gap-6'>
             <ValueBox className=" bg-[url(/kickbox.jpeg)] bg-cover bg-center bg-no-repeat " id='01' title="Empowerment First" description="We empower individuals to take control of their health and fitness journey everyday"/>
             <ValueBox className=" bg-[url(/wei.jpg)] bg-cover bg-left-top bg-no-repeat "  id='02' title="Inclusivity Activity" description="We believe in a fitness community that is diverse, supportive and inclusive"/>
           </div>

            </div>
            </div>
        </div>
  )
}

export default CoreValues