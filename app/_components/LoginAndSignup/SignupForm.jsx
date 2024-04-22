"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import  OtpComponent from "./OTPComponent";

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
  phoneNumber: z.number().max(10, {
    message: "Phone number must be 10 digits.",
  }),
  countryCode: z.number().max(2, {
    message: "Country code must be 2 digits.",
  }),
});

export default function SignupForm(){
 
    const [FormSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);    

     
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      countryCode: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
    <Form {...form}>
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

<FormField
          control={form.control}
          name="countryCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>countryCode</FormLabel>
              <FormControl>
                <Input type="number" placeholder="countryCode" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PhoneNumber</FormLabel>
              <FormControl>
                <Input type="number" placeholder="PhoneNumber" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <OtpComponent />

    </section>
  );
};


