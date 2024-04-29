import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/SinglePropertyPage/Heading_property";
import { Check } from 'lucide-react';

export const Anemities = ({property}) => {
  return (
    <div>
    <h2 className="text-[30px] mt-[59.04px] mb-[14.88px]">Anemities</h2>
   <div className='grid grid-cols-3 gap-3'>
    {property.amenities.map((item, index) => {
      return (
        <div key={index} className="flex items-center gap-[7.68px] ">
          <Check />
          <p>{item.type}</p>
        </div>
      );
    })}
   </div>
  </div>

  )
}
