
import axios from "axios";

const config = {headers : {
    "X-API-Token" : `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
}}


export   function postLoginWithOTP (body , setIsLoading , setError , setSuccess) {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/generate-otp/login`; 
     axios.post(url,body , config)
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

export  function verifyOTP (body , setOtpVerified){

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verify-otp/login`;
    axios.post(url,body ,config)
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


export  function postRegistertion (body, sessionId) {
    const registerUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/register`;
    axios.post(registerUrl, body, {
        headers: {
            'Authorization': sessionId,
            "X-API-Token" : `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
        }
    })
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
    } , config)
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

export  function verifyRegisterOTP (OtpBody , setOtpVerified , FormData){

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verify-otp/register`;
    axios.post(url, {
        "phone": OtpBody.phoneNumber,
        "countryCode": OtpBody.countryCode,
        "otp": OtpBody.otp
    }, config)
    .then((response) => {
        console.log(response);
        if (response.status === 200){
            localStorage.setItem('Sessiontoken', JSON.stringify(response.data.data));
    setOtpVerified(true);
    postRegistertion ({
        "phone": OtpBody.phoneNumber,
        "countryCode": OtpBody.countryCode,
        "email": FormData.email,
        "firstName": FormData.firstName,
        "lastName": FormData.lastName
    } , response.data.data.sessionId);
        }
        return response;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}


export  function logout (session) {
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


