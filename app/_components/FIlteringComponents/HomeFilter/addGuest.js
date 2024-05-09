"use client";

import { useState, useEffect } from "react";
import { cn } from "../../../../lib/utils";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Plus, Minus, Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover";

import CustomTooltip from "../../CustomUi/Customtooltips";

import { Label } from "../../ui/label";
import { set } from "date-fns";

export function AddGuest({setGuestFromSessionStorage}) {
  const [open, setOpen] = useState(false);
  const [guestDataAvailable, setGuestDataAvailable] = useState(false);
  const [GuestDataFromLocalStorage, setGuestDataFromLocalStorage] = useState(
    {}
  );
  const [AdultGuestCount, setAdultGuestCount] = useState(0);
  const [ChildGuestCount, setChildGuestCount] = useState(0);
  const [PetsGuestCount, setPetsGuestCount] = useState(0);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("GuestData"));
    if (data) {
      setGuestDataAvailable(true);
      setGuestDataFromLocalStorage(data);
    }
  }, []);

 

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("GuestData"));
    if (data) {
      setAdultGuestCount(data.AdultGuestCount);
      setChildGuestCount(data.ChildGuestCount);
      setPetsGuestCount(data.PetsGuestCount);
    }
  }, [GuestDataFromLocalStorage]);

  const handleAdultAddGuest = (event) => {
    event.preventDefault();
    setAdultGuestCount(AdultGuestCount + 1);
  };
  const handleAdultChange = (event) => {
    event.preventDefault();

    setAdultGuestCount(event.target.value);
  };

  const handleAdultRemoveGuest = (event) => {
    event.preventDefault();
    setAdultGuestCount(AdultGuestCount > 0 ? AdultGuestCount - 1 : 0);
  };

  const handleChildAddGuest = (event) => {
    event.preventDefault();
    setChildGuestCount(ChildGuestCount + 1);
  };

  const handleChildRemoveGuest = (event) => {
    event.preventDefault();
    setChildGuestCount(ChildGuestCount > 0 ? ChildGuestCount - 1 : 0);
  };

  const handleChildChange = (event) => {
    event.preventDefault();
    setChildGuestCount(event.target.value);
  };

  const handlePetsAddGuest = (event) => {
    event.preventDefault();
    setPetsGuestCount(PetsGuestCount + 1);
  };

  const handlePetsRemoveGuest = (event) => {
    event.preventDefault();
    setPetsGuestCount(PetsGuestCount > 0 ? PetsGuestCount - 1 : 0);
  };

  const handlePetsChange = (event) => {
    event.preventDefault();
 
    setPetsGuestCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem(
      "GuestData",
      JSON.stringify({ AdultGuestCount, ChildGuestCount, PetsGuestCount })
    );
    setOpen(false);
    setGuestDataAvailable(true);
    setGuestFromSessionStorage({ AdultGuestCount, ChildGuestCount, PetsGuestCount });
  };

 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="h-[inherit]" variant="outline">
        {guestDataAvailable ? `Adult : ${AdultGuestCount} , Child : ${ChildGuestCount} , Pets : ${PetsGuestCount}` : "Add Guest"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:max-w-[425px]">
      <form
      onSubmit={handleSubmit}
      className={cn("grid items-start gap-4")}
    >
      <div className="flex justify-between items-center">
        <Label htmlFor="adults" className="font-bold text-[18px] capitalize">
          Adults
        </Label>
        <div className="flex gap-3">
          <button onClick={handleAdultRemoveGuest} value="remove">
            <Minus className="w-[80%]" />
          </button>
          <Input
            className="w-[50px]"
            type="number"
            placeholder="0"
            name="adults"
            value={AdultGuestCount}
            onChange={handleAdultChange}
          />
          <button onClick={handleAdultAddGuest} value="add">
            <Plus className="w-[80%]" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Label htmlFor="children" className="font-bold text-[18px] capitalize ">
          Children
        </Label>
        <div className="flex gap-3">
        <button onClick={handleChildRemoveGuest} value="remove">
            <Minus className="w-[80%]" />
          </button>
          <Input
            className="w-[50px]"
            type="number"
            placeholder="0"
            name="child"
            value={ChildGuestCount}
            onChange={handleChildChange}
          />
          
          <button onClick={handleChildAddGuest} value="add">
            <Plus className="w-[80%]" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Label htmlFor="pets" className="font-bold text-[18px] capitalize">
          Pets
        </Label>
        <div className="flex gap-3">
        <button onClick={handlePetsRemoveGuest} value="remove">
            <Minus className="w-[80%]" />
          </button>
          <Input
            className="w-[50px]"
            type="number"
            placeholder="0"
            name="pets"
            value={PetsGuestCount}
            onChange={handlePetsChange}
          />
           <button onClick={handlePetsAddGuest} value="add">
            <Plus className="w-[80%]" />
          </button>
        
        </div>
      </div>
      <Button type="submit">ADD</Button>
    </form>
      </PopoverContent>
    </Popover>
  );
}
