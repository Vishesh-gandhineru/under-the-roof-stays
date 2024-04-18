"use client"
import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/app/_components/ui/button"
import { Input } from "../../ui/input"
import { Plus , Minus } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover"

import CustomTooltip from "../../CustomUi/Customtooltips"

import { Label } from "@/app/_components/ui/label"

export function AddGuest() {
  const [open, setOpen] = useState(false)
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="h-[inherit]" variant="outline">Add Guests</Button>
        </PopoverTrigger>
        <PopoverContent className="sm:max-w-[425px]">              
          <ProfileForm />
        </PopoverContent>
      </Popover>
    )
  }
  function ProfileForm({ className }) {
    const [AdultGuestCount, setAdultGuestCount] = useState(0);
    const [ChildGuestCount, setChildGuestCount] = useState(0);
    const [PetsGuestCount, setPetsGuestCount] = useState(0);
 
    
    const handleAdultAddGuest = (event) => {
      event.preventDefault(); 
      setAdultGuestCount(AdultGuestCount + 1);
    };
    const handleAdultChange = (event) => {
      event.preventDefault(); 
      setAdultGuestCount(event.target.value)
    }   
   
  
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
      setChildGuestCount(event.target.value)
    }

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
      setPetsGuestCount(event.target.value)
    }


    const handleSubmit = (event) => {
      event.preventDefault();

    };

    
    return (
      <form onSubmit={handleSubmit} className={cn("grid items-start gap-4", className)}>
        <div className="flex justify-between items-center">
          <Label htmlFor="adults" className="font-bold text-[18px] capitalize">Adults <CustomTooltip content={"tooltip"}/> </Label>
          <div className="flex gap-3">
          <button onClick={handleAdultAddGuest} value="add"><Plus className="w-[80%]" /></button>
          <Input className="w-[50px]" type="number" placeholder="0" name="adults" value={AdultGuestCount} onChange={handleAdultChange} />
          <button onClick={handleAdultRemoveGuest} value="remove" ><Minus className="w-[80%]" /></button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Label htmlFor="children" className="font-bold text-[18px] capitalize ">Children</Label>
          <div className="flex gap-3">
          <button onClick={handleChildAddGuest} value="add"><Plus className="w-[80%]" /></button>
          <Input className="w-[50px]" type="number" placeholder="0" name="child" value={ChildGuestCount} onChange={handleChildChange} />
          <button onClick={handleChildRemoveGuest} value="remove" ><Minus className="w-[80%]" /></button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Label htmlFor="pets" className="font-bold text-[18px] capitalize">Pets</Label>
          <div className="flex gap-3">
          <button onClick={handlePetsAddGuest} value="add"><Plus className="w-[80%]" /></button>
          <Input className="w-[50px]" type="number" placeholder="0" name="pets" value={PetsGuestCount} onChange={handlePetsChange} />
          <button onClick={handlePetsRemoveGuest} value="remove" ><Minus className="w-[80%]" /></button>
          </div>
        </div>
        <Button type="submit">ADD</Button>
      </form>
    );
  }

