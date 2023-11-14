import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import {GoDotFill} from "react-icons/go"

export default function Footer() {
  return (
    <div className="w-full bg-primary text-[#FFFFFF] lg:mt-[450px] mt-0">
      <div className="container mx-auto w-full lg:w-[1160px] p-5">
        <div className="flex justify-between gap-8 lg:gap-0 flex-wrap lg:flex-nowrap pt-5">
          {/* /// first section /// */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl w-full lg:w-[400px]">
                The most wanted makes and models
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 ">
                <div className="w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                  <button>Audi A4</button>
                </div>
                <div className="w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                  <button>Volkswagen</button>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                  <button>Skoda Octavia</button>
                </div>
                <div className="w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                  <button>BMW 5 Series</button>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                  <button>Fiant Punto</button>
                </div>
                <div className="w-[160px] h-[51px] bg-[#EF2C2E] rounded-lg flex justify-center text-white">
                  <button>Renault Clio</button>
                </div>
              </div>
            </div>
          </div>
          {/* /// second section /// */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl">
              <h1>Quick Links</h1>
            </div>
            <div className="flex flex-col gap-3 text-sm">
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

          {/* /// third section /// */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl">
              <h1>Let's Connect</h1>
            </div>
            <div className="flex gap-4">
              <div className="">
                <FaFacebook className="w-9 h-9" />
              </div>
              <div className="w-[36px] h-[36px] bg-[#ffffff] rounded-full flex justify-center items-center text-white">
                <SlSocialInstagram className="w-6 h-6 text-primary" />
              </div>
              <div className="w-[36px] h-[36px] bg-[#ffffff] rounded-full flex justify-center items-center text-white">
                <TiSocialLinkedin className="w-8 h-8 text-primary" />
              </div>
              <div className="w-[36px] h-[36px] bg-[#ffffff] rounded-full flex justify-center items-center text-white">
                <TiSocialYoutube className="w-6 h-6 text-primary" />
              </div>
              <div className="w-[36px] h-[36px] bg-[#ffffff] rounded-full flex justify-center items-center text-white">
                <FaXTwitter className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex gap-3 pt-5">
              <div className="">
                <Image
                  src="/assest/google.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="object-cover w-[126px] h-[37px]"
                />
              </div>
              <div className="">
                <Image
                  src="/assest/appstore.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="object-cover w-[126px] h-[37px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* /// bottom section /// */}
        <div className="flex flex-col gap-3 pt-20">
          <div className="flex gap-5">
            <div className="flex justify-center items-center relative">
              <div className="absolute top-[10px] left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6_4353)">
                    <path
                      d="M7.64484 10.4711C7.61277 10.3105 6.50801 4.78668 6.47297 4.61164C6.41824 4.33777 6.17773 4.14062 5.89844 4.14062H4.72656C4.44727 4.14062 4.20676 4.33777 4.15203 4.61164C4.11645 4.78965 3.01055 10.3191 2.98016 10.471C2.91668 10.7884 3.1225 11.097 3.43981 11.1605C3.75711 11.2239 4.06582 11.0181 4.12926 10.7008L4.50379 8.82812H6.12121L6.49574 10.7009C6.55922 11.0183 6.86805 11.224 7.1852 11.1605C7.5025 11.097 7.70832 10.7884 7.64484 10.4711ZM4.73816 7.65625L5.20691 5.3125H5.41809L5.88684 7.65625H4.73816Z"
                      fill="#003087"
                    />
                    <path
                      d="M17.0312 8.82812H15.2734V8.24219C15.2734 7.91859 15.0111 7.65625 14.6875 7.65625C14.3639 7.65625 14.1016 7.91859 14.1016 8.24219V8.82812H12.3438C12.0202 8.82812 11.7578 9.09047 11.7578 9.41406C11.7578 9.73766 12.0202 10 12.3438 10H12.4855C12.8194 11.0786 13.3221 11.9065 13.8752 12.5699C13.425 12.9817 12.9695 13.3194 12.5637 13.644C12.311 13.8462 12.27 14.2149 12.4722 14.4676C12.6745 14.7204 13.0432 14.7611 13.2957 14.5591C13.7038 14.2326 14.1929 13.8698 14.6875 13.4159C15.1825 13.8702 15.6725 14.2336 16.0793 14.5591C16.332 14.7613 16.7007 14.7202 16.9028 14.4676C17.105 14.2149 17.064 13.8461 16.8113 13.644C16.4066 13.3202 15.9505 12.9821 15.4998 12.5699C16.0529 11.9065 16.5556 11.0786 16.8895 10H17.0312C17.3548 10 17.6172 9.73766 17.6172 9.41406C17.6172 9.09047 17.3548 8.82812 17.0312 8.82812ZM14.6875 11.7088C14.3135 11.2393 13.977 10.6788 13.7233 9.99609H15.6516C15.398 10.6788 15.0615 11.2393 14.6875 11.7088Z"
                      fill="#003087"
                    />
                    <path
                      d="M18.2422 3.55469H9.78902L9.53785 1.53977C9.42813 0.661953 8.67828 0 7.79363 0H1.75781C0.788555 0 0 0.788555 0 1.75781V14.6875C0 15.6568 0.788555 16.4453 1.75781 16.4453H6.69855L6.94652 18.4602C7.05605 19.3363 7.8059 20 8.69078 20H18.2422C19.2114 20 20 19.2114 20 18.2422V5.3125C20 4.34324 19.2114 3.55469 18.2422 3.55469ZM1.75781 15.2734C1.43473 15.2734 1.17188 15.0106 1.17188 14.6875V1.75781C1.17188 1.43473 1.43473 1.17188 1.75781 1.17188H7.79363C8.08852 1.17188 8.33848 1.3925 8.375 1.68492C8.45992 2.36602 9.98469 14.5978 10.0689 15.2734H1.75781ZM8.07516 18.0371L7.87926 16.4453H9.45129L8.07516 18.0371ZM18.8281 18.2422C18.8281 18.5653 18.5653 18.8281 18.2422 18.8281H8.94039L11.171 16.2479C11.2852 16.1191 11.3364 15.9482 11.3128 15.7782L9.93512 4.72656H18.2422C18.5653 4.72656 18.8281 4.98941 18.8281 5.3125V18.2422Z"
                      fill="#003087"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_4353">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <select
                  id="underline_select"
                  className=" text-primary bg-white w-[130px] h-[35px] rounded-full pl-8"
                >
                  <option selected>English</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="w-[80px] h-[35px] bg-[#ffffff] rounded-full flex justify-center items-center text-primary">
                <div className="-ml-2">
                  <GoDotFill className="w-8 h-8 " />
                </div>
                <div>
                  <button>light</button>
                </div>
              
            </div>
          </div>
          <div className="w-full lg:w-[1160px] border-b border-white pt-3"></div>
        </div>
      </div>
    </div>
  );
}
