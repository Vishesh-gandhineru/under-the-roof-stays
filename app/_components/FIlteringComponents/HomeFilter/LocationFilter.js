"use client"
import { getAllProperty } from "@/app/_api/getAllProperty"
import LocationInput from "./LocationInput";
import AutoComplete from "./LocationInput";
import { useState } from "react";

export default  function LocationFilter() {

    // const locationList = await getAllProperty();     

    // const location = locationList.map((location) => {
    //     return location.location;    
    // });

    // function getUniqueListBy(arr, type) {
    //     return arr.map((item) => {
    //         return item[type];        
    //     })
    // }

    // const country = getUniqueListBy(location, 'country');
    // const city = getUniqueListBy(location, 'city');
    // const state = getUniqueListBy(location, 'state');
    // const taluka = getUniqueListBy(location, 'taluka');

    const FRAMEWORKS = [
        {
          value: "next.js",
          label: "Next.js",
        },
        {
          value: "sveltekit",
          label: "SvelteKit",
        },
        {
          value: "nuxt.js",
          label: "Nuxt.js",
        },
        {
          value: "remix",
          label: "Remix",
        },
        {
          value: "astro",
          label: "Astro",
        },
        {
          value: "wordpress",
          label: "WordPress",
        },
        {
          value: "express.js",
          label: "Express.js",
        },
        {
          value: "nest.js",
          label: "Nest.js",
        },
      ]

      const [isLoading, setLoading] = useState(false)
  const [isDisabled, setDisbled] = useState(false)
  const [value, setValue] = useState()
   
    return (     
        // <LocationInput country={country} city={city} state={state} taluka={taluka}/>
        <AutoComplete options={FRAMEWORKS}
        emptyMessage="No resulsts."
        placeholder="Find something"        
        onValueChange={setValue}
         />
    )   
}