"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PhoneWithCountryCode } from "./PhoneWithCountryCode";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import OtpComponent from "./OTPComponent";
import { GenerateOtpForResgistrastion } from "@/app/_util/LoginAPI";
import { verifyRegisterOTP } from "@/app/_util/LoginAPI";
import {postRegistertion} from "@/app/_util/LoginAPI";



const schema = z.object({
  email: z.string().email(),
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .max(50, {
      message: "First name Max 50 characters.",
    }),
  lastName: z
    .string()
    .min(1, {
      message: "lastname must be at least 1 characters.",
    })
    .max(50),
  phoneNumber: z.string().max(10, {
    message: "Phone number must be 10 digits.",
  }),
});

export default function SignupForm() {

const [error, setError] = useState(false);

  const [FormSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [OtpVerified, setOtpVerified] = useState(false);
  const [success, setSuccess] = useState(false);
  const [FormData , setFormData] = useState({});

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data) => {
    const body = { ...data, countryCode: countryCode };    
      GenerateOtpForResgistrastion(body, setIsLoading, setError, setSuccess); 
      setFormData(body);    
  };

  function OtpSubmit(data) {
    
    const OtpBody = { ...FormData, otp: data.pin };
    console.log(OtpBody);
    verifyRegisterOTP(OtpBody, setOtpVerified , FormData);
  }

  return (
    <section>
      {isLoading && <p>Loading...</p>}
     {!success ? <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>firstName</FormLabel>
                <FormControl>
                  <Input placeholder="firstName" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>lastName</FormLabel>
                <FormControl>
                  <Input placeholder="lastName" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-end">
            <PhoneWithCountryCode setCountryCode={setCountryCode} />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form> :
      <OtpComponent OtpSubmit={OtpSubmit} OtpVerified={OtpVerified} />}
    </section>
  );
}
