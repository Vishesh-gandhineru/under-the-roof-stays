"use client";

import * as React from "react";
import { useEffect, useState, useReducer } from "react";
import { Search, LocateIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/app/_components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";

import { ScrollArea } from "../../ui/scroll-area";
import { locations } from "@/app/_util/Property_list/Property_location";
import { FetchPropertyForLocationBar } from "@/app/_util/PropertiesAPI";

export default function LocationSearchBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [FetchLocation, setFetchLocation] = useState([]);  
  const [SelectedLocation , setSelectedLocation] = useState("");
 

  useEffect(() => {
    localStorage.setItem("location", value);
    const timer = setTimeout(() => {
      async function fetchLocation() {
        const data = await FetchPropertyForLocationBar(value);
        setFetchLocation(data);
      }
      if (!value == "") {
        fetchLocation();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between overflow-hidden"
        >
          {SelectedLocation ? SelectedLocation : "Search Location"}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput
            placeholder="Search location / Property..."
            value={value}
            onValueChange={setValue}
          />
          <ScrollArea className="h-[200px]">
            <CommandEmpty>No Property found.</CommandEmpty>
            <CommandGroup>
              {locations.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setSelectedLocation(currentValue === value ? "" : `${framework.cityName}, ${framework.state} `);
                    setOpen(false);
                  }}
                >
                  <LocateIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div>
                    {framework.cityName}
                    <span className="block text-sm text-gray-400">
                      {framework.state}
                    </span>
                  </div>
                </CommandItem>
              ))}
              <CommandSeparator />
              {FetchLocation.map((item)=>{
                const ItemValue = item.general.city;
                return(
                  <CommandItem
                  key={item._id}
                  value={ItemValue.toLowerCase()}
                  onSelect={(currentValue) => {
                    console.log(currentValue , "currentValue")
                    setValue(currentValue === value ? "" : currentValue);
                    setSelectedLocation(currentValue === value ? "" : `${item.general.name}, ${item.general.city}, ${item.general.state} `);
                    setOpen(false);
                  }}
                >
                  <LocateIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex justify-between items-center w-full">
                    <div>
                  {item.general.name}  
                  <span className="block text-sm text-gray-400">
                      {item.general.address}
                    </span>
                    </div>
                  <div>
                    <span className="block text-sm text-gray-400">
                    {item.general.city} <br />
                    {item.general.state}
                    </span>
                  </div>
                  </div>
                </CommandItem>
                )
              })}
              
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
