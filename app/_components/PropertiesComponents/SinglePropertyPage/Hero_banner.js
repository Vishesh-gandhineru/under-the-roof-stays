import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/SinglePropertyPage/Heading_property";

export const HeroBanner = ({property}) => {
  return (
    
    <div className="flex flex-row justify-around gap-[20px] items-center">
    <img
      src={property.images[0].url}
      className="max-w-[60%] w-full h-[500px] bg-[#dbdbdb] object-cover object-center rounded-[30px] "
    />
    <img
      src={property.images[1].url}
      className="max-w-[40%] w-full h-[500px] object-cover object-center bg-[#dbdbdb] rounded-[30px]"
    />
  </div>
  )
}
