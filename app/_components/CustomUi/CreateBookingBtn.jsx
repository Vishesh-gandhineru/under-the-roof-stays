"use client";
import React, { useEffect , useState } from "react";
import { Button } from "../ui/button";
import { CreateBooking } from "../../_util/BookingAPI";
import { useSession } from "@/app/context/useSession";
import { cn } from "@/lib/utils";

const CreateBookingBtn = ({ bookingData , className }) => {
  const session = useSession(state => state.session);
  const sessionkey = session.sessionId  
  const [isBookingCreated , setIsBookingCreated] = useState(false);
  const [bookingResponse , setBookingResponse] = useState();

  console.log(bookingResponse)


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
          }}>
        Place Order
      </Button>
    </div>
  );
};

export default CreateBookingBtn;
