import React from 'react'
import Sidebar from '../components/Sidebar'
import ProductCard from '../components/ProductCard'

export default function BookingDeshboard() {
  return (
    <div className='w-full lg:p-10 p-2'>
        <div className='mx-auto w-full lg:w-[1160px]'>
            {/* /// Top text /// */}
            <div className='flex gap-5 text-primary font-medium lg:text-lg text-xs'>
                    <div className='flex gap-2'>
                        <p>{`Home `}</p>
                        <span>{`>`}</span>
                    </div>
                    <div className='flex gap-2'>
                    <p>{`My car search  `}</p>
                        <span>{`>`}</span>
                    </div>
                    <div className='flex gap-2'>
                    <p>{`1,421,546 offers `}</p>
                        <span>{`>`}</span>
                    </div>
                    
                    <p></p>
                    <p>{`Kia Stonic 1.4 MPI EX URBAN A/T`}</p>
                </div>
            <div className='w-full lg:w-[1160px] flex gap-5 pt-5 flex-wrap lg:flex-nowrap'>
                
                <div className='w-full lg:w-[294px] border-2 border-[#EBEBEB] rounded-[8px]'>
                    <div className=''><Sidebar/></div>
                </div>
                <div className='w-full lg:w-[866px] border-2 border-[#EBEBEB] rounded-[8px]'>
                    <div className=''><ProductCard/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
