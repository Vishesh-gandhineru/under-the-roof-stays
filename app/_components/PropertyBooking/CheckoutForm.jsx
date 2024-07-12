"use client" 

import React, { useEffect , useState } from "react";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";


const CheckoutForm = ({userData , setUserData}) => {
 
   
    const handleFormChange = (e) => {
      setTimeout(()=> {
        setUserData({
          ...userData,
          [e.target.name] : e.target.value
      })
      } , [1000])  
    }

  return (
    <form className="grid grid-cols-2 gap-4">
    <div className="col-span-2 flex  gap-3">
      <div className="w-[10%]">
        <Label htmlFor="title">Title</Label>
        
      <select id="title" name="title" onChange={handleFormChange}>
  <option value="Male" disabled>Select title</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="family">Family</option>
</select>
      </div>
      <div className="w-[44%]">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Enter your name"  onChange={handleFormChange}/>
      </div>
      <div className="w-[44%]">
        <Label htmlFor="surName">surName</Label>
        <Input id="surName" name="surName" placeholder="Enter your surName" onChange={handleFormChange} />
      </div>
    </div>
    <div className="col-span-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" placeholder="Enter your email" type="email"  onChange={handleFormChange}/>
    </div>
    <div className="col-span-2">
      <div className=" space-y-4">
      
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="houseNumber">House Number / Door Number</Label>
        <Input id="houseNumber" name="houseNumber" placeholder="Door 250" onChange={handleFormChange}/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input id="city" name="city" placeholder="New York" onChange={handleFormChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <Input id="state" name="state" placeholder="NY" onChange={handleFormChange}/>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="street">Street</Label>
        <Input id="street" name="street" placeholder="street" onChange={handleFormChange}/>
      </div> 
      <div className="space-y-2">
        <Label htmlFor="zip">Zip Code</Label>
        <Input id="zip" name="zip" placeholder="10001"  onChange={handleFormChange}/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" placeholder="+1 (555) 555-5555" onChange={handleFormChange}/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="dob">DOB</Label>
        <Input id="dob" name="dob" type="date" placeholder="2000-05-29" onChange={handleFormChange}/>
      </div>
      </div>
      </div>
    </div>                           
  </form>
  )
}

export default CheckoutForm