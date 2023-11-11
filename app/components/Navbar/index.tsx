"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import { MdMenu, MdRestaurantMenu } from "react-icons/md";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState(<MdMenu className="w-8 h-8" />);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
  
      // Toggle between icons
      setMenuIcon(isOpen ? <MdMenu className="w-8 h-8" /> : <MdRestaurantMenu className="w-8 h-8" />);
    };
  return (
    <div className="w-full bg-white shadow-lg">
      <nav className="container mx-auto">
       

        <div className="flex items-center justify-between p-5">
            
          <div>
            <Image
              src="/assest/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="object-cover w-[143.607px] h-[80px]"
            />
          </div>
           {/* /// Mobile button /// */}
           <div className="md:hidden">
           <button onClick={handleClick}>{menuIcon}</button>
          </div>

          <div className="hidden md:flex items-center justify-center gap-20 ">
            {/* /// second Option /// */}
            <div className="flex gap-5 justify-center items-center">
              <div className="">
                <label
                  htmlFor="underline_select"
                  className="sr-only text-black"
                >
                  Underline select
                </label>
                <select
                  id="underline_select"
                  className=" text-black bg-transparent w-[80px]"
                >
                  <option selected>Search</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>Nexs & Guides</div>
              <div className="w-[82px] h-[40px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                <button>Sell</button>
              </div>
            </div>
            {/* /// thred Option /// */}
            <div className="flex gap-5 justify-center items-center">
              <div className="flex">
                <label htmlFor="underline_select" className=" text-black">
                  <IoIosNotificationsOutline className="text-black w-7 h-7" />
                </label>
                <select
                  id="underline_select"
                  className=" text-black bg-transparent w-[14px]"
                >
                  <option selected></option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <BsStar className="text-black w-6 h-6" />
              </div>
              <div>
                <TbMessageDots className="text-black w-6 h-6" />
              </div>
              <div className="w-[139px] h-[40px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                <button>Login</button>
              </div>
            </div>
          </div>
        </div>

        {/* /// mobile navbar /// */}
        {isOpen && (
            <div className="md:hidden bg-[#003087] text-white">
                <div className="flex flex-col gap-5 p-5">
                <div className="">
                <label
                  htmlFor="underline_select"
                  className="sr-only text-black"
                >
                  Underline select
                </label>
                <select
                  id="underline_select"
                  className=" text-white bg-transparent w-[80px]"
                >
                  <option selected>Search</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>Nexs & Guides</div>
              <div>
                <button>Sell</button></div>
                <div className="w-[100px] h-[48px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                <button>Login</button>
              </div>
                </div>
            </div>
        )}
        
      </nav>
    </div>
  );
}
