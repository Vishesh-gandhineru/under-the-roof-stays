"use server"

import axios from "axios";

export async function CheckAvailbity (body , sessionId) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/availablity`;
    const config = {headers : {
        "X-API-Token" : `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
        "Authorization" : sessionId
    }}
    return await axios.post(url ,body,config)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    }
    )

}

export async function CreateBooking(sessionId , bookingData) {
 
    console.log("create booking is called")

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/create`;
    const config = {headers : {
        "X-API-Token" : `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
        "Authorization" : sessionId
    }}
    return await axios.post(url,bookingData,config)
    .then((response) => {
        console.log(response.data , "checkout response");
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
}