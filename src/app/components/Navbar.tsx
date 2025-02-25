import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import { Bell, Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-end p-1 gap-[50px] md:gap-[100px] items-center md:ml-[10px] ">
      <div className="relative w-full min-w-[100px] md:max-w-[320px] ">
        <Input placeholder="Search" className="pl-10 pr-4 py-2" />
        <Search
          size={16}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
        />
      </div>
      <div className="flex items-center gap-[30px]">
        <Bell />
        <Avatar className="border-2">
          <AvatarImage src="/profile.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      
    </div>
  );
};

export default Navbar;
