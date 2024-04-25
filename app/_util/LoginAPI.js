import axios from "axios";
import { useSession } from "../context/useCompare";
import { redirect } from 'next/navigation'

export function postLoginWithOTP (body , setIsLoading , setError , setSuccess) {
    setIsLoading(true);
    const url = `http://3.107.33.150/api/v1/user/generate-otp/login`; 
    axios.post(url, body)
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

export function verifyOTP (body , setOtpVerified){

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verify-otp/login`;
    axios.post(url, body)
    .then((response) => {
        console.log(response);
        if (response.status === 200){
     setOtpVerified(true);
     localStorage.setItem('Sessiontoken', response.data.data.sessionId);
     window.location.reload();
    }
        return response;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}


export function postRegistertion (body) {
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

export function GenerateOtpForResgistrastion (body , setIsLoading , setError , setSuccess) {
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

export function verifyRegisterOTP (OtpBody , setOtpVerified , FormData){

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


export function logout (session) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/logout`;
     axios.post(url,{},{ 
        headers: {
            'Authorization': session
        }
     } )
     .then (response => {
         console.log(response);
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