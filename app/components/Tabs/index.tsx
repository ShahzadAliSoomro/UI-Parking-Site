"use client";
import React, { useState } from "react";
import CarCategory from "../FieldCategorys/CarCategory";

const TabPanel = ({ activeTab, index, children }: any) => {
  return activeTab === index && <div className="bg-[#ffffff] w-full">{children}</div>;
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabIcons = [
    /// Icon 1 ///
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="16"
      viewBox="0 0 44 16"
      fill="none"
      
      
    >
      <path
        d="M43.3729 7.94423C42.8375 6.79223 42.7482 5.92823 42.7482 5.44823C42.7482 4.39223 42.0342 3.52824 41.0525 3.43224C37.3042 3.04824 37.215 3.14423 36.858 3.04823C31.3248 1.12823 25.8808 0.264236 20.526 0.552236C20.169 0.552236 19.812 0.648235 19.4551 0.840235C16.8669 1.89624 14.8143 2.95224 13.4756 3.91224C13.0294 4.20024 12.5831 4.39224 12.0477 4.39224C9.54878 4.20024 2.85535 4.96824 1.60591 7.46423C0.713451 9.19223 0.53496 11.8802 1.15968 13.4162C1.51666 14.3762 2.58761 15.0482 3.56932 15.0482H3.83705C3.65856 14.5682 3.65856 14.0882 3.65856 13.5122C3.65856 10.2482 6.15744 7.65624 9.10255 7.65624C12.0477 7.65624 14.5465 10.3442 14.5465 13.5122C14.5465 13.9922 14.4573 14.4722 14.3681 14.8562L29.1829 14.7602C29.0936 14.3762 29.0936 13.9922 29.0936 13.6082C29.0936 10.3442 31.5925 7.75224 34.5376 7.75224C37.572 7.75224 39.9816 10.4402 39.9816 13.6082C39.9816 13.9922 39.9816 14.3762 39.8923 14.6642H40.6956C41.7665 14.6642 42.659 14.0882 43.1944 13.1282C43.9084 11.7842 43.9084 8.90423 43.3729 7.94423ZM23.6496 4.48823H16.3315C17.4024 3.91223 18.6519 3.04824 20.0798 2.47224C20.2583 2.37624 20.4368 2.37624 20.7045 2.37624H24.0958L23.6496 4.48823ZM25.4345 4.48823L25.7915 2.47224C28.6474 2.76024 31.5032 3.52824 34.3591 4.39224L25.4345 4.48823Z"
        fill="#EF2C2E"
      />
    </svg>,
    /// Icon 2 ///
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
    <g clip-path="url(#clip0_5_3918)">
    <path d="M6.74876 18.0262C3.37037 18.0262 0.631714 20.9721 0.631714 24.6069C0.631714 28.2405 3.37037 31.1867 6.74876 31.1867C9.21543 31.1867 11.3364 29.6123 12.3038 27.3492L13.7571 28.5546C13.7571 28.5546 24.4367 28.6366 25.0233 28.2801C25.0233 28.2801 23.698 24.3869 25.3802 22.7413C25.5573 22.568 25.7799 22.3704 26.0247 22.1611C25.7426 22.917 25.5842 23.7408 25.5842 24.6063C25.5842 28.2406 28.3226 31.186 31.701 31.186C35.0794 31.186 37.8175 28.2393 37.8175 24.6063C37.8175 20.9715 35.0787 18.0263 31.701 18.0263C31.6455 18.0263 31.5926 18.0338 31.5373 18.035C31.9792 17.7265 32.2611 17.5328 32.2611 17.5328L31.8024 17.0938C31.8024 17.0938 33.1278 16.7653 32.8225 16.0521C32.5162 15.3388 29.3051 11.062 29.3051 11.062C29.3051 11.062 29.8739 9.74573 28.6974 8.81348L28.1324 10.1296C28.1324 10.1296 26.6923 9.06024 26.119 9.26616C25.5455 9.47148 24.6858 9.57466 24.4173 10.0268L24.15 10.2943C24.15 10.2943 24.0743 10.7676 24.513 11.4667C24.513 11.4667 28.9293 12.9266 29.1392 13.9958C29.1392 13.9958 29.4455 14.675 28.1261 14.8386L27.8591 15.2092L27.151 15.2502L25.8709 12.1038C25.8709 12.1038 24.6466 12.4533 24.0163 12.9876L24.1119 13.5219C24.1119 13.5219 18.9699 9.75943 14.1333 15.3317C14.1333 15.3317 10.5586 16.4419 8.05441 13.0287C8.05441 13.0287 8.01628 11.9184 1.97573 12.1241L2.39649 12.5971C2.39649 12.5971 1.97573 12.6381 1.80396 12.926C1.63218 13.2135 1.89947 13.522 3.27605 13.522C3.27605 13.522 6.39256 17.3466 8.78185 17.1209L12.1841 18.8895L13.6945 21.6654C13.6945 21.6654 13.6972 21.9038 13.7128 22.2686C13.3623 22.3489 12.9693 22.438 12.5523 22.5332C11.744 19.916 9.45374 18.0262 6.74876 18.0262ZM31.7009 20.0426C34.0407 20.0426 35.9434 22.09 35.9434 24.6062C35.9434 27.1226 34.04 29.1693 31.7009 29.1693C29.3612 29.1693 27.4588 27.1219 27.4588 24.6062C27.4588 22.09 29.3613 20.0426 31.7009 20.0426ZM6.74876 29.1701C4.4096 29.1701 2.50625 27.1226 2.50625 24.6069C2.50625 22.09 4.4096 20.0433 6.74876 20.0433C8.54704 20.0433 10.0836 21.2552 10.6997 22.9578C8.45025 23.4724 6.21752 23.9844 6.21752 23.9844L6.50558 25.6911L10.9105 25.4818C10.5309 27.5803 8.81003 29.1701 6.74876 29.1701ZM14.0959 25.3301C14.221 25.7868 14.384 26.1499 14.5983 26.3057L12.6326 26.3884C12.7168 26.0645 12.7804 25.732 12.8187 25.3899L14.0959 25.3301Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_5_3918">
    <rect width="37.1857" height="40" fill="white" transform="translate(0.631714)"/>
    </clipPath>
    </defs>
    </svg>,
    /// Icon 3 ///
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
    <g clip-path="url(#clip0_5_3939)">
    <path d="M31.1187 17.573C30.5594 17.573 30.0156 17.6452 29.4944 17.7805L26.7407 10.6715L29.1295 9.815C29.7003 9.61031 30.0088 8.94664 29.8185 8.33265C29.6282 7.71874 29.0116 7.38664 28.4404 7.59156L24.8653 8.87679C24.3099 9.12578 24.0473 9.81179 24.2787 10.4092L24.9632 12.1763L15.4145 14.8468L14.4337 12.3855H15.9491C16.5507 12.3855 17.0385 11.8609 17.0385 11.2137C17.0385 10.5665 16.5507 10.0418 15.9491 10.0418H11.2814C10.6798 10.0418 10.192 10.5665 10.192 11.2137C10.192 11.8609 10.6798 12.3855 11.2814 12.3855H12.0631L13.5137 16.0257L11.4022 18.6755C10.348 17.9768 9.10746 17.573 7.78083 17.573C3.96297 17.573 0.856873 20.9141 0.856873 25.0209C0.856873 29.1277 3.96297 32.4688 7.78076 32.4688C11.228 32.4688 14.0946 29.7448 14.6186 26.1928H18.2828C18.6308 26.1928 18.9579 26.0139 19.163 25.7113L26.1902 15.3445L27.4839 18.6844C25.5115 19.9983 24.1946 22.3471 24.1946 25.0209C24.1946 29.1277 27.3007 32.4687 31.1185 32.4687C34.9364 32.4687 38.0426 29.1277 38.0426 25.0209C38.0426 20.9141 34.9365 17.573 31.1187 17.573ZM7.78076 30.1252C5.16439 30.1252 3.03572 27.8354 3.03572 25.0209C3.03572 22.2065 5.16439 19.9168 7.78076 19.9168C8.56529 19.9168 9.3053 20.1239 9.95786 20.4881L6.95359 24.2584C6.67666 24.6059 6.61318 25.0949 6.79098 25.5107C6.96877 25.9265 7.3553 26.1929 7.78076 26.1929H12.3981C11.9044 28.4441 10.0223 30.1252 7.78076 30.1252ZM10.1495 23.8491L14.4703 18.4266L16.6307 23.8491H10.1495ZM18.5302 22.6669L16.2826 17.0256L23.7746 14.9302L18.5302 22.6669ZM31.1187 30.1252C28.5023 30.1252 26.3737 27.8354 26.3737 25.021C26.3737 23.3233 27.149 21.8174 28.3379 20.889L30.113 25.4717C30.3444 26.0691 30.9823 26.3516 31.5377 26.1027C32.093 25.8537 32.3557 25.1677 32.1243 24.5703L30.3482 19.9852C30.5991 19.9409 30.8563 19.9168 31.1187 19.9168C33.7351 19.9168 35.8637 22.2066 35.8637 25.0209C35.8637 27.8353 33.7351 30.1252 31.1187 30.1252Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_5_3939">
    <rect width="37.1857" height="40" fill="white" transform="translate(0.856873)"/>
    </clipPath>
    </defs>
    </svg>,
    /// Icon 4 ///
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
    <g clip-path="url(#clip0_5_3922)">
      <path d="M25.4576 8.59546H0.0820312V23.9483H25.4576V8.59546Z" fill="black"/>
      <path d="M37.2675 19.5748L34.6588 13.2993H26.5952V25.105H17.2955H8.62342H3.14514V27.7889H5.75406C5.7332 27.9415 5.71882 28.0963 5.71882 28.255C5.71882 29.9946 7.01924 31.4048 8.62351 31.4048C10.2278 31.4048 11.5282 29.9945 11.5282 28.255C11.5282 28.0963 11.5138 27.9415 11.493 27.7889H14.4263C14.4055 27.9415 14.3911 28.0963 14.3911 28.255C14.3911 29.9946 15.6915 31.4048 17.2958 31.4048C18.8999 31.4048 20.2004 29.9945 20.2004 28.255C20.2004 28.0963 20.1861 27.9415 20.1652 27.7889H26.5956H27.1661C27.1452 27.9415 27.1309 28.0963 27.1309 28.255C27.1309 29.9946 28.4313 31.4048 30.0355 31.4048C31.6396 31.4048 32.9401 29.9945 32.9401 28.255C32.9401 28.0963 32.9258 27.9415 32.905 27.7889H37.2675V19.5748ZM8.62342 29.4878C7.99549 29.4878 7.48642 28.9358 7.48642 28.255C7.48642 28.0899 7.51686 27.9328 7.57101 27.7889C7.74055 27.3391 8.14755 27.0219 8.62333 27.0219C9.09912 27.0219 9.50611 27.3391 9.67565 27.7889C9.7298 27.9328 9.76025 28.0899 9.76025 28.255C9.76033 28.9358 9.25135 29.4878 8.62342 29.4878ZM17.2955 29.4878C16.6676 29.4878 16.1585 28.9358 16.1585 28.255C16.1585 28.0899 16.1889 27.9328 16.2431 27.7889C16.4126 27.3391 16.8196 27.0219 17.2954 27.0219C17.7712 27.0219 18.1782 27.3391 18.3476 27.7889C18.4019 27.9328 18.4323 28.0899 18.4323 28.255C18.4324 28.9358 17.9234 29.4878 17.2955 29.4878ZM30.0351 29.4878C29.4072 29.4878 28.8981 28.9358 28.8981 28.255C28.8981 28.0899 28.9285 27.9328 28.9827 27.7889C29.1522 27.3391 29.5592 27.0219 30.035 27.0219C30.5108 27.0219 30.9178 27.3391 31.0872 27.7889C31.1415 27.9328 31.1719 28.0899 31.1719 28.255C31.1721 28.9358 30.6631 29.4878 30.0351 29.4878ZM28.5152 19.4567C28.4716 19.4567 28.4362 19.4187 28.4362 19.3718V15.1321C28.4362 15.0852 28.4715 15.0472 28.5152 15.0472H33.479C33.5837 15.0472 33.6784 15.1139 33.7203 15.2171L35.4424 19.4567H28.5152Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_5_3922">
        <rect width="37.1857" height="40" fill="white" transform="translate(0.0820312)"/>
      </clipPath>
    </defs>
  </svg>,
  /// icon 5 ///
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
    <g clip-path="url(#clip0_5_3929)">
      <path d="M31.3927 16.8983L27.2828 9.81543C26.8274 9.03062 26.028 8.5542 25.168 8.5542H2.80003C1.42312 8.5542 0.307129 9.75465 0.307129 11.2358V26.3062C0.307129 27.7873 1.42312 28.9877 2.80003 28.9877H3.454C4.08387 30.434 5.44084 31.4458 7.02134 31.4458C8.60183 31.4458 9.95797 30.434 10.5878 28.9877H27.213C27.8429 30.434 29.1998 31.4458 30.7803 31.4458C32.3592 31.4458 33.717 30.434 34.346 28.9877H35C36.3761 28.9877 37.4929 27.7873 37.4929 26.3062V24.0751C37.4929 20.3236 34.8055 17.2264 31.3927 16.8983ZM7.02715 28.9564C6.12639 28.9564 5.39597 28.1707 5.39597 27.2018C5.39597 26.2329 6.12639 25.4463 7.02715 25.4463C7.92792 25.4463 8.65834 26.2329 8.65834 27.2018C8.65834 28.1707 7.92792 28.9564 7.02715 28.9564ZM21.9472 18.7719V13.9173V11.2367H25.168L29.5422 18.7719H21.9472ZM30.7795 28.9564C29.8787 28.9564 29.1483 28.1707 29.1483 27.2018C29.1483 26.2329 29.8787 25.4463 30.7795 25.4463C31.6803 25.4463 32.4107 26.2329 32.4107 27.2018C32.4107 28.1707 31.6803 28.9564 30.7795 28.9564Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_5_3929">
        <rect width="37.1857" height="40" fill="white" transform="translate(0.307129)"/>
      </clipPath>
    </defs>
  </svg>,
  /// icon 6 ///
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 34 36" fill="none" 
    >
    <g clip-path="url(#clip0_5_3932)">
      <path d="M5.89225 16.875C5.89225 16.6139 5.98866 16.3635 6.16028 16.1789C6.3319 15.9943 6.56466 15.8906 6.80736 15.8906C7.05007 15.8906 7.28283 15.9943 7.45445 16.1789C7.62607 16.3635 7.72248 16.6139 7.72248 16.875V17.2969H10.86V12.375C10.86 12.1139 10.7636 11.8635 10.592 11.6789C10.4204 11.4943 10.1876 11.3906 9.94491 11.3906H3.66982C3.42711 11.3906 3.19435 11.4943 3.02273 11.6789C2.85111 11.8635 2.7547 12.1139 2.7547 12.375V17.2969H5.89225V16.875Z" fill="black"/>
      <path d="M22.3644 17.1562L24.0472 14.985C24.3042 14.6518 24.6265 14.3838 24.9909 14.2001C25.3554 14.0163 25.7531 13.9213 26.1556 13.9219H29.6853V12.9375C29.6853 12.6764 29.5889 12.426 29.4173 12.2414C29.2457 12.0568 29.0129 11.9531 28.7702 11.9531H22.3644V17.1562Z" fill="black"/>
      <path d="M25.1098 5.625C25.1096 5.36397 25.0132 5.11368 24.8416 4.92911C24.67 4.74453 24.4373 4.64077 24.1946 4.64062H18.7039C18.4613 4.64077 18.2286 4.74453 18.057 4.92911C17.8854 5.11368 17.789 5.36397 17.7888 5.625V9.98438H25.1098V5.625Z" fill="black"/>
      <path d="M20.5341 11.9531H14.1283C13.8856 11.9531 13.6528 12.0568 13.4812 12.2414C13.3096 12.426 13.2132 12.6764 13.2132 12.9375V17.2969H20.5341V11.9531Z" fill="black"/>
      <path d="M32.9536 15.8906H26.1556C26.0214 15.8906 25.889 15.9224 25.7675 15.9836C25.646 16.0449 25.5386 16.1341 25.4528 16.245L23.1127 19.2656H1.57814C1.44109 19.2656 1.30581 19.2988 1.18226 19.3626C1.05871 19.4264 0.950064 19.5192 0.864332 19.6342C0.7786 19.7492 0.717975 19.8834 0.686933 20.027C0.655891 20.1706 0.655224 20.3199 0.684982 20.4638L1.86679 26.1844C2.17015 27.6521 2.92969 28.9648 4.02005 29.9056C5.1104 30.8464 6.4664 31.3593 7.86421 31.3594H25.0015C26.291 31.3594 27.5478 30.9229 28.5939 30.1118C29.64 29.3007 30.4223 28.1562 30.83 26.8403L33.8217 17.1861C33.8675 17.0381 33.8799 16.8806 33.8581 16.7264C33.8362 16.5723 33.7806 16.4259 33.6958 16.2994C33.611 16.1729 33.4995 16.0699 33.3705 15.9988C33.2415 15.9277 33.0986 15.8907 32.9536 15.8906Z" fill="black"/>
      <path d="M9.81417 8.4375C9.81417 8.17643 9.71775 7.92605 9.54614 7.74144C9.37452 7.55684 9.14176 7.45312 8.89905 7.45312H7.72247V5.625C7.72247 5.36393 7.62606 5.11355 7.45444 4.92894C7.28282 4.74434 7.05006 4.64062 6.80735 4.64062C6.56465 4.64062 6.33188 4.74434 6.16027 4.92894C5.98865 5.11355 5.89224 5.36393 5.89224 5.625V7.45312H4.71565C4.47295 7.45312 4.24019 7.55684 4.06857 7.74144C3.89695 7.92605 3.80054 8.17643 3.80054 8.4375V9.42188H9.81417V8.4375Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_5_3932">
        <rect width="33.4672" height="36" fill="white" transform="translate(0.532288)"/>
      </clipPath>
    </defs>
  </svg>,
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center pb-10 relative">
        <div className="absolute lg:-top-[200px] -top-[200px]">
            <div className="w-full bg-[#EBEBEB] shadow-xl rounded-[8px] lg:w-[1160px]">
            <div className="">
                <ul className="flex justify-between ">
        
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <li
            key={index}
            className={`cursor-pointer w-full p-2 ${
              activeTab === index ? "bg-[#FFFFFF] text-secondary flex justify-center items-center" : ""
            }`}
            onClick={() => {
                handleTabClick(index);
                // resetChangeColor(); // Reset changeColor after handling the click
              }}
          
          >
            <span className={`flex justify-center items-center flex-wrap lg:flex-nowrap `}>
                {tabIcons [index]} {/* Display the corresponding icon */}
            </span>
            
          </li>
        ))}
      </ul>
            
      
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <TabPanel key={index} activeTab={activeTab} index={index}>
          {/* Content for Tab {index + 1} */}
          <p className="p-5 bg-[#ffffff] shadow-xl rounded-[8px] text-[#FFFFFF]"><CarCategory /> {index + 1}</p>
        </TabPanel>
      ))}
      </div>
        </div>
        </div>
        
    </div>
  );
}
