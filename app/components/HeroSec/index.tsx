import React from 'react'
import Image from 'next/image'

export default function HeroSec() {
  return (
    <div className='w-full'>
       <div className='w-full relative'>
         <Image
          src="/assest/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="object-cover w-full h-[496px]"
        />
       </div>
    </div>
  )
}
