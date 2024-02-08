import { propertiesList } from "@/app/_util/Property_list/property_list"
import Image from 'next/image';


export default function PropertiesSinglePage ({ params }) {

    const property = propertiesList.find((property) => property.slug === params.slug)

    return (
        <main className="m-8">
            <div className="h-20 m-8">
                <h1 className="text-red-800 text-5xl font-bold uppercase text-center">Property single page</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
            <img src={property.images.backgroundImg} alt="property image" className="rounded-2xl w-100 h-[300px] object-cover" />
            <button className="bg-red-200 w-full mt-3 px-8 py-3 rounded-md">Book now</button>            
            </div>
            <div>
            <h1 className="text-2xl font-medium">{property.propertyTitle}</h1> 
            <h2 className="text-[#838383] text-lg">{`${property.location.city}, ${property.location.state}, ${property.location.country}`}</h2>  
            <h1 className="text-2xl font-medium">{property.description}</h1>              


            </div>
            </div>
        </main>
    )
}