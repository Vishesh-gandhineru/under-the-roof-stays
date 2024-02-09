"use client"
import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/app/_components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"

export function DrawerDialog() {
  const [open, setOpen] = useState(false)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Guests</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Guests</DialogTitle>
            <DialogDescription>
             Add how many people will be there...!
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
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
  
    const handleAdultRemoveGuest = (event) => {
      event.preventDefault(); 
      setAdultGuestCount(AdultGuestCount - 1);
    };
  
    const handleChildAddGuest = (event) => {
      event.preventDefault(); 
      setChildGuestCount(ChildGuestCount + 1);
    };
  
    const handleChildRemoveGuest = (event) => {
      event.preventDefault(); 
      setChildGuestCount(ChildGuestCount - 1);
    };

    const handlePetsAddGuest = (event) => {
      event.preventDefault(); 
      setPetsGuestCount(PetsGuestCount + 1);
    };
  
    const handlePetsRemoveGuest = (event) => {
      event.preventDefault(); 
      setPetsGuestCount(PetsGuestCount - 1);
    };
    const handleSubmit = (event) => {
      event.preventDefault();

    };
  
    return (
      <form onSubmit={handleSubmit} className={cn("grid items-start gap-4", className)}>
        <div className="flex justify-around items-center">
          <Label htmlFor="adults">Adults - </Label>
          <p>{AdultGuestCount}</p>
          <button onClick={handleAdultAddGuest}>Add</button>
          <button onClick={handleAdultRemoveGuest}>Remove</button>
        </div>
        <div className="flex justify-around items-center">
          <Label htmlFor="children">Children -</Label>
          <p>{ChildGuestCount}</p>
          <button onClick={handleChildAddGuest}>Add</button>
          <button onClick={handleChildRemoveGuest}>Remove</button>
        </div>
        <div className="flex justify-around items-center">
          <Label htmlFor="pets">Pets -</Label>
          <p>{PetsGuestCount}</p>
          <button onClick={handlePetsAddGuest}>Add</button>
          <button onClick={handlePetsRemoveGuest}>Remove</button>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }

