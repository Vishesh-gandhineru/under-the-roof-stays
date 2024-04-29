import { propertiesList } from "@/app/_util/Property_list/property_list";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../ui/carousel"
  import Link from "next/link";
  import CompareButton from "../../CustomUi/CompareButtom";
  import { Toaster } from "../../ui/sonner";

export default function Properties_slider() {
    return(
        <div>        
       <Carousel>
  <CarouselContent>
    {propertiesList.map((property) => {
        return <CarouselItem key={property.propertyId} className="basis-1/3 p-4" >
            <section>
            <div  className="border rounded-2xl border-gray text-black flex flex-col gap-5 relative">
              <Link className="relative" href={`/properties/${property.slug}`}>
                <img src={property.images.backgroundImg} alt="property image" className="rounded-2xl" />
              </Link>
                <CompareButton property={property}/>
              <div className="flex flex-col gap-3 p-4">
                <Link href={`/properties/${property.slug}`} className="text-2xl font-medium">{property.propertyTitle}</Link>
                <div>
                  {/* Add any additional content here */}
                </div>
                <h2 className="text-[#838383] text-lg">{`${property.location.city}, ${property.location.state}, ${property.location.country}`}</h2>
                <p>{property.description[0]}</p>
                <h4 className="text-lg font-extrabold">{`Rs ${property.numberofguest.price}/night`}</h4>
              </div>
            </div>           
            </section>
        </CarouselItem>
    })}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    <Toaster />
        </div>
    )
}