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
              <div
                key={item.id}
                className="rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left"
              >
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
                      <p className="text-[#444] font-bold text-sm">
                        {item.year}
                      </p>
                    </div>
                    <div className="w-[0.946px] h-[27.017px] bg-[#EBEBEB] border-l border-primary"></div>
                    <div className="flex flex-col ">
                      <p className="text-[#444] text-xs">{item.metertype}</p>
                      <p className="text-[#444] font-bold text-sm">
                        {item.meter}
                      </p>
                    </div>
                    <div className="w-[0.946px] h-[27.017px] bg-[#EBEBEB] border-l border-primary"></div>
                    <div className="flex flex-col ">
                      <p className="text-[#444] text-xs">{item.engine}</p>
                      <p className="text-[#444] font-bold text-xs">
                        {item.fuel}
                      </p>
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
              <div className="flex flex-col gap-5 p-2">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                    Volkswagen Polo 1.2 TDI
                  </div>
                  <p className="text-[#444] text-sm pl-10">
                    Date Published: 12/10/2023
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-5">
                    <p className="mb-2 text-xl font-bold text-secondary text-neutral-500 dark:text-neutral-300">
                      20,300 €
                    </p>
                    <del>20,300 €</del>
                  </div>
                  <p className="text-[#444] text-sm ">+ Omregistrering</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-7">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">Vehicle type</p>
                        <p className="text-[#444] font-bold text-base">Sedan</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">HP/kW</p>
                        <p className="text-[#444] font-bold text-base">55/75</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">Gearbox type</p>
                        <p className="text-[#444] font-bold text-base">Auto</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">Doors number</p>
                        <p className="text-[#444] font-bold text-base">4</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">Kilometers</p>
                        <p className="text-[#444] font-bold text-base">
                          150,000 km
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">cm3</p>
                        <p className="text-[#444] font-bold text-base">2000</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">Manufacture year</p>
                        <p className="text-[#444] font-bold text-base">2019</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[#444] text-xs">Fuel type</p>
                        <p className="text-[#444] font-bold text-base">
                          Diesel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-5">
                  <div className="flex gap-2">
                    <div className="flex justify-center items-center w-full lg:w-[83px] h-[31px] bg-primary rounded-[8px]">
                      <p className="text-[#ffffff] text-xs">Damaged</p>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-[112px] h-[31px] bg-primary rounded-[8px]">
                      <p className="text-[#ffffff] text-xs">{`(Not)Registered`}</p>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-[86px] h-[31px] bg-primary rounded-[8px]">
                      <p className="text-[#ffffff] text-xs">Guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M8.99991 10.0726C10.2923 10.0726 11.3399 9.02492 11.3399 7.73258C11.3399 6.44023 10.2923 5.39258 8.99991 5.39258C7.70757 5.39258 6.65991 6.44023 6.65991 7.73258C6.65991 9.02492 7.70757 10.0726 8.99991 10.0726Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                        />
                        <path
                          d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <p>Prigrevica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
