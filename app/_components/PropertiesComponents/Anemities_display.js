import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const Anemities = ({property}) => {
  return (
    <div>
    <h2 className="text-[30px] mt-[59.04px] mb-[14.88px]">Anemities</h2>
    {property.amenities.map((curr) => {
      return (
        <div className="flex items-center gap-[7.68px] ">
          <img
            className=" mb-[14.88px] rounded-[50%] p-[5px] h-[74.4px] w-[36.864px]  border-2 border-solid border-black"
            src={curr.pic}
          />
          <p>{curr.dsc}</p>
        </div>
      );
    })}
  </div>

  )
}
