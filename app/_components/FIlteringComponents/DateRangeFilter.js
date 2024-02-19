"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useState , useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";


export  function DatePickerWithRange({ className }) {

  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  const [DateChanged , setDateChanged] = useState({
    CheckIn : "" ,
    CheckOut : "",
  });

  const [Disable , setDisable] = useState(false);


  
  const handleDateChange = (date) => {
    setDateChanged({
      CheckIn: date?.from,
      CheckOut: date?.to
    });
  };
  

  useEffect(() => {
    if (DateChanged.CheckIn && DateChanged.CheckOut) {
      localStorage.setItem("DatesSelected", JSON.stringify(DateChanged));
    }
  }, [DateChanged]);

useEffect(() => {
  const getDates = JSON.parse(localStorage.getItem('DatesSelected'));
  if (getDates) {
    setDate({
      from: new Date(getDates.CheckIn),
      to: new Date(getDates.CheckOut)
    });
  }
} , [1]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(date)=>{
              setDate(date);
              handleDateChange(date);
            }}
            numberOfMonths={2}
            
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
