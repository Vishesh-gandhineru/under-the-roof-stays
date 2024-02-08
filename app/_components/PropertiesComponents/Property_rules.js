import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const PropertyRules = ({property}) => {
  return (
    <div className=" mt-[8vh] rounded-[20px] px-[2vw] py-[5vh] ">
    <h2 className="text-[30px]  mb-[2vh]">Property Rules</h2>
    {property.houseRules.map((rules) => {
      return <li>{rules}</li>;
    })}
  </div>
  )
}
