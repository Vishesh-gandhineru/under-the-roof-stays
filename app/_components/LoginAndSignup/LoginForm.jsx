"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {  useState } from "react";
import { postLoginWithOTP } from "@/app/_util/LoginAPI";
import OtpComponent from "./OTPComponent";
import { PhoneWithCountryCode } from "./PhoneWithCountryCode";
import { verifyOTP } from "@/app/_util/LoginAPI";



export default function LoginForm() {
    const [countryCode, setCountryCode] = useState("+91");
    const [phone, setPhone] = useState("");
    const [isLoading , setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [OtpVerified , setOtpVerified] = useState(false);

    const body= {
        "phone": phone,
        "countryCode":countryCode,
        "role": "user"
    }
 function handleSubmit(e) {
    e.preventDefault();
    console.log(body);
    postLoginWithOTP(body , setIsLoading , setError , setSuccess);
    }



function handleOnChange(e){    
    if (e.target.name === "countryCode"){
        setCountryCode(e.target.value);
        return;
    }
    if(e.target.name === "phone"){
        setPhone(e.target.value);
        return;
    }
}

function OtpSubmit(data) {
  const OtpBody = {...body , "otp": data.pin}
  console.log(OtpBody);
  verifyOTP(OtpBody , setOtpVerified);
}


  return (
    <section>
    {isLoading && <p>Loading...</p>}
    {!success ? <form className="flex justify-center items-center gap-3" onSubmit={handleSubmit}>
      <div className="flex">
        <PhoneWithCountryCode  setCountryCode={setCountryCode}/>
        <Input type="number" placeholder="phone number" name="phone" className="w-[100%] rounded-l-none  " value={phone} onChange={handleOnChange} disabled={!isLoading ? false : true } />
      </div>

      <Button type="submit">Login</Button>
    </form> : 
    <OtpComponent body={body} OtpSubmit={OtpSubmit} OtpVerified={OtpVerified} />}
  
    </section>
  );
}


