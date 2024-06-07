"use client"

import * as React from "react"

import { useState , useEffect } from "react"
import { Button } from "@/app/_components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card"
import axios from "axios"

import { Label } from "@/app/_components/ui/label"
import { AddGuest } from "../FIlteringComponents/HomeFilter/addGuest"
import { Calendar } from "../ui/calendar"
import { addDays} from "date-fns";
import Link from "next/link"
import { RatePlan } from "@/app/_util/PropertiesAPI"
import RatePlanComponent from "./RateplanComponent"
import FeeComponent from "./FeeComponent"
import TaxComponent from "./TaxComponent"



export default function BookingForm({propertyId , slug, property}) {

  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 1),
});

const [CheckAvailbilityStatus , setCheckAvailbilityStatus] = useState("");  
const [Loading , setLoading] = useState(false);
const [GuestFromSessionStorage, setGuestFromSessionStorage] = useState(() => {
  return JSON.parse(sessionStorage.getItem("GuestData")) || {};
});
const [PropertyAvailableToBook, setPropertyAvailableToBook] = useState(false);

const [SelectedPlan , setSelectedPlan] = useState();

useEffect(() => {
  const getcheckinDate = localStorage.getItem("Checkin-data");
  const getcheckoutDate = localStorage.getItem("Checkout-data");
  if (getcheckinDate && getcheckoutDate) {
    setDate({ from: new Date(getcheckinDate), to: new Date(getcheckoutDate) });
  }
}, []);



const formatDate = (date) => {
    const year = date?.getFullYear();
    const month = String(date?.getMonth() + 1)?.padStart(2, "0");
    const day = String(date?.getDate())?.padStart(2, "0");
    return `${year}-${month}-${day}`;
};

const AvailabilityData = {  
    "propertyId": propertyId.toString(), //required
    "slug": slug.toString(), //required
    "checkIn": formatDate(date?.from),  //required format = YYYY-MM-DD
    "checkOut": formatDate(date?.to),  //required format = YYYY-MM-DD
    "adults": GuestFromSessionStorage?.AdultGuestCount,  //required format = int
    "children": GuestFromSessionStorage?.ChildGuestCount, //optional or send 0 format = int
    "babies": 0, //optional or send 0 format = int
    "pets": GuestFromSessionStorage?.PetsGuestCount //optional or send 0 format = int
};


const CheckAvailbility = async () => {
  setLoading(true)
  await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/availablity`, AvailabilityData, {
      headers: {
        "Authorization": process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN,
        "X-API-Token" : process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN,
      }, 
     
    })
   .then (
      (response) => {
        setLoading(false)
        console.log(response.data);
        console.log("This is response data")
      }
    
   ).catch(function (error) {
      setLoading(false)
        if (error.response) {
         if (error.response.status === 409) {
          setCheckAvailbilityStatus("The Property is already booked for the selected dates")
         }
          console.log(error.response.status);
          console.log(error)
         
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
     }  

const handleButtonClick = () => {
  console.log("button clicked")
  CheckAvailbility();
};


const TempButtonClick = () => {
  setCheckAvailbilityStatus("The Property is available for the selected dates")
  setPropertyAvailableToBook(true)
}



     
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Booking Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 items-start justify-start gap-3">
              <Label htmlFor="name">Check-in / Checkout</Label>
              <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
          />
              <Label>Add Guest</Label>
              <AddGuest setGuestFromSessionStorage={setGuestFromSessionStorage} />
            </div>           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start gap-3">
        <div className="flex items-center justify-center gap-4">
        <h2>Select Rate Plan : </h2>
        <RatePlanComponent slug={slug} setSelectedPlan={setSelectedPlan} SelectedPlan={SelectedPlan}/>
        </div>

        <div className="flex flex-col">
        <h2 className="font-bold text-2xl mb-4">Fees</h2>
        <FeeComponent property={property}/>
        </div>
        <div className="flex flex-col">
        <h2 className="font-bold text-2xl mb-4">Taxs</h2>
        <TaxComponent property={property}/>
        </div>

      
     {!PropertyAvailableToBook && <Button onClick={handleButtonClick} disabled={Loading}>Check Availability</Button>}
        {Loading && <div>
          <div class="w-12 h-12 rounded-full animate-spin border border-solid border-yellow-500 border-t-transparent"></div>
          <p>Checking for Availability</p>
          </div> }
        <p>{CheckAvailbilityStatus}</p>

        {/* {!PropertyAvailableToBook && <Button onClick={TempButtonClick}>Temp Check Availability Return True</Button>}
        {PropertyAvailableToBook && <Button asChild ><Link href={`/checkout?propertyid=${propertyId}&&slug=${slug}`}>Checkout</Link></Button>} */}
      
      </CardFooter>
    </Card>
  )
}
