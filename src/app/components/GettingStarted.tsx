import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";

const GettingStarted = () => {
  return (
    <ScrollArea className="w-full max-w-full border-none overflow-x-auto md:max-w-none md:overflow-visible whitespace-nowrap rounded-md border">
      <div className="flex gap-[20px]">
        <div className="border-[#EAECF0] p-[20px] rounded-[12px] border-2  max-w-[611px] w-full">
          <div className="flex justify-between flex-col lg:flex-row">
            <div>
              <h3 className="font-[700] text-[#0C111D]">Getting Started</h3>
              <p className="text-[#344054] text-[14px]">
                Three simple steps to launch your first project
              </p>
            </div>
            <Button className="bg-[#6832E3] w-fit mt-[20px] md:mt-0 text-[#fff]">Create project</Button>
          </div>
          <Separator className="mt-[20px]" />
          {items.map((item, idx) => (
            <div key={idx} className="mt-[20px]">
              <p className="font-[600] text-[14px] text-[#344054]">
                {item.step}
              </p>
              <p className="text-[#667085] text-[14px]">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="border-[#EAECF0] p-[20px] rounded-[12px] border-2  max-w-[611px] w-full">
          <div className="flex justify-between">
            <div>
              <h3 className="font-[700] text-[#0C111D]">
                Research Tips and Tricks
              </h3>
              <p className="text-[#344054] text-[14px]">
                Three simple steps to launch your first project
              </p>
            </div>
          </div>
          <Separator className="mt-[20px]" />
          {items2.map((item, idx) => (
            <div key={idx} className="mt-[20px]">
              <p className="font-[600] text-[14px] text-[#344054]">
                {item.step}
              </p>
              <p className="text-[#667085] text-[14px]">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default GettingStarted;

interface Items {
  step: string;
  details: string;
}

const items: Items[] = [
  {
    step: "Step 1: Create your project",
    details: "Give your project a name, add a description and your goals.",
  },
  {
    step: "Step 2: Invite your teammates",
    details: "Research is better together, Invite your colleagues.",
  },
  {
    step: "Step 3: Setup your research process",
    details: "Add the processes that are specific to this project.",
  },
];

const items2: Items[] = [
  {
    step: "Don’t start from scratch, use a template",
    details: "Begin with field-tested frameworks adaptable to your research.",
  },
  {
    step: "Add steps and set milestones",
    details:
      "Define key stages and monitor progress from hypothesis to conclusion.",
  },
  {
    step: "Track changes in your documents over time.",
    details:
      "Capture every revision to ensure data integrity and transparency.",
  },
];
