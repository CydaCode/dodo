'use client'

import { Separator } from "@/components/ui/separator";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import GettingStarted from "./components/GettingStarted";
import Resources from "./components/Resources";



export default function Home() {
  return (
    <div className=" pl-[25px] mb-[90px] pr-[15px] md:px-[30px] flex flex-col ">
     <Navbar />
     <Separator className="mt-[20px]"/>
     <WelcomeSection />
     <GettingStarted />
     <Resources />
    </div>
  );
}
