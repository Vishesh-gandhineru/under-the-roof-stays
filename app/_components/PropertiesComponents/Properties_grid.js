import Image from "next/image"
import { propertiesList } from "@/app/_util/Property_list/property_list";
import Link from "next/link";
import { HomePageFilter } from "../FIlteringComponents/HomeFilter/HomePageFilter";
import { Columns3 } from 'lucide-react';
import CustomTooltip from "../CustomUi/Customtooltips";

export default function PropertiesGrid() {
  return (
    <div>
    <HomePageFilter/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 relative">
          {propertiesList.map((property) => (
            <section key={property.propertyId}>
            <div  className="border rounded-2xl border-gray text-black flex flex-col gap-5 relative">
              <Link className="relative" href={`/properties/${property.slug}`}>
                <img src={property.images.backgroundImg} alt="property image" className="rounded-2xl" />
              </Link>
                <span className="bg-white px-5 pt-5 pb-3 rounded-full absolute top-3 right-3">
               <CustomTooltip content="Compare" tooltipIcon={<Columns3/>}/>
                </span>
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
          ))}
        </div>
        </div>
      );
}