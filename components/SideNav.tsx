"use client";

import { Logo, Avatar, Teaching, Money } from "@/public/index";
import { useState } from "react";
import Image from "next/image";
import {
  TriangleDownIcon,
  LayersIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const SideNav = () => {
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  return (
    <div className="flex h-full flex-col px-1 sm:px-5 py-4 md:px-0 border border-solid border-slate-200 divide-y divide-slate-200 ">
      <div className="flex flex-col gap-4 ">
        <Image
          src={Logo}
          alt="AdvoScholar Logo"
          className="sm:w-[9.375rem]  sm:ml-5"
        />

        <div className="flex flex-col items-center pb-8">
          <Image
            src={Avatar}
            alt="AdvoScholar Logo"
            className="sm:w-[7.125rem] sm:h-[7.125rem]"
          />
          <p className="text-xs sm:text-lg text-black-100 text-center">
            School Name
          </p>
        </div>
      </div>
      <ScrollArea className="flex flex-col gap-8">
        <Collapsible
          open={isEmployeeOpen}
          onOpenChange={setIsEmployeeOpen}
          className="w-full space-y-2 mt-4"
        >
          <div className="flex items-center justify-start sm:justify-between sm:space-x-4 sm:px-4">
            <div className="flex gap-2">
              <PersonIcon className="w-5 h-5 hidden sm:block" />
              <h4 className="text-xs sm:text-sm font-semibold">Employee</h4>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <TriangleDownIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-2">
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">Admin</div>
            <div className="px-1 sm:px-12 py-2  text-xs sm:text-sm ">
              Academic
            </div>
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">
              Non Academic
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={isClassOpen}
          onOpenChange={setIsClassOpen}
          className="w-full space-y-2 mt-4"
        >
          <div className="flex items-center justify-start sm:justify-between space-x-4 sm:px-4">
            <div className="flex gap-2">
              <Image
                src={Teaching}
                className="w-5 h-5 text-black hidden sm:block"
                alt="teaching"
              />
              <h4 className="text-xs sm:text-sm font-semibold">Classes</h4>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <TriangleDownIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-2">
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">JSS 1</div>
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">JSS 2</div>
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">JSS 3</div>
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">SSS 1</div>
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">SSS 2</div>
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">SSS 3</div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="w-full space-y-2 mt-4">
          <div className="flex items-center justify-start sm:justify-between sm:space-x-4 sm:px-4">
            <div className="flex gap-2">
              <LayersIcon className="w-5 h-5 hidden sm:block" />
              <h4 className="text-xs sm:text-sm font-semibold">Inventory</h4>
            </div>
          </div>
        </Collapsible>
        <Collapsible
          open={isFeeOpen}
          onOpenChange={setIsFeeOpen}
          className="w-full space-y-2 mt-4"
        >
          <div className="flex items-center justify-start sm:justify-between space-x-8 sm:space-x-4 sm:px-4">
            <div className="flex gap-2">
              <Image
                src={Money}
                className="w-5 h-5 text-black hidden sm:block"
                alt="teaching"
              />
              <h4 className="text-xs sm:text-sm font-semibold">Fee</h4>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <TriangleDownIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-2">
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">
              Analytics
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={isSettingOpen}
          onOpenChange={setIsSettingOpen}
          className="w-full space-y-2 mt-4"
        >
          <div className="flex items-center justify-start sm:justify-between space-x-2 sm:space-x-4 sm:px-4">
            <div className="flex gap-2">
              <GearIcon className="w-5 h-5 hidden sm:block" />
              <h4 className="text-xs sm:text-sm font-semibold">Settings</h4>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <TriangleDownIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-2">
            <div className="px-1 sm:px-12 py-2 text-xs sm:text-sm">
              Profile Settings
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ScrollArea>
    </div>
  );
};

export default SideNav;
