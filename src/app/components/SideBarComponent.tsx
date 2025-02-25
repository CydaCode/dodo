"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ChartPie,
  CircleAlert,
  Folder,
  House,
  LucideIcon,
  Settings,
  Star,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface Items {
  title: string;
  url: string;
  icon: LucideIcon;
}
// Menu items.
const items: Items[] = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "Inbox",
    url: "#",
    icon: ChartPie,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Star,
  },
];

const SideBarComponent = () => {
  const pathname = usePathname();
  return (
    <Sidebar className="ml-[70px] ">
      <SidebarHeader className="pt-[26px]">
        <Image src={"/logo2.svg"} alt="" width={250} height={250} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="pt-[10px]">
              {items.map((item) => {
                const isActive = pathname === item.url; // Check if active
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 p-5 rounded-md transition-colors duration-300 
                          ${
                            isActive
                              ? "bg-[#e9e2f9] text-[#4A24A1]" // Active styles
                              : "hover:bg-[#e9e2f9] hover:text-[#4A24A1]"
                          }`}
                      >
                        <item.icon
                          className={`transition-colors duration-300 ${
                            isActive ? "text-[#4A24A1]" : "group-hover:text-[#4A24A1]"
                          }`}
                          strokeWidth={3}
                        />
                        <span className="font-semibold hover:text-[#4A24A1]">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              <Separator />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-5 rounded-md transition-colors duration-300 hover:bg-[#e9e2f9] hover:text-[#4A24A1]"
                  >
                    <Folder
                      className="w-6 h-6 transition-colors duration-300 group-hover:text-[#4A24A1]"
                      strokeWidth={3}
                    />
                    <span className="font-semibold hover:text-[#4A24A1]">
                      Projects
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Sidebar Footer */}
      <SidebarFooter className="p-4">
        <SidebarMenuButton asChild>
          <a
            href="#"
            className="flex items-center gap-3 p-5 rounded-md transition-colors duration-300 hover:bg-[#e9e2f9] hover:text-[#4A24A1]"
          >
            <CircleAlert
              className="w-6 h-6 transition-colors duration-300 group-hover:text-[#4A24A1]"
              strokeWidth={3}
            />
            <span className="font-semibold hover:text-[#4A24A1]">Support</span>
          </a>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <a
            href="#"
            className="flex items-center gap-3 p-5 rounded-md transition-colors duration-300 hover:bg-[#e9e2f9] hover:text-[#4A24A1]"
          >
            <Settings
              className="w-6 h-6 transition-colors duration-300 group-hover:text-[#4A24A1]"
              strokeWidth={3}
            />
            <span className="font-semibold hover:text-[#4A24A1]">Settings</span>
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBarComponent;
