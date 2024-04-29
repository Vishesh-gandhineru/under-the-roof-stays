import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

export const GalleryImages = ({ property }) => {
  return (
    <div className="max-w-[60%] w-full">
      <h2 className="text-[30px] my-[30px]">Explore the Place</h2>
      <Carousel className="w-[750px]">
        <CarouselContent className="w-full">
          {property.images.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className="w-full h-full md:basis-1/2 lg:basis-1/3"
              >
                <img
                  src={item.url}
                  className="h-[180px] rounded-[10px] object-cover object-center w-full"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
