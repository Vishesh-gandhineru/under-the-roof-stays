import Image from "next/image"
import { propertiesList } from "@/app/_util/Property_list/property_list";
import Link from "next/link";


export default function Heading ({title, location}){

    return( 
        <div className="flex mb-[97px] ml-[0vw]">
            <h2 className="text-5xl" >{title}</h2>
            <p className="bg-[#1f1f1f] text-[#dbdbdb] pt-[10px] px-[50px] ml-[153.6px] rounded-[30px]">{location}</p>
        </div>
    )
}