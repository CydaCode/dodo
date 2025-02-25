'use client'

import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="py-[30px]">
      <h2 className="text-[#0C111D] font-[700] text-[20px] md:text-[30px]">Welcome Susan,</h2>
      <p className="text-[#344054] text-[14px] md:text-[16px] mt-[6px] md:mt-[10px]">
        Get ready to complete your research processes on Zadwax
      </p>
      <div className=" bg-[#F0EBFC] rounded-[12px] z-[1] mt-[30px]  md:mt-[40px] relative px-[10px] md:px-[20px] py-[20px] md:py-[40px]">
        <Image
          src={"/welcome-bg.png"}
          alt=""
          width={200}
          height={200}
          className="absolute right-0 bottom-0 z-0"
        />
        <div className="relative z-[10]">
          <p className="text-[#101828] text-[14px]">
            Welcome to the cool kids club
          </p>
          <h2 className="text-[#4A24A1] leading-[24px] md:leading-[34px] mt-[12px] text-[18px] md:text-[24px] max-w-[1035px] font-[500]">
            The new way designers revolutionize their work. See how others are
            using Zadwax to accelerate their design process.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
