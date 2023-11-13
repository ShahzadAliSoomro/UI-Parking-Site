import React from "react";
import Image from "next/image";

const FirstCard = [
  {
    id: 1,
    src: "/assest/F1.png",
    title: "Volkswagen Tiguan",
    price: "20,300 €",
    text: "year",
    year: "2019",
    metertype: "kilometers",
    meter: "185 000",
    engine: "Engine",
    fuel: "Petrol",
  },
  {
    id: 2,
    src: "/assest/f2.png",
    title: "Ford Mondeo ST ",
    price: "20,300 €",
    text: "year",
    year: "2019",
    metertype: "kilometers",
    meter: "185 000",
    engine: "Engine",
    fuel: "Petrol",
  },
  {
    id: 3,
    src: "/assest/f3.png",
    title: "Ford Mondeo ST ",
    price: "20,300 €",
    text: "year",
    year: "2019",
    metertype: "kilometers",
    meter: "185 000",
    engine: "Engine",
    fuel: "Petrol",
  },
];

export default function ProductCard() {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-5 p-5">
        {/* /// Forst three cards /// */}
        <div className="w-full lg:w-[866px]">
          <div className="w-full flex gap-5">
            {FirstCard.map((item) => (
               <div key={item.id} className="rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left">
              {/* <!-- Card image --> */}
              <div>
                <Image
                  className="rounded-t-[8px] w-full lg:w-[261.058px] h-[208.992px] object-cover"
                  src={item.src}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="p-5">
                {/* <!-- Title --> */}
                <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                  {item.title}
                </h5>

                <p className="mb-2 text-xl font-bold text-secondary text-neutral-500 dark:text-neutral-300">
                  {item.price}
                </p>
                <div className="flex justify-between pt-4">
                  <div className="flex flex-col ">
                    <p className="text-[#444] text-xs">{item.text}</p>
                    <p className="text-[#444] font-bold text-sm">{item.year}</p>
                  </div>
                  <div className="w-[0.946px] h-[27.017px] bg-[#EBEBEB] border-l border-primary"></div>
                  <div className="flex flex-col ">
                    <p className="text-[#444] text-xs">{item.metertype}</p>
                    <p className="text-[#444] font-bold text-sm">{item.meter}</p>
                  </div>
                  <div className="w-[0.946px] h-[27.017px] bg-[#EBEBEB] border-l border-primary"></div>
                  <div className="flex flex-col ">
                    <p className="text-[#444] text-xs">{item.engine}</p>
                    <p className="text-[#444] font-bold text-xs">{item.fuel}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}
            {/* <!-- Card --> */}
           
            {/* <!-- Card --> */}
          </div>
        </div>
        {/* /// Second cards /// */}
        <div className="flex flex-col">
        <div className="w-full lg:w-[818px] border border-[#EBEBEB]">
          <div className="flex gap-1 p-2">
            
            <div>
                <Image
                  className="rounded-t-[8px] w-full lg:w-[315px] h-[300px] object-cover"
                  src="/assest/s2.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}