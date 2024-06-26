"use client"

import { PlusCircle , X } from "lucide-react";

import Link from "next/link";
import { useEffect, useState , useContext } from "react";
import AddItemToCompare from "../CustomUi/AddItemToCompare";
import { useCompare } from "@/app/context/useCompare";

export default function CompareSection({propertiesList}) {

 const {compareData ,setCompareData} = useCompare((state)=> ({
    compareData : state.compareData,
    setCompareData : state.setCompareData,
 }));
  // const [compareData, setCompareData] = useState([]); 
  // Create an array with 3 null elements to ensure we always have 3 columns
  const columns = [null, null, null];

  useEffect(() => {
    let compare = JSON.parse(sessionStorage.getItem('compare')) || [];
    setCompareData(compare);
  },[])

 const removeCompareItem = (index) => {
  let compare = JSON.parse(sessionStorage.getItem('compare')) || [];
    compare = compare.filter((_, i) => i !== index);
    sessionStorage.setItem('compare', JSON.stringify(compare));
    setCompareData([...compare]);

 }



  return (
    <section className="h-fit my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 relative">
        {columns.map((_, index) => {
          // If there is an item in the compare array for this index, render it
          if (compareData[index]) {
            const property = compareData[index];
            return (
              <div key={property.slug} className="border rounded-2xl h-fit flex flex-col gap-8 justify-center items-center relative pb-5">
                <div>
                <Link className="relative" href={`/properties/${property.slug}`}>
                <img src={property?.images[0]?.url} alt="property image" className="rounded-2xl h-[300px] w-screen object-cover" />
              </Link>
                </div>
                <div>
                <Link href={`/properties/${property.slug}`} className="text-2xl font-medium">{property.general.name}</Link>
                </div>
                <div className="rounded-full bg-white absolute p-2 top-3 right-3 cursor-pointer" onClick={()=>removeCompareItem(index)}><X /></div>
              </div>
            );
          }

          // Otherwise, render the default section
          return (
            <div key={index} className="border rounded-2xl p-8 flex justify-center items-center h-full">
              <AddItemToCompare propertiesList={propertiesList} />
            </div>
          );
        })}
      </div>
    </section>
  );
}