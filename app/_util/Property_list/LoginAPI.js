import axios from "axios";
import { set } from "date-fns";

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
        }
        return response;
    })
    .catch((error) => {
        console.log(error);
    }
    )
}


export function postRegistertion (body) {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/register`;
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
