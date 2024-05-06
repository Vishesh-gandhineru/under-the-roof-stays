"use client"
import React from "react";
import { CheckinOutDatePicker } from "./HomeFilter/Checkin&outDatePicker";
import { AddGuest } from "./HomeFilter/addGuest";
import LocationSearchBar from "./HomeFilter/LocationSearchBar";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSearchSlug } from "@/app/context/useSearchSlug";

export const HomePageFilter = () => {

  const { SearchSlug , LocationSelected } = useSearchSlug();

  return (
    <div className="flex-column">
      <div className="flex justify-center items-center mb-[20px]">
        <div className="shadow-lg shadow-[#1f1f1f]-500/50 flex gap-[20px] border-[1px] border-[#dbdbdb] border-solid rounded-[10px] px-[20px] py-[15px]">
          {/* <input className='border-[1px] border-solid border-[#dbdbdb] rounded-[5px] p-[10px]' placeholder='Enter the destination - vishesh'></input> */}
          <LocationSearchBar />
          <CheckinOutDatePicker />
          <AddGuest />
          <Button asChild>
            <Link href={!SearchSlug == "" ? `/properties/${SearchSlug}` : `/properties?location=${LocationSelected}`}>
            Search
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
