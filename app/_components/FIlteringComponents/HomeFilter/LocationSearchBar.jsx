"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
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
  CommandList,
} from "@/app/_components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";

import { ScrollArea } from "../../ui/scroll-area";
import { locations } from "@/app/_util/Property_list/Property_location";
import { FetchPropertyForLocationBar } from "@/app/_util/PropertiesAPI";
import { useSearchSlug } from "@/app/context/useSearchSlug";

export default function LocationSearchBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [FetchLocation, setFetchLocation] = useState([]);
  const [SelectedLocation, setSelectedLocation] = useState("");
  const [Loading, setLoading] = useState(false);

  const { LocationSelected, setSearchSlug, setLocationSelected } = useSearchSlug();

  useEffect(() => {
    const GetLocationFromLocal = localStorage.getItem("location");
    const GetSelectedLocationFromLocal =
      localStorage.getItem("PropertySelected");
    if (GetLocationFromLocal && GetSelectedLocationFromLocal) {
      setValue(GetLocationFromLocal);
      setSelectedLocation(GetSelectedLocationFromLocal);
    }
  }, []);

  const fetchLocation = useCallback(async () => {
    setLoading(true);
    const data = await FetchPropertyForLocationBar(value);
    setFetchLocation(data);
    setLoading(false);
  }, [value]);

  useEffect(() => {
    localStorage.setItem("location", LocationSelected);
    localStorage.setItem("PropertySelected", SelectedLocation);

    const timer = setTimeout(() => {
      if (value !== "") {
        fetchLocation();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [value, fetchLocation]);

 

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
            {Loading ? (
              <CommandEmpty>Loading Property...</CommandEmpty>
            ) : (
              <CommandEmpty>No Property found.</CommandEmpty>
            )}
            <CommandGroup>
              {FetchLocation?.length > 0 && (
                <CommandItem
                  value={FetchLocation[0]?.general.city}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setSelectedLocation(
                      `${FetchLocation[0].general.city}, ${FetchLocation[0].general.state}`
                    );
                    setOpen(false);
                    localStorage.removeItem("SearchSlug");
                    setSearchSlug("");
                    setLocationSelected(
                      FetchLocation[0].general.city.toLowerCase()
                    );
                  }}
                >
                  <LocateIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === FetchLocation[0]?.general.city
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  <div>
                    {FetchLocation[0]?.general.city}
                    <span className="block text-sm text-gray-400">
                      {FetchLocation[0]?.general.state}
                    </span>
                  </div>
                </CommandItem>
              )}
              {FetchLocation?.map((item) => {
                return (
                  <CommandItem
                    className="fetched-location"
                    key={item._id}
                    value={`${item.general.city}-${item.propertyId}`}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : item.general.city);
                      setSelectedLocation(
                        currentValue === value
                          ? ""
                          : `${item.general.name}, ${item.general.city}, ${item.general.state} `
                      );
                      setSearchSlug(item.slug);
                      localStorage.setItem("SearchSlug", item.slug);
                      setOpen(false);
                    }}
                  >
                    <LocateIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === item.general.city
                          ? "opacity-100"
                          : "opacity-0"
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
                );
              })}
              <CommandSeparator />

              {locations.map((framework) => (
                <CommandItem
                  className="defult-location"
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setSelectedLocation(
                      currentValue === value
                        ? ""
                        : `${framework.cityName}, ${framework.state} `
                    );
                    setOpen(false);
                    localStorage.removeItem("SearchSlug");
                    setSearchSlug("");
                    setLocationSelected(framework.cityName.toLowerCase());
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
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
