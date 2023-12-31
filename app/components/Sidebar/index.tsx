"use client";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function Sidebar() {
  const [isMark, setIsMark] = useState(false);
  const [isModel, setIsModel] = useState(false);
  const [isYear, setIsYear] = useState(false);
  const [isYearTo, setIsYearTo] = useState(false);
  const [isMeter, setIsMeter] = useState(false);
  const [isMeterTo, setIsMeterTo] = useState(false);
  const [isFuel, setIsFuel] = useState(false);
  const [isVehicleType, setIsVehicleType] = useState(false);
  const [isPowerFrom, setIsPowerFrom] = useState(false);
  const [isPowerTo, setIsPowerTo] = useState(false);
  const [isTransmission, setIsTransmission] = useState(false);
  const [isRange, setIsRange] = useState(false);
  const [isCharge, setIsCharge] = useState(false);
  const [isChargeTime, setIsChargeTime] = useState(false);
  const [isBattryFrom, setIsBattryFrom] = useState(false);
  const [isBattryTo, setIsBattryTo] = useState(false);


  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 p-5">
        {/* /// Detailed search /// */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold text-secondary">Detailed search</p>
          <div className="w-full lg:w-[254px] h-[1px] border-[#EBEBEB] border-b-2"></div>
        </div>
        {/* /// mark, model, Variant /// */}

        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">Mark, model, Variant</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-2 items-center">
              <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <div
                  onClick={() => setIsMark(!isMark)}
                  className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] cursor-pointer"
                >
                  <div className="pl-3 text-primary font-medium">Mark</div>
                  <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                    <BiChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Dropdown content */}
                {isMark && (
                  <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                    <div className="px-3 py-2">Item 1</div>
                    <div className="px-3 py-2">Item 2</div>
                    <div className="px-3 py-2">Item 3</div>
                  </div>
                )}
              </div>
              {/* /// to Dropdown /// */}
              <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <div
                  onClick={() => setIsModel(!isModel)}
                  className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] text-primary cursor-pointer"
                >
                  <div className="pl-3 font-medium">Model</div>
                  <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                    <BiChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Dropdown content */}
                {isModel && (
                  <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                    <div className="px-3 py-2">Item 1</div>
                    <div className="px-3 py-2">Item 2</div>
                    <div className="px-3 py-2">Item 3</div>
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Variant"
                className="border border-primary p-2 font-medium text-primary placeholder:text-primary rounded-[8px] w-[254px] h-[44px]"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <p className=" text-secondary font-semibold border-b-secondary border-b">
              More
            </p>
          </div>
        </div>
        {/* /// border-b /// */}
        <div className="w-full lg:w-[254px] h-[1px] border-[#EBEBEB] border-b-2"></div>

        {/* /// Payment type /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">Payment type</p>
          </div>

          <div className="flex w-full lg:w-[254px] h-[44px] border border-primary rounded-[8px]">
            <div className="w-1/2 bg-secondary rounded-l-[8px] text-[#ffffff] font-medium p-2">
              Buy
            </div>
            <div className="w-1/2 rounded text-primary font-medium p-2">
              Leasing
            </div>
          </div>
        </div>
        {/* /// Year /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">Year</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsYear(!isYear)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] cursor-pointer"
              >
                <div className="pl-3 text-primary font-medium">Frome</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isYear && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
            {/* /// to Dropdown /// */}
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsYearTo(!isYearTo)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] text-primary cursor-pointer"
              >
                <div className="pl-3 font-medium">To</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isYearTo && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* /// kilometer /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">Kilometer</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsMeter(!isMeter)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] cursor-pointer"
              >
                <div className="pl-3 text-primary font-medium">Frome</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isMeter && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
            {/* /// to Dropdown /// */}
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsMeterTo(!isMeterTo)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] text-primary cursor-pointer"
              >
                <div className="pl-3 font-medium">To</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isMeterTo && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center w-full lg:w-[254px] bg-secondary h-[44px] rounded-[8px]">
            <div className="  text-[#ffffff] font-medium">
              5.221.456 results
            </div>
          </div>
          <div className="flex justify-center items-center w-full lg:w-[254px] bg-primary h-[44px] rounded-[8px]">
            <div className="  text-[#ffffff] font-medium">Save search</div>
          </div>
        </div>
        {/* /// border-b /// */}
        <div className="w-full lg:w-[254px] h-[1px] border-[#EBEBEB] border-b-2"></div>
        {/* /// Fuel type /// */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-[#444] font-bold">Fuel Type</p>
            </div>

            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsFuel(!isFuel)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] cursor-pointer"
              >
                <div className="pl-3 text-primary font-medium">Diesel</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isFuel && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center">
            {/* /// to Dropdown /// */}
            <div className="flex flex-col gap-2 ">
              <div>
                <p className="text-[#444] font-bold">Vehicle Type</p>
              </div>
              <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <div
                  onClick={() => setIsVehicleType(!isVehicleType)}
                  className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] text-primary cursor-pointer"
                >
                  <div className="pl-3 font-medium">Coupe</div>
                  <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                    <BiChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Dropdown content */}
                {isVehicleType && (
                  <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                    <div className="px-3 py-2">Item 1</div>
                    <div className="px-3 py-2">Item 2</div>
                    <div className="px-3 py-2">Item 3</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* /// Power (hp) /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Power (hp)`}</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsPowerFrom(!isPowerFrom)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] cursor-pointer"
              >
                <div className="pl-3 text-primary font-medium">From</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isPowerFrom && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
            {/* /// to Dropdown /// */}
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsPowerTo(!isPowerTo)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] text-primary cursor-pointer"
              >
                <div className="pl-3 font-medium">To</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isPowerTo && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* /// Transmission /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Transmission`}</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsTransmission(!isTransmission)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[254px] h-[44px] cursor-pointer"
              >
                <div className="pl-3 text-primary font-medium">Automatic</div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isTransmission && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* /// Wheel drive /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Wheel drive`}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Rear-wheel drive
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Front-wheel drive
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Four-wheel drive
              </label>
            </div>
          </div>
        </div>
        {/* /// Electrical Vehicles /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Electrical Vehicles`}</p>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[#444] font-bold">Range</p>
              </div>

              <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <div
                  onClick={() => setIsRange(!isRange)}
                  className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] cursor-pointer"
                >
                  <div className="pl-3 text-primary font-medium"></div>
                  <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                    <BiChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Dropdown content */}
                {isRange && (
                  <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                    <div className="px-3 py-2">Item 1</div>
                    <div className="px-3 py-2">Item 2</div>
                    <div className="px-3 py-2">Item 3</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2 items-center">
              {/* /// to Dropdown /// */}
              <div className="flex flex-col gap-2 ">
                <div>
                  <p className="text-[#444] font-bold">Charge time</p>
                </div>
                <div className="relative inline-block text-left">
                  {/* Dropdown button */}
                  <div
                    onClick={() => setIsCharge(!isCharge)}
                    className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] text-primary cursor-pointer"
                  >
                    <div className="pl-3 font-medium"></div>
                    <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                      <BiChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Dropdown content */}
                  {isCharge && (
                    <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                      <div className="px-3 py-2">Item 1</div>
                      <div className="px-3 py-2">Item 2</div>
                      <div className="px-3 py-2">Item 3</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /// Fast Charge time /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Fast charge time`}</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <div
                onClick={() => setIsChargeTime(!isChargeTime)}
                className="flex justify-between items-center border border-primary rounded-[8px] w-[254px] h-[44px] cursor-pointer"
              >
                <div className="pl-3 text-primary font-medium"></div>
                <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                  <BiChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Dropdown content */}
              {isChargeTime && (
                <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                  <div className="px-3 py-2">Item 1</div>
                  <div className="px-3 py-2">Item 2</div>
                  <div className="px-3 py-2">Item 3</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* /// Battery Capacity /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Battery Capacity`}</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-2 items-center">
              <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <div
                  onClick={() => setIsBattryFrom(!isBattryFrom)}
                  className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] cursor-pointer"
                >
                  <div className="pl-1 text-primary font-medium">From kWh</div>
                  <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                    <BiChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Dropdown content */}
                {isBattryFrom && (
                  <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                    <div className="px-3 py-2">Item 1</div>
                    <div className="px-3 py-2">Item 2</div>
                    <div className="px-3 py-2">Item 3</div>
                  </div>
                )}
              </div>
              {/* /// to Dropdown /// */}
              <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <div
                  onClick={() => setIsBattryTo(!isBattryTo)}
                  className="flex justify-between items-center border border-primary rounded-[8px] w-[123px] h-[44px] text-primary cursor-pointer"
                >
                  <div className="pl-1 font-medium">Up to kWh</div>
                  <div className="flex justify-center items-center w-[36px] h-[42px] bg-[#EBEBEB] rounded-[8px] border-l border-primary text-primary">
                    <BiChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Dropdown content */}
                {isBattryTo && (
                  <div className="absolute mt-2 w-[123px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                    <div className="px-3 py-2">Item 1</div>
                    <div className="px-3 py-2">Item 2</div>
                    <div className="px-3 py-2">Item 3</div>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="">
              <input
                type="text"
                placeholder="Variant"
                className="border border-primary p-2 font-medium text-primary placeholder:text-primary rounded-[8px] w-[254px] h-[44px]"
              />
            </div> */}
          </div>
          <div className="flex justify-end">
            <p className=" text-secondary font-semibold border-b-secondary border-b">
              More
            </p>
          </div>
        </div>
        {/* /// border-b /// */}
        <div className="w-full lg:w-[254px] h-[1px] border-[#EBEBEB] border-b-2"></div>
        {/* /// Exterior Colour /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">Exterior Colour</p>
          </div>

          <div className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="254"
              height="60"
              viewBox="0 0 254 60"
              fill="none"
            >
              <circle cx="10.4588" cy="10.4588" r="10.4588" fill="#D5B786" />
              <circle cx="49.3062" cy="10.4588" r="10.4588" fill="#7F6029" />
              <circle cx="88.1541" cy="10.4588" r="10.4588" fill="#E3C143" />
              <circle cx="127" cy="10.4588" r="10.4588" fill="#8BB849" />
              <circle cx="165.848" cy="10.4588" r="10.4588" fill="#EB5149" />
              <circle cx="204.693" cy="10.4588" r="10.4588" fill="#F2F2F2" />
              <circle
                cx="243.541"
                cy="10.4588"
                r="9.95882"
                fill="white"
                stroke="black"
              />
              <circle cx="10.4588" cy="49.3057" r="10.4588" fill="#456DD4" />
              <circle cx="49.3062" cy="49.3057" r="10.4588" fill="#EFD447" />
              <circle cx="88.1541" cy="49.306" r="10.4588" fill="#ABABAB" />
              <circle cx="127" cy="49.306" r="10.4588" fill="#EF863E" />
              <circle cx="165.848" cy="49.306" r="10.4588" fill="#333333" />
              <circle cx="204.693" cy="49.306" r="10.4588" fill="#8C63F6" />
              <circle cx="243.541" cy="49.306" r="10.4588" fill="#1E1F24" />
            </svg>
          </div>
        </div>
        {/* /// Wheel set /// */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Wheel set`}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                One set of wheels
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Two wheel sets
              </label>
            </div>
           
          </div>
          
        </div>
         {/* /// border-b /// */}
         <div className="w-full lg:w-[254px] h-[1px] border-[#EBEBEB] border-b-2"></div>
         {/* /// Equipment /// */}
         <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Equipment`}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Towbar
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Engine heater
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Navigation system
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Radio DAB+
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Leathar Interior
              </label>
            </div>
           
          </div>
          
        </div>
         {/* /// border-b /// */}
         <div className="w-full lg:w-[254px] h-[1px] border-[#EBEBEB] border-b-2"></div>
         {/* /// Areas /// */}
         <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#444] font-bold">{`Area`}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Agder
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
               Inland
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                More and Romsdal
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Nordland
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Oslo
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Oslo
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Rogaland
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Trondelag
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Vestfold and Telemark
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Westland
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 border-primary"
              />
              <label
                htmlFor="default-checkbox"
                className="text-[#444] font-normal"
              >
                Viken
              </label>
            </div>
           
          </div>
          
        </div>
         {/* /// border-b /// */}
         <div className="w-full lg:w-[254px] h-[1px] border-[#EBEBEB] border-b-2"></div>
          {/* /// Detailed search /// */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold text-secondary">Detailed search</p>
          
        </div>
      </div>
    </div>
  );
}
