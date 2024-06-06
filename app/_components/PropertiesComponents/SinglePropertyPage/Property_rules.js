import React from "react";
import { singlePropertyPolicies } from "@/app/_util/PropertiesAPI";
import { Dot } from "lucide-react";

export const PropertyRules = async ({ property }) => {
  const propertyRules = await singlePropertyPolicies({ slug: property.slug });

  const { property_policy, manager_policy } = propertyRules;
  const { cancellationPolicies } = manager_policy;

  return (
    <div className="rounded-[20px] mt-12">
      <h2 className="text-[30px] font-bold">Property Policy</h2>
      <div className="mt-8">
        <h3 className="text-[24px] font-bold">House Rule</h3>
        <p className="mt-4 text-[18px] flex">
          <Dot />
          Smoking is :{" "}
          {property_policy.houseRules.smokingAllowed.smokingAllowed === "false"
            ? "not allowed"
            : "allowed"}
          {property_policy.houseRules.smokingAllowed
            .nonSmokingRoomsAvailable === "true"
            ? "only at Smoking area"
            : ""}
        </p>
        <p className="mt-4 text-[18px] flex">
          <Dot />
          Pets :{" "}
          {property_policy.petsPolicies.petsAllowed === "allowed"
            ? "allowed"
            : property_policy.petsPolicies.petsAllowed === "not_allowed"
            ? "not allowed"
            : "allowed with restrictions"}
          {property_policy.houseRules.smokingAllowed
            .nonSmokingRoomsAvailable === "true"
            ? "only at Smoking area"
            : ""}
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-[24px] font-bold">Cancellation Policy </h3>
        {cancellationPolicies.map((policy) => {
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
