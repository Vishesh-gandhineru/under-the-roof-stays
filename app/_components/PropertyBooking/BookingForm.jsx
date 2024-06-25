"use client";

import * as React from "react";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import axios from "axios";

import { Label } from "@/app/_components/ui/label";
import { AddGuest } from "../FIlteringComponents/HomeFilter/addGuest";
import { Calendar } from "../ui/calendar";
import { addDays } from "date-fns";
import Link from "next/link";
import { FetchPropertyCalendar, RatePlan } from "@/app/_util/PropertiesAPI";
import RatePlanComponent from "./RateplanComponent";
import FeeComponent from "./FeeComponent";
import TaxComponent from "./TaxComponent";
import getSymbolFromCurrency from "currency-symbol-map";
import PriceBreakDown from "../PropertiesComponents/SinglePropertyPage/PriceBreakDown";
import { useSession } from "@/app/context/useSession";

export default function BookingForm({ propertyId, slug, property }) {
  
  const session = useSession(state => state.session);
  const sessionkey = session.sessionId  
  
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  const [CheckAvailbilityStatus, setCheckAvailbilityStatus] = useState("");
  const [CalenderData, setCalenderData] = useState();
  const [Loading, setLoading] = useState(false);
  const [GuestFromSessionStorage, setGuestFromSessionStorage] = useState(() => {
    return JSON.parse(sessionStorage.getItem("GuestData")) || {};
  });
  const [PropertyAvailableToBook, setPropertyAvailableToBook] = useState(false);

  const [SelectedPlan, setSelectedPlan] = useState();

  const [QuotationData, setQuotationData] = useState();

  useEffect(() => {
    const getcheckinDate = sessionStorage.getItem("Checkin-data");
    const getcheckoutDate = sessionStorage.getItem("Checkout-data");
    if (getcheckinDate && getcheckoutDate) {
      setDate({
        from: new Date(getcheckinDate),
        to: new Date(getcheckoutDate),
      });
    }
  
    
  }, []);


  const formatDate = (date) => {
    const year = date?.getFullYear();
    const month = String(date?.getMonth() + 1)?.padStart(2, "0");
    const day = String(date?.getDate())?.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const AvailabilityData = {
    propertyId: propertyId.toString(), //required
    slug: slug.toString(), //required
    checkIn: formatDate(date?.from), //required format = YYYY-MM-DD
    checkOut: formatDate(date?.to), //required format = YYYY-MM-DD
    adults: GuestFromSessionStorage?.AdultGuestCount, //required format = int
    children: GuestFromSessionStorage?.ChildGuestCount, //optional or send 0 format = int
    babies: 0, //optional or send 0 format = int
    pets: GuestFromSessionStorage?.PetsGuestCount,
    ratePlanId: null,
    currency: property?.rates[0]?.currency, //optional or send 0 format = int
  };

  console.log(AvailabilityData);


  const CheckAvailbility = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/quote`,
        AvailabilityData,
        {
          headers: {
            Authorization: sessionkey,
            "X-API-Token": process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN,
          },
        }
      )
      .then((response) => {
        setLoading(false);
        if (response.data.statusCode === 200) {
          setCheckAvailbilityStatus(response.data.messages);
          setQuotationData(response.data.data);
          setPropertyAvailableToBook(true);
        }
        console.log(response.data);
        console.log("This is response data");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          setCheckAvailbilityStatus(error.response.data.message);
          console.log(error.response.data);
        }
      });
  };

  const handleButtonClick = () => {
    CheckAvailbility();
  };

  useEffect(() => {
    async function getCalenderData() {
      const response = await FetchPropertyCalendar(slug);
      return setCalenderData(response);
    }
    getCalenderData();
   
  }, []);

  const ConvertedCalendarData = CalenderData ? CalenderData : [];
  const NotAvailableDate = [];
  const AvailableDate = [];

  function processData(data) {
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.forEach((key, index) => {
      const value = values[index];
      if (value.quantity === 0) {
        NotAvailableDate.push(new Date(key));
      } else {
        AvailableDate.push({
          date: new Date(key),
          quantity: value.quantity,
          baseAmount: value.baseAmount,
          currency: value.currency,
        });
      }
    });
  }
  processData(ConvertedCalendarData);

  function CustomDayContent(props) {
    const today = new Date();

    if (props.date >= today) {
      for (let i = 0; i < AvailableDate.length; i++) {
        if (props.date.getDate() == AvailableDate[i].date.getDate()) {
          return (
            <span style={{ position: "relative", overflow: "visible" }}>
              {props.date.getDate()} <br />
              <span className="text-[10px]">
                {props.date >= today
                  ? `${getSymbolFromCurrency(AvailableDate[i].currency)}${
                      AvailableDate[i].baseAmount
                    }`
                  : ""}
              </span>
            </span>
          );
        }
      }
    }

    return (
      <span style={{ position: "relative", overflow: "visible" }}>
        {props.date.getDate()} <br />
      </span>
    );
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
                components={{
                  DayContent: CustomDayContent, // Replace the DayContent component
                }}
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                disabled={[{ before: new Date() }, ...NotAvailableDate]}
              />
              <Label>Add Guest</Label>
              <AddGuest
                setGuestFromSessionStorage={setGuestFromSessionStorage}
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col justify-start items-start gap-3">
        <div className="flex items-center justify-center gap-4">
          <h2>Select Rate Plan : </h2>
          <RatePlanComponent
            slug={slug}
            setSelectedPlan={setSelectedPlan}
            SelectedPlan={SelectedPlan}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-4">Taxs</h2>
          <TaxComponent property={property} />
        </div>

        <div className="flex flex-col">
          {QuotationData && (
            <div>
              <h2 className="font-bold text-2xl mb-4">Fees</h2>
              <FeeComponent
                property={property}
                charges={QuotationData.charges}
              />
            </div>
          )}
        </div>
       {QuotationData && <div>
          <PriceBreakDown QuotationData = {QuotationData} />
        </div>}
       

        {!PropertyAvailableToBook && (
          <Button onClick={handleButtonClick} disabled={Loading}>
            Check Availability
          </Button>
        )}
        {Loading && (
          <div>
            <div className="w-12 h-12 rounded-full animate-spin border border-solid border-yellow-500 border-t-transparent"></div>
            <p>Checking for Availability</p>
          </div>
        )}
        <p>{CheckAvailbilityStatus}</p>

        {PropertyAvailableToBook && (
          <Button asChild>
            <Link
              href={{
                pathname: "/checkout",
                query: {
                  slug: slug,
                  propertyId: propertyId,
                  checkIn: formatDate(date?.from),
                  checkOut: formatDate(date?.to),
                  adults: GuestFromSessionStorage?.AdultGuestCount,
                  children: GuestFromSessionStorage?.ChildGuestCount,
                  pets: GuestFromSessionStorage?.PetsGuestCount,
                  ratePlanId: SelectedPlan ? SelectedPlan.planId : "",
                  ratePlanName: SelectedPlan ? SelectedPlan.planName : "",
                  currency: QuotationData.currency,
                  totalAmount: QuotationData.breakdown.total,
                },
              }}
            >
              Checkout
            </Link>
          </Button>
        )}
        <div className="font-bold text-2xl mt-3">
          {QuotationData
            ? `${
                !QuotationData.breakdown.discount == 0 ? (
                  <span className="text-decoration-line: line-through;">
                    {QuotationData.breakdown.discount}
                  </span>
                ) : (
                  ""
                )
              } Total Price : ${QuotationData.breakdown.total} ${getSymbolFromCurrency(QuotationData.currency)}`
            : `${property.rates[0]?.baseAmount} ${property.rates[0]?.currency}`}
        </div>
      </CardFooter>
    </Card>
  );
}
