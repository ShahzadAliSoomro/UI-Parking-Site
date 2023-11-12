import React from 'react'

export default function Footer() {
  return (
    <div className='w-full bg-[#003087] text-white '>
      <div className='container mx-auto w-full lg:w-[1160px] p-5'>
        <div className='flex items-center gap-8'>
          {/* /// first section /// */}
           <div className='flex flex-col gap-5'>
            <div>
              <h1 className='text-2xl w-[400px]'>The most wanted makes and models</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <div className='w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white'>
                  <button>Audi A4</button>
                </div>
                <div className='w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white'>
                  <button>Volkswagen</button>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white'>
                  <button>Skoda Octavia</button>
                </div>
                <div className='w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white'>
                  <button>BMW 5 Series</button>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white'>
                  <button>Fiant Punto</button>
                </div>
                <div className='w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white'>
                  <button>Renault Clio</button>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 pt-32'>
              <div className='flex gap-5'>
              <div className="flex">
                <label htmlFor="underline_select" className=" text-black">
                  {/* <IoIosNotificationsOutline className="text-black w-7 h-7" /> */}
                </label>
                <select
                  id="underline_select"
                  className=" text-black bg-white w-[80px] rounded-lg"
                >
                  <option selected>English</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className='w-[60px] h-[40px] bg-[#EF2C2E] rounded-lg flex justify-center text-white'>
                <button>light</button>
              </div>
              </div>
              
            </div>
           </div>
           {/* /// second section /// */}
           <div className='flex flex-col gap-5'>
            <div>
              <h1>Quick Links</h1>
            </div>
            <div className='flex flex-col gap-3 text-sm'>
              <div>Vehicle assessment</div>
              <div>Safe, scam-free used car shopping</div>
              <div>Email ads</div>
              <div>Book of impressions</div>
              <div>Advantages of advertising</div>
              <div>Frequently asked questions</div>
              <div>Digital advertising</div>
              <div>About us</div>
              <div>Terms of use</div>
              <div>Privacy notice</div>
              <div>You provide car services</div>
              <div>Mobile applications</div>
              <div>Friends of the site</div>
            </div>
           </div>
        </div>
        <div className='w-full lg:w-[1160px] border-b border-white pt-5'></div>
      </div>
    </div>
  )
}
