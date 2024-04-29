import Image from "next/image"
import { propertiesList } from "@/app/_util/Property_list/property_list";
import Link from "next/link";


export default function Heading ({title, location}){

    return( 
        <div className="flex justify-start items-center gap-12 mb-[40px]">
            <h2 className="text-5xl" >{title}</h2>
            <p className="bg-[#1f1f1f] text-[#dbdbdb] w-fit px-10 py-2 rounded-[30px]">{location}</p>
        </div>
    )
}