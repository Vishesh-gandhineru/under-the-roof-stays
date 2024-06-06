"use client";
import { RatePlan } from "@/app/_util/PropertiesAPI";
import { Button } from "../ui/button";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/_components/ui/carousel"
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card"

export default function RatePlanComponent({ slug ,SelectedPlan ,setSelectedPlan }) {
  const [RatePlanData, setRatePlanData] = useState();
  const [popupOpen , setPopupOpen] = useState(false);
  const FetchRatePlan = async () => {
    const RatePlanData = await RatePlan(slug);
    return setRatePlanData(RatePlanData);
  };

//   const combinedRatePlans = RatePlanData?.property_rateplan[0].rateplans.concat(RatePlanData.manager_rateplan[0].rateplans);

  return (
    <div>
      <Popover open={popupOpen} onOpenChange={setPopupOpen} >
        <PopoverTrigger asChild>
            <Button  onClick={FetchRatePlan}> {SelectedPlan?.PlanName ? SelectedPlan.PlanName : "Select Rate Plan"}</Button>
         
        </PopoverTrigger>
        <PopoverContent>
       {RatePlanData && <div className="w-full max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {RatePlanData.property_rateplan[0].rateplans.map((plan) => (
            <CarouselItem key={plan.policyId}>
              <Card
                className={`p-2 transition-all ${
                    SelectedPlan === plan.policyId
                    ? "bg-primary text-primary-foreground"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => {
                    setSelectedPlan({"planId" : plan.policyId , "PlanName" : plan.supplierRateplanName})
                    setPopupOpen(false)
                }}
              >
                <CardHeader>
                  <CardTitle>{plan.supplierRateplanName}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Valid from</span>
                    <span className="text-sm">{new Date(plan.validFromDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Valid to</span>
                    <span className="text-sm">{new Date(plan.validUntilDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Price</span>
                    <span className="text-sm font-medium">{plan.pricingOffset}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Plan ID</span>
                    <span className="text-sm">{plan.policyId}</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>}
        </PopoverContent>
      </Popover>
    </div>
  );
}
