"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect , useState } from 'react'
import { FetchSingleProperty } from '@/app/_util/PropertiesAPI';

const SelectedProperty = () => {

    const searchParams = useSearchParams()
 
    const propertyid = searchParams.get('propertyid')
    const propertySlug = searchParams.get('slug')
    const [Property , setProperty] = useState({})
    useEffect(() => {
        async function fetchProperty (){
            const property = await FetchSingleProperty(propertySlug)
            return setProperty(property.general)
        }

        fetchProperty();
    }, [])

  return (
    <div className="space-y-2">
    <div className="flex items-center gap-4">
      <div>
        <p className="font-medium">{Property.name}</p>       
        <p className="text-gray-500">{Property.address}</p>
        <p className="text-gray-500">{Property.city} ,{Property.region} , {Property.state}</p>
      </div>
      <p className="ml-auto font-medium">$999.99</p>
    </div>
  </div>
  )
}

export default SelectedProperty