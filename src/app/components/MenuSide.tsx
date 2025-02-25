'use client'

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const MenuSide = () => {
  return (
    <div className="h-screen w-[68px] bg-[#5F2ECF]">
      <div className="w-100 h-screen flex flex-col gap-[30px] items-center py-[30px]">
        <Link href={"/"} className="pointer">
          <Image
            src="/linkedin.svg"
            alt="Linkedin image"
            width={40}
            height={40}
            priority
          />
        </Link>
        <Link href={"/"} className="pointer">
          <Image
            src="/figma.svg"
            alt="Linkedin image"
            width={40}
            height={40}
            priority
          />
        </Link>
        <Link href={"/"} className="pointer">
          <Image
            src="/figma.svg"
            alt="Linkedin image"
            width={40}
            height={40}
            priority
          />
        </Link>
        <Button className="h-[45px] w-[35] rounded-[10px] bg-[#FFFFFF] hover:bg-gray-200">
          <Plus color="#000000" />
        </Button>
      </div>
      
    </div>
  );
};

export default MenuSide;
