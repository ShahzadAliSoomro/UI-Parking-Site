"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";

export default function CarCategory() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFrom, setIsFrom] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isCondition, setIsCondition] = useState(false);
  const [isPowerFrom, setIsPowerFrom] = useState(false);
  const [isPowerTo, setIsPowerTo] = useState(false);
  const [isDuration, setIsDuration] = useState(false);
  const [isDurationTo, setIsDurationTo] = useState(false);
  const [isYear, setIsYear] = useState(false);
  const [isYearTo, setIsYearTo] = useState(false);
  const [isVehicle, setIsVehicle] = useState(false);
  const [isOwnership, setIsOwnership] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-5 ">
          {/* //// first row /// */}
          <div className="flex gap-5 flex-wrap lg:flex-nowrap">
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              <div className="">
                <select
                  data-te-select-init
                  className="border-[#EBEBEB] border-2 rounded-[8px] text-[#444] w-[210px] h-[52px] px-2"
                >
                  <option value="1">Make</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
              </div>
              <div className="">
                <select
                  data-te-select-init
                  className="border-[#EBEBEB] border-2 rounded-[8px] text-[#444] w-[210px] h-[52px] px-2"
                >
                  <option value="1">Model</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
              </div>
              <div className="flex">
                <button className="w-[192px] h-[52px] border-2 border-[#EBEBEB] rounded-[8px] text-[#444]">
                  Variant
                </button>
              </div>
              <div className="flex items-center justify-center gap-1 w-[185px] bg-primary text-[#FFFFFF] h-[52px] rounded-[8px]">
                <AiOutlinePlus className="text-[#FFFFFF] w-4 h-4" />

                <button className="">Add another vehicle</button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 w-[229px] bg-secondary text-[#FFFFFF] h-[52px] rounded-[8px]">
              <CiSearch className="text-[#FFFFFF] w-4 h-4" />

              <button className="">5.221.456 results</button>
            </div>
          </div>
          {/* //// second row /// */}
          <div className="flex gap-5 flex-wrap lg:flex-nowrap">
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              <div className="flex justify-between items-center px-4 w-[154px] h-[52px] border-[#EBEBEB] border-2 rounded-[8px]">
                <button className="text-[#444]">Price from</button>
                <span className="text-[#444]">€</span>
              </div>
              <div className="flex justify-between items-center px-4 w-[154px] h-[52px] border-[#EBEBEB] border-2 rounded-[8px]">
                <button className="text-[#444]">Price up to</button>
                <span className="text-[#444]">€</span>
              </div>
              <div className="">
                <select
                  data-te-select-init
                  className="border-[#EBEBEB] border-2 rounded-[8px] text-[#444] w-[146px] h-[52px] px-2"
                >
                  <option value="1">Year from</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
              </div>
              <div className="">
                <select
                  data-te-select-init
                  className="border-[#EBEBEB] border-2 rounded-[8px] text-[#444] w-[146px] h-[52px] px-2"
                >
                  <option value="1">Year up to</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
              </div>
              <div className="">
                <select
                  data-te-select-init
                  className="border-[#EBEBEB] border-2 rounded-[8px] text-[#444] w-[187px] h-[52px] px-2"
                >
                  <option value="1">Vehicle Type</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <button className="w-[229px] h-[52px] border-2 border-[#EBEBEB] rounded-[8px] text-[#444]">
                Save Search
              </button>
            </div>
          </div>
          {/* //// third row /// */}
          <div className="flex gap-5 flex-wrap lg:flex-nowrap">
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              <div className="">
                <select
                  data-te-select-init
                  className="border-[#EBEBEB] border-2 rounded-[8px] text-[#444] w-[152px] h-[52px] px-2"
                >
                  <option value="1">Fuel type</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
              </div>
              <div className="flex justify-between items-center w-[465px] px-5 h-[52px] border-2 border-[#EBEBEB] rounded-[8px] relative">
                <div className="text-[#444]">Payment type</div>
                <div className="flex justify-center mr-5 items-center w-[170px] h-[52px] bg-secondary rounded-[8px]">
                  Buy
                </div>
                <div className="text-primary">Leasing</div>
              </div>
              <div className="w-[187px] h-[52px] border-2 border-[#EBEBEB] rounded-[8px] text-[#444] flex items-center">
                <div className="pl-2">City or Zip Code</div>
              </div>
            </div>
            <div className="">
              <select
                data-te-select-init
                className="border-[#EBEBEB] border-2 rounded-[8px] text-[#444] w-[229px] h-[52px] px-2"
              >
                <option value="1">Close filters</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
              </select>
            </div>
          </div>
          {/* /// border /// */}
          <div className="w-full lg:w-[1068px] pt-5 h-[1px] border-[#EBEBEB] border-b-2"></div>

          {/* /// fourth row /// */}
          <div className="flex gap-5 flex-wrap lg:flex-nowrap">
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              {/* /// number of seats /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Number of seats</p>
                <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsFrom(!isFrom)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">From</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isFrom && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
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
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">To</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isOpen && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                        <div className="px-3 py-2">Item 1</div>
                        <div className="px-3 py-2">Item 2</div>
                        <div className="px-3 py-2">Item 3</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* ///// number Dropdown /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Number of doors</p>
                <div className="flex gap-2 ">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsNumber(!isNumber)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[260px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">4</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isNumber && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                        <div className="px-3 py-2">Item 1</div>
                        <div className="px-3 py-2">Item 2</div>
                        <div className="px-3 py-2">Item 3</div>
                      </div>
                    )}
                  </div>
                  {/* /// to Dropdown /// */}
                </div>
              </div>
              {/* /// condition Dropdown /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Type and condition</p>
                <div className="flex gap-2">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsCondition(!isCondition)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[260px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">Any</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isCondition && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                        <div className="px-3 py-2">Item 1</div>
                        <div className="px-3 py-2">Item 2</div>
                        <div className="px-3 py-2">Item 3</div>
                      </div>
                    )}
                  </div>
                  {/* /// to Dropdown /// */}
                </div>
              </div>
              {/* /// power Dropdown /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Power</p>
                <div className="flex gap-2">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsPowerFrom(!isPowerFrom)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">From</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isPowerFrom && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
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
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">up to</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isPowerTo && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
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

          {/* /// Five row /// */}
          <div className="flex gap-5 ">
            <div className="flex gap-2 ">
              {/* //// Duration Dropdown /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Leasing Duration</p>
                <div className="flex gap-2 ">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsDuration(!isDuration)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">From</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isDuration && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
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
                      onClick={() => setIsDurationTo(!isDurationTo)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">To</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isDurationTo && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                        <div className="px-3 py-2">Item 1</div>
                        <div className="px-3 py-2">Item 2</div>
                        <div className="px-3 py-2">Item 3</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* /// per Year Dropdown /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Leasing Duration</p>
                <div className="flex gap-2">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsYear(!isYear)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">From</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isYear && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
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
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[126px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">To</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isYearTo && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                        <div className="px-3 py-2">Item 1</div>
                        <div className="px-3 py-2">Item 2</div>
                        <div className="px-3 py-2">Item 3</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* /// vehicle Dropdown /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Origin of the vehicle</p>
                <div className="flex gap-2">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsVehicle(!isVehicle)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[260px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3">Home plates</div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isVehicle && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                        <div className="px-3 py-2">Item 1</div>
                        <div className="px-3 py-2">Item 2</div>
                        <div className="px-3 py-2">Item 3</div>
                      </div>
                    )}
                  </div>
                  {/* /// to Dropdown /// */}
                </div>
              </div>
              {/* /// ownership Dropdown /// */}
              <div className="flex flex-col gap-2">
                <p className="text-[#444] font-bold">Ownership</p>
                <div className="flex gap-2">
                  <div className="relative inline-block text-left">
                    {/* Dropdown button */}
                    <div
                      onClick={() => setIsOwnership(!isOwnership)}
                      className="flex justify-between items-center border-2 border-[#EBEBEB] rounded-[8px] w-[260px] h-[52px] text-[#444] cursor-pointer"
                    >
                      <div className="pl-3"></div>
                      <div className="flex justify-center items-center w-[40px] h-[50px] bg-[#EBEBEB] text-[#444]">
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dropdown content */}
                    {isOwnership && (
                      <div className="absolute mt-2 w-[126px] bg-[#ffffff] text-primary rounded-[8px] border-2 border-[#EBEBEB]">
                        <div className="px-3 py-2">Item 1</div>
                        <div className="px-3 py-2">Item 2</div>
                        <div className="px-3 py-2">Item 3</div>
                      </div>
                    )}
                  </div>
                  {/* /// to Dropdown /// */}
                </div>
              </div>
            </div>
          </div>
          {/* /// border /// */}
          <div className="w-full lg:w-[1068px] pt-5 h-[1px] border-[#EBEBEB] border-b-2"></div>
        </div>
      </div>
    </div>
  );
}
