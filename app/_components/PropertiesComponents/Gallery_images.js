import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const GalleryImages = ({property}) => {
  return (
    <div className="flex-column ">
      <h2 className="text-[30px] mt-[59.04px]">Explore the Place</h2>

      <div className="flex justify-between gap-[15.36px] h-[147.6px] w-[460.8px] mt-[40px]">
        {property.images.gallery.map((item , index) => {
          return <img key={index} className="rounded-[10px]" src={item} />;
        })}
      </div>
    </div>
    
  )
}
