
import Link from "next/link";
import CompareButton from "../CustomUi/CompareButtom";
import { FetchProperty } from "@/app/_util/PropertiesAPI";
import WeatherPopover from "../WeatherComponent/WeatherPopover";
import PropertyRate from "../CustomUi/PropertyRate";


export default async function PropertiesGrid({body = {skip: 0,
  limit: 9}}) {
  
  const propertiesListAPI = await FetchProperty(body);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 relative">
        {propertiesListAPI?.map((property) => (
          <section key={property._id}>
            <div className="border rounded-2xl border-gray text-black flex flex-col gap-5 relative">
              <Link className="relative" href={`/properties/${property.slug}`}>
                <img
                  src={property.images[0]? property.images[0].url : "https://via.placeholder.com/300"}
                  alt="property image"
                  className="rounded-2xl w-full h-[300px] object-cover object-center"
                />
              </Link>
              <WeatherPopover property={property} />
              <CompareButton property={property} />
              <div className="flex flex-col gap-3 p-4">
                <Link
                  href={`/properties/${property.slug}`}
                  className="text-2xl font-medium"
                >
                  {property.general.name}
                </Link>
                <h2>Max Occupancy: {property.general.maxOccupancy} , Max pets : {property.general.maxPets == 0 ? "pets not Allowed" :  property.general.maxPets}</h2>
                <h2 className="text-[#838383] text-lg">{`${property.general.city}, ${property.general.state}, ${property.general.region}`}</h2>
             
              <PropertyRate property={property} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
