"use client";
import React, { useEffect , useState } from "react";
import { Button } from "../ui/button";
import { CreateBooking } from "../../_util/BookingAPI";
import { useSession } from "@/app/context/useSession";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useSWR from "swr";
import { GetPaymentLink } from "../../_util/BookingAPI";
import { RefreshSession } from "../../_util/BookingAPI";
import { get } from "http";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog"
import { set } from "date-fns";

const CreateBookingBtn = ({ bookingData , className }) => {
  const session = useSession(state => state.session);
  const sessionkey = session.sessionId  
  const [isBookingCreated , setIsBookingCreated] = useState(false);
  const [bookingResponse , setBookingResponse] = useState();
  const [paymentLink , setPaymentLink] = useState();
  const [isloading , setIsLoading] = useState(false);
  const bookingId = bookingResponse?.data?.bookingId;
  const [LoadingText , setLoadingText] = useState("Loading...");
  const [errorText , setErrorText] = useState();
  

 useEffect(() => {

  const getPaymentLink = async () => {
    setIsLoading(true);
    setLoadingText("Getting Payment Link...");
    const payment = await GetPaymentLink(sessionkey, bookingId);
    setIsLoading(false);
    setPaymentLink(payment);
  };
  getPaymentLink();
 }, [bookingResponse]);


  return (  
    <div className={cn("", [
      className
    ])}>
      {isloading && <div>
        {LoadingText}
      </div>}
      <div className="flex flex-col w-full gap-5">
     <Button
      className="w-full"
        type="button"
        onClick={async () => {
                console.log("Booking Data", bookingData);
                setIsLoading(true);
                const Booking = await CreateBooking(sessionkey, bookingData);
                if (Booking?.statusCode) {
                  if(Booking.statusCode === 409){
                    setErrorText(Booking.message)
                  }
                  setIsLoading(false);
                  setIsBookingCreated(true)
                } ;                
                setBookingResponse(Booking);
          }}>
        Place Order
      </Button>
    {paymentLink &&  <Button asChild className="w-full">
        <Link href={paymentLink?.data.paymentUrl} target="_blank">Pay now</Link>
      </Button>}

      </div>
      <div>{errorText}</div>
    </div>
  );
};

export default CreateBookingBtn;
