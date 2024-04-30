"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Link from "next/link";
import CompareButton from "../../CustomUi/CompareButtom";

export default function Properties_slider({ propertiesList }) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {propertiesList.map((property) => {
            return (
              <CarouselItem key={property.propertyId} className="basis-1/3 p-4">
                <section key={property._id}>
                  <div className="border rounded-2xl border-gray text-black flex flex-col gap-5 relative">
                    <Link
                      className="relative"
                      href={`/properties/${property.slug}`}
                    >
                      <img
                        src={
                          property.images[0]
                            ? property.images[0].url
                            : "https://via.placeholder.com/300"
                        }
                        alt="property image"
                        className="rounded-2xl w-full h-[300px] object-cover object-center"
                      />
                    </Link>
                    <CompareButton property={property} />
                    <div className="flex flex-col gap-3 p-4">
                      <Link
                        href={`/properties/${property.slug}`}
                        className="text-2xl font-medium"
                      >
                        {property.general.name}
                      </Link>
                      <div>{/* Add any additional content here */}</div>
                      <h2 className="text-[#838383] text-lg">{`${property.general.city}, ${property.general.state}, ${property.general.region}`}</h2>
                      {/* <p>{property.descriptions[0].text}</p> */}

                      {/* <h4 className="text-lg font-extrabold">{`Rs ${property.numberofguest.price}/night`}</h4> */}
                    </div>
                  </div>
                </section>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
