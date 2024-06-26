"use server"

import axios from 'axios';


const config = {headers : {
    "X-API-Token" : `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
}}

export async function FetchProperty (body) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/search`;
   
    return await axios.post(url ,body,config)
    .then((response) => {
        return response.data.data.properties;
    })
    .catch((error) => {
        console.log(error);
    }
    )    
}


export async function FetchSingleProperty (slug) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/${slug}`;
   
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    
}


export async function FetchPropertyByLocation () {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/location`;
  
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    
}


export async function FetchPropertyForLocationBar (locationName) {
    
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/search/${locationName}`;
   
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}


export async function singlePropertyPolicies ({slug}) {

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/policy/${slug}`;
  
    return await axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    

}


export async function RatePlan (slug) {

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/rateplan/${slug}`;

    return await axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )

}

export async function FetchPropertyCalendar (slug) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/calendar/${slug}`;
  
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    
}