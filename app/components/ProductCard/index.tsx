import React from "react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-5 p-5">
        {/* /// Forst three cards /// */}
        <div className="flex gap-2">
          <div className="w-full lg:w-[260.058px] h-[326.254px]">
            {/* <!-- Card --> */}
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left">
              {/* <!-- Card image --> */}
              <div>
                <Image
                  className="rounded-t-[8px] w-full lg:w-[260.058px] h-[208.992px] object-cover"
                  src="/assest/hero.png"
                  alt=""
                  width={500}
                  height={500}
                  
                />
              </div>

              
              <div className="p-5">
                {/* <!-- Title --> */}
                <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                Volkswagen Tiguan
                </h5>

                {/* <!-- Text --> */}
                <p className="mb-2 text-xl font-bold text-secondary text-neutral-500 dark:text-neutral-300">
                20,300 €
                </p>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
