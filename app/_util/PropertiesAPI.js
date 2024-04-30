import axios from 'axios';

export function FetchProperty (body) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property/search`;
    let config = {
        headers: {
            Authorization: `${process.env.AIP_ACCESS_TOKEN}`
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
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/property?slug=${slug}`;
    let config = {
        headers: {
            Authorization: `${process.env.AIP_ACCESS_TOKEN}`
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
            Authorization: `${process.env.AIP_ACCESS_TOKEN}`
        }
    }
    return axios.get(url ,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )    +
}