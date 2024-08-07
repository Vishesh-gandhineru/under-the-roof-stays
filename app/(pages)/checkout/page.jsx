"use client"

import { Label } from "@/app/_components/ui/label";
import { useState } from "react";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/app/_components/ui/select";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { FetchSingleProperty } from "@/app/_util/PropertiesAPI";
import { CreateBooking } from "@/app/_util/BookingAPI";
import CreateBookingBtn from "@/app/_components/CustomUi/CreateBookingBtn";
import { PropertyRules } from "@/app/_components/PropertiesComponents/SinglePropertyPage/Property_rules";
import getSymbolFromCurrency from "currency-symbol-map";
import Link from "next/link";
import CheckoutForm from "@/app/_components/PropertyBooking/CheckoutForm";
import useSWR from "swr";

export default  function CheckoutPage({ searchParams }) {
  const {
    slug,
    propertyId,
    checkIn,
    checkOut,
    adults,
    children,
    pets,
    ratePlanId,
    ratePlanName,
    currency,
    totalAmount

  } = searchParams;

  const [userData , setUserData] = useState({});

  // const property = await FetchSingleProperty(slug);
  const fetcher = (slug) => FetchSingleProperty(slug); 
  const { data: property, error } = useSWR(slug, fetcher);
  const bookingData = {
    propertyId: propertyId, //required
    slug: slug, //required
    checkIn: checkIn, //required format = YYYY-MM-DD
    checkOut: checkOut, //required format = YYYY-MM-DD
    adults: Number(adults), //required format = int
    children: Number(children), //optional or send 0 format = int
    babies: 0, //optional or send 0 format = int
    pets: Number(pets), //optional or send 0 format = int
    currency: currency,
    bookerDetails: {
      surName: userData?.surName || "Jhadi", //required
      titleCode: userData?.title || "male", //required [male, female, family]
      firstName: userData?.name || "vishesh", //required
      countryCode: "us", // required
      language:  "en", //required "two letter"
      zipCode: userData?.zip || "400001", // required
      houseNumber: userData?.houseNumber | "houseNumber", // required
      street: userData?.street || "test", // required
      place: userData?.city || "test", // required
      stateProv: userData?.state || "test", // required
      phoneNumber: userData?.phone || "6281510860", // required
      email: userData?.email || "visheshjhadi@gmail.com", // required
      dateOfBirth: userData?.dob || "2000-01-29", // required yyyy-mm-dd
    },
    remark: "",
    totalPrice: Number(totalAmount), // ***** this needs to come from quote API
    rateplanId: null,
    fees: [
      {
        feeCode: "FIN",
        fee: "Final cleaning",
        type: "Obligatory",
        mode: "Price per stay",
        chargeType: "MAN",
        currency: "EUR",
        chargeMode: "STA",
        amount: 10000,
        fromDate: "2023-06-22T00:00:00.000+00:00",
        untilDate: "2030-06-01T00:00:00.000+00:00",
        isTaxable: false,
        applicableTaxPercentage: 0,
        quantity: 1,
      },
    ],
  };


  return (
    <div className="flex flex-col min-h-screen">
      {!slug ? (
        <div>
          <h1 className="text-2xl font-bold text-center mt-8">
            No property for checkout
          </h1>
        </div>
      ) : (
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 p-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <CheckoutForm userData={userData} setUserData={setUserData} />
            <PropertyRules property={property} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Check-In</span>
                <span>{checkIn}</span>
              </div>
              <div className="flex justify-between">
                <span>Check-Out</span>
                <span>{checkOut}</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">Guest</span>
                </div>
                <div>
                  <div className="font-bold">
                    Adults : <span className=" font-normal">{adults}</span>{" "}
                  </div>
                  <div className="font-bold">
                    {" "}
                    children: <span className=" font-normal">
                      {children}
                    </span>{" "}
                  </div>
                  <div className="font-bold">
                    pets : <span className=" font-normal">{pets}</span>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-[80%]">
                  <p className="font-medium">{property?.general?.name}</p>
                  <p className="text-gray-500">{property?.general?.address}</p>
                  <p className="text-gray-500">
                    {property?.general?.city} ,{property?.general?.region} ,{" "}
                    {property?.general?.state}
                  </p>
                </div>
                <p className="ml-auto font-medium">
                {totalAmount} {getSymbolFromCurrency(currency)}
                </p>
              </div>
            </div>
            <div className="space-y-2 my-4">
                <Label htmlFor="coupon">Promo Code</Label>
                <div className="flex">
                  <Input id="coupon" placeholder="Enter promo code" />
                  <Button className="ml-2">Apply</Button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
              <CreateBookingBtn bookingData={bookingData} className=" w-full" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
              By placing your order, you agree to our{" "}
              <Link href="#" className="underline" prefetch={false}>
                Terms of Service
              </Link>
              and{" "}
              <Link href="#" className="underline" prefetch={false}>
                Privacy Policy
              </Link>
              .
            </p>
              </div>
          </div>
        </main>
      )}
    </div>
  );
}
