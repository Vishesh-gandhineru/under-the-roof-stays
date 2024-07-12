"use client"
import React from "react";
import { singlePropertyPolicies } from "@/app/_util/PropertiesAPI";
import { Dot } from "lucide-react";
import useSWR from "swr";

export const PropertyRules =  ({ property }) => {
  const fetcher = () =>  singlePropertyPolicies({ slug: property.slug });
 const { data: propertyRules, error } = useSWR(property?.slug, fetcher);


  return (
    <div className="rounded-[20px] mt-12">
      <h2 className="text-[30px] font-bold">Property Policy</h2>
      <div className="mt-8">
        <h3 className="text-[24px] font-bold">House Rule</h3>
        <p className="mt-4 text-[18px] flex">
          <Dot />
          Smoking is :{" "}
          {propertyRules?.property_policy?.houseRules.smokingAllowed.smokingAllowed === "false"
            ? "not allowed"
            : "allowed"}
          {propertyRules?.property_policy?.houseRules.smokingAllowed
            .nonSmokingRoomsAvailable === "true"
            ? "only at Smoking area"
            : ""}
        </p>
        <p className="mt-4 text-[18px] flex">
          <Dot />
          Pets :{" "}
          {propertyRules?.property_policy?.petsPolicies.petsAllowed === "allowed"
            ? "allowed"
            : propertyRules?.property_policy?.petsPolicies.petsAllowed === "not_allowed"
            ? "not allowed"
            : "allowed with restrictions"}
          {propertyRules?.property_policy?.houseRules.smokingAllowed
            .nonSmokingRoomsAvailable === "true"
            ? "only at Smoking area"
            : ""}
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-[24px] font-bold">Cancellation Policy </h3>
        {propertyRules?.manager_policy?.cancellationPolicies.map((policy) => {
          return (
            <div key={policy.policyId}>
              <p className="mt-4 text-[18px]">
                <b>
                  {policy.policyName} {`(id : ${policy.policyId})`}
                </b>
                : {policy.policyDescription}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
