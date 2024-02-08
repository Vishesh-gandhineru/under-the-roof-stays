import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const GuestsAllowed = ({property}) => {
  return (
    
    <div className="  mt-[37px] rounded-[20px] px-[30.72px] py-[37px] ">
    <h2 className="text-[30px] ">Guests</h2>
    <li>Maximum Allowed: {property.numberofguest.max}</li>
    <li>Number of Adults: {property.numberofguest.numberofadults.max}</li>
    <li>
      Number of Children max & min:{" "}
      {property.numberofguest.numberofchilders.min}/
      {property.numberofguest.numberofchilders.max}
    </li>
  </div>

  )
}
