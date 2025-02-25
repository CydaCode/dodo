'use client'

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";

const Resources = () => {
  return (
    <div className="mt-[50px] ">
      <h2 className="text-[#0C111D] text-[18px] font-[700]">
        Resources for you
      </h2>
      <ScrollArea className="w-full max-w-full border-none overflow-x-auto md:max-w-none md:overflow-visible whitespace-nowrap rounded-md border">
        <div className="flex w-full gap-[60px]">
          {items.map((item, idx) => (
            <Card key={idx} className="w-[265px] mt-[30px]">
              <div>
                <Image
                  src={"/resource-img.png"}
                  alt=""
                  width={265}
                  height={127}
                />
              </div>
              <CardContent className="mt-[20px]">
                <p className="font-[500] text-[16px] text-[#344054]">
                  {item.title}
                </p>
                <p className="text-[#667085] text-[12px] w-full mt-[8px] whitespace-normal">
                  {item.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      
    </div>
  );
};

export default Resources;

interface Items {
  title: string;
  details: string;
}

const items: Items[] = [
  {
    title: "Academic literature review",
    details: "Organize your sources and synthesize information effectively.",
  },
  {
    title: "Data analysis templates",
    details:
      "Streamline patient data collection and analysis for medical research.",
  },
  {
    title: "UX Heuristic template.",
    details: "Assess your interface against established usability principles.",
  },
  {
    title: "Affinity mapping template",
    details: "Assess your interface against established usability principles.",
  },
];
