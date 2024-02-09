import Image from "next/image"
import { propertiesList } from "@/app/_util/Property_list/property_list";
import Link from "next/link";
import { HomePageFilter } from "../FIlteringComponents/HomePageFilter";

export default function PropertiesGrid() {
  return (
    <div>
    <HomePageFilter/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {propertiesList.map((property) => (
            <Link key={property._ID} href={`/properties/${property.slug}`}>
            <div  className="border rounded-2xl p-4 border-gray text-black flex flex-col gap-5">
              <div>
                <img src={property.images.backgroundImg} alt="property image" className="rounded-2xl" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">{property.propertyTitle}</h1>
                <div>
                  {/* Add any additional content here */}
                </div>
                <h2 className="text-[#838383] text-lg">{`${property.location.city}, ${property.location.state}, ${property.location.country}`}</h2>
                <p>{property.description[0]}</p>
                <h4 className="text-lg font-extrabold">{`Rs ${property.numberofguest.price}/night`}</h4>
              </div>
            </div>           
            </Link>
          ))}
        </div>
        </div>
      );
}