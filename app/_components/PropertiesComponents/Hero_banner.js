import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const HeroBanner = ({property}) => {
  return (
    
    <div className=" flex justify-around gap-[20px] items-center">
    <img
      src={property.images.backgroundImg}
      className="h-[500px] w-[700px] bg-[#dbdbdb] rounded-[30px] "
    />
    <img
      src={property.images.backgroundImg}
      className="h-[500px] w-[500px] bg-[#dbdbdb] rounded-[30px]"
    />
  </div>
  )
}
