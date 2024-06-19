"use client";
import React from "react";
import { Button } from "../ui/button";
import { CreateBooking } from "../../_util/BookingAPI";
import { useSession } from "@/app/context/useSession";

const CreateBookingBtn = ({ bookingData }) => {
  const { sessionId } = useSession();

  return (
    <div className="col-span-2 flex justify-end">
      <Button
        size="lg"
        type="button"
        onClick={async () => {
            try {
                console.log("Booking Data", bookingData);
              await CreateBooking(sessionId, bookingData);
            } catch (error) {
              console.error(error);
            }
          }}>
        Place Order
      </Button>
    </div>
  );
};

export default CreateBookingBtn;
