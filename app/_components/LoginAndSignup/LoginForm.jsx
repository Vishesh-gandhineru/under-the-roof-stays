"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {  useState } from "react";
import { postLoginWithOTP } from "@/app/_util/Property_list/LoginAPI";
import OtpComponent from "./OTPComponent";


export default function LoginForm() {
    const [countryCode, setCountryCode] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading , setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const body= {
        "phone": phone,
        "countryCode":`+${countryCode}`,
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

  return (
    <section>
    {isLoading && <p>Loading...</p>}
    {!success ? <form className="flex justify-center items-center gap-3" onSubmit={handleSubmit}>
        <Input type="text" placeholder="country code" name="countryCode" className="w-[30%]" value={countryCode} onChange={handleOnChange} disabled={!isLoading ? false : true } />
        <Input type="number" placeholder="phone number" name="phone" className="w-[30%]" value={phone} onChange={handleOnChange} disabled={!isLoading ? false : true } />

      <Button type="submit">Login</Button>
    </form> :
    <OtpComponent body={body} />}
    </section>
  );
}


