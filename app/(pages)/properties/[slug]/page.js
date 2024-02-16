
import Image from "next/image";
import Heading from "@/app/_components/PropertiesComponents/Heading_property";
import { HeroBanner } from "@/app/_components/PropertiesComponents/Hero_banner";
import { LeftSection } from "@/app/_components/PropertiesComponents/Left_section";
import { getAllProperty } from "@/app/_api/getAllProperty";

// import
export default async function PropertiesSinglePage({ params }) {

  const propertiesList = await getAllProperty();
  const property = propertiesList.find(
    (property) => property.slug === params.slug
  );
  {
    console.log(propertiesList);
  }
  return (
    <main className="m-8 flex items-center justify-center">
      <div className="flex-col justify-center items-center  mt-[20vh]">
        <Heading
          title={property.propertyTitle}
          location={property.location.city}
        />
        <HeroBanner property={property} />
        <div className="flex justify-between mt-[5vh]">
      
         <LeftSection property={property}/>
          <div>Right</div>
        </div>
      </div>
    </main>
  );
}
