"use client";

import React from "react";
import { Checkbox } from "@/app/_components/ui/checkbox";

export function CheckboxDemo() {
  return (
    <div className="mt-[25px] pt-[15px] border-t-2 border-solid border-t-[#bababa]">
      <div className="mb-[15px]">
        <h4 className="text-[20px]">Top Filters</h4>
      </div>
      <div className="flex-column ">
        <div className="flex items-center space-x-2 mt-[15px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pet Friendly
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-[15px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pool
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-[15px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pure Veg
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-[15px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Jain Food
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-[15px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Vegan
          </label>
        </div>
      </div>
    </div>
  );
}
