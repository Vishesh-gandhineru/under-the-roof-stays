import React from "react";
import Heading from "@/app/_components/PropertiesComponents/Heading_property";
import { GalleryImages } from "./Gallery_images";
import { Anemities } from "./Anemities_display";
import { PropertyRules } from "./Property_rules";
import { Faqs } from "./Faq_section";
import { GuestsAllowed } from "./Guest_allowed";

export const LeftSection = ({ property }) => {
  {
    console.log(`suyash`, property);
  }
  return (
    <div className="w-[691.2px] ">
      <h2 className="text-[25px] font-bold">
        Price - Rs.{property.numberofguest.price}
      </h2>
      <h6 className="font-bold  pt-[1vh]">
        Bath Rooms - {property.propertyAttributes.bathRooms}, Pools -{" "}
        {property.propertyAttributes.pools}
      </h6>
      <p className="mt-[37px] pl-[15.36px] pr-[46.08px] text-[18px]">
        {property.description}
      </p>

      <GalleryImages property={property} />
      <Anemities property={property} />
      <PropertyRules property={property} />
      <Faqs property={property} />
      <GuestsAllowed property={property} />
    </div>
  );
};
