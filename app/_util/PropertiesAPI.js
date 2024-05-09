import axios from 'axios';
import { set } from 'date-fns';

export function FetchProperty (body) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/search`;
    let config = {
        headers: {
            Authorization: `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`
        }
    }
    return axios.post(url ,body,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    
}


export function FetchSingleProperty (slug) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/${slug}`;
    let config = {
        headers: {
            Authorization: `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`
        }
    }
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    
}


export function FetchPropertyByLocation () {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/location`;
    let config = {
        headers: {
            Authorization: `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`
        }
    }
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    
}


export function FetchPropertyForLocationBar (locationName) {
    
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/search/${locationName}`;
    let config = {
        headers: {
            Authorization: `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`
        }
    }
 
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}