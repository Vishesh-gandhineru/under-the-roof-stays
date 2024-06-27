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

const CreateBookingBtn = ({ bookingData , className }) => {
  const session = useSession(state => state.session);
  const sessionkey = session.sessionId  
  const [isBookingCreated , setIsBookingCreated] = useState(false);
  const [bookingResponse , setBookingResponse] = useState();
  const [paymentLink , setPaymentLink] = useState();
  
  const bookingId = bookingResponse?.data?.bookingId;
  

 useEffect(() => {

  const getPaymentLink = async () => {
    const payment = await GetPaymentLink(sessionkey, bookingId);
    setPaymentLink(payment);
  };
  getPaymentLink();
 }, [bookingResponse]);


  return (  
    <div className={cn("col-span-2 flex justify-end", [
      className
    ])}>
     <Button
      className="w-full"
        type="button"
        onClick={async () => {
                console.log("Booking Data", bookingData);
                const Booking = await CreateBooking(sessionkey, bookingData);
                setBookingResponse(Booking);
                if (Booking.statusCode) return setIsBookingCreated(true);                
          }}>
        Place Order
      </Button>
    {paymentLink &&  <Button asChild>
        <Link href={paymentLink?.data.paymentUrl}>Pay now</Link>
      </Button>}
    </div>
  );
};

export default CreateBookingBtn;
