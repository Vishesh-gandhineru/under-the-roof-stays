
import Heading from "@/app/_components/PropertiesComponents/SinglePropertyPage/Heading_property";
import { HeroBanner } from "@/app/_components/PropertiesComponents/SinglePropertyPage/Hero_banner";
import { LeftSection } from "@/app/_components/PropertiesComponents/SinglePropertyPage/Left_section";
import { FetchSingleProperty } from "@/app/_util/PropertiesAPI";
import BookingForm from "@/app/_components/PropertyBooking/BookingForm";
import WeatherCard from "@/app/_components/WeatherComponent/WeatherCard";

// import
export default async function PropertiesSinglePage({ params }) {
 
   const SingleProperty = await FetchSingleProperty(params.slug);

   
   
  
  return (
    <main className="max-w-[1340px] w-full m-auto my-[50px]">
      <div className="">
        <Heading
          title={SingleProperty.general.name}
          location={SingleProperty.general.city}
        />
        <HeroBanner property={SingleProperty} />
        <div className="flex justify-between mt-[5vh]">
      
         <LeftSection property={SingleProperty}/>
          <div className="flex flex-col gap-4">
            <BookingForm propertyId={SingleProperty.propertyId} slug={params.slug}  />
            <WeatherCard property={SingleProperty}/>
          </div>
        </div>
      </div>
    </main>
  );
}
