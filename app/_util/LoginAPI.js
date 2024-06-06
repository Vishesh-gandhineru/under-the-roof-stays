"use server"

import axios from "axios";

const config = {headers : {
    "X-API-Token" : `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
}}


export  async function postLoginWithOTP (body , setIsLoading , setError , setSuccess) {
    setIsLoading(true);
    const url = `http://3.107.33.150/api/v1/user/generate-otp/login`; 
     axios.post(url,body , header)
    .then((response) => {
        console.log(response);
        setIsLoading(false);

        if(response.status === 200){
            setSuccess(true);
        }
        return response;
    })
    .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(true);
    }
    )
}

export async function verifyOTP (body , setOtpVerified){

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verify-otp/login`;
    axios.post(url,body ,header)
    .then((response) => {  
        if (response.status === 200){
     setOtpVerified(true);
     localStorage.setItem('Sessiontoken', JSON.stringify(response.data.data));

     window.location.reload();
    }
        return response;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}


export async function postRegistertion (body) {
    const registerUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/register`;
    axios.post(url, body)
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}

export async function GenerateOtpForResgistrastion (body , setIsLoading , setError , setSuccess) {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/generate-otp/register`; 
    axios.post(url, {
        "phone": body.phoneNumber,
        "countryCode": body.countryCode
    })
    .then((response) => {        
        console.log(response);
        setIsLoading(false);
        if(response.status === 200){
            setSuccess(true);
        }
        return response;
    })
    .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(true);
    }
    )
}

export async function verifyRegisterOTP (OtpBody , setOtpVerified , FormData){

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verify-otp/register`;
    axios.post(url, {
        "phone": OtpBody.phoneNumber,
        "countryCode": OtpBody.countryCode,
        "otp": OtpBody.otp
    })
    .then((response) => {
        console.log(response);
        if (response.status === 200){
    localStorage.setItem('Sessiontoken', response.data.sessionId);
    setOtpVerified(true);
    postRegistertion (FormData);
        }
        return response;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}


export async function logout (session) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/logout`;
     axios.post(url,{},{ 
        headers: {
            'Authorization': session
        }
     } )
     .then (response => {
         console.log("logout response" ,response);
         if(response.status === 200){
            localStorage.removeItem('Sessiontoken');
            window.location.reload();
         }
         return response;
     })
     .catch(error => {
            console.log(error);
     }
        )
}