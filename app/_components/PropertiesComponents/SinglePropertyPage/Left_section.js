import React from "react";
import Heading from "@/app/_components/PropertiesComponents/SinglePropertyPage/Heading_property";
import { GalleryImages } from "./Gallery_images";
import { Anemities } from "./Anemities_display";
import { PropertyRules } from "./Property_rules";
import { Faqs } from "./Faq_section";
import { GuestsAllowed } from "./Guest_allowed";
import SinglePropertyDescription from "../../CustomUi/SinglePropertyDescription";

export const LeftSection = async ({ property }) => {

  return (
    <div className="max-w-[60%] w-full ">
      <div>
        <h2 className="font-bold text-3xl mb-3">Detail</h2>
        {property.descriptions.map((item, index) => {
          return (
            <SinglePropertyDescription
              key={index}
              typeCode={item.typeCode}
              text={item.text}
            />
          );
        })}
      </div>

      <GalleryImages property={property} />
      <Anemities property={property} />
      <PropertyRules property={property} />
      {/* <Faqs property={property} /> */}
      {/* <GuestsAllowed property={property} /> */}
    </div>
  );
};
