
import { Label } from "@/app/_components/ui/label"
import { Input } from "@/app/_components/ui/input"
import { Textarea } from "@/app/_components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/app/_components/ui/select"
import { Button } from "@/app/_components/ui/button"
import { Separator } from "@/app/_components/ui/separator"
import { FetchSingleProperty } from "@/app/_util/PropertiesAPI"
import { CreateBooking } from "@/app/_util/BookingAPI"
import CreateBookingBtn from "@/app/_components/CustomUi/CreateBookingBtn"
import { PropertyRules } from "@/app/_components/PropertiesComponents/SinglePropertyPage/Property_rules"

export default async  function CheckoutPage({searchParams}) {
 
  const {slug , propertyId , checkIn , checkOut , adults , children , pets , ratePlanId , ratePlanName} = searchParams;

  const property =  await FetchSingleProperty(slug);

  const bookingData = {    
      "propertyId": propertyId, //required
      "slug": slug, //required
      "checkIn": checkIn,  //required format = YYYY-MM-DD
      "checkOut": checkOut,  //required format = YYYY-MM-DD
      "adults": Number(adults),  //required format = int
      "children": Number(children), //optional or send 0 format = int
      "babies": 0, //optional or send 0 format = int
      "pets": Number(pets), //optional or send 0 format = int
      "currency": "INR",
      "bookerDetails": {
          "firstName": "Vishesh Jhadi",
          "title": "Mr.",
          "phone": "6281510860",
          "email": "visheshjhadi@gmail.com"
          //"countryCode": ""
          //"zipCode": ""
          //"dob": ""
          //"surName": ""
          //"address": ""
      },
      "totalPrice": Number(property?.rates[0]?.baseAmount), // in rupees
      "rateplanId": ratePlanId
  }

  return (
    <div className="flex flex-col min-h-screen">     
     {!slug ? <div>
        <h1 className="text-2xl font-bold text-center mt-8">No property for checkout</h1>
     </div> : <main className="flex-1 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your address" />
            </div>
            <div>
              <Label htmlFor="payment-method">Payment Method</Label>
              <Select id="payment-method">
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="apple-pay">Apple Pay</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CreateBookingBtn bookingData={bookingData} />
          </form>
          <PropertyRules property={property} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Check-In</span>
              <span>{checkIn}</span>
            </div>
            <div className="flex justify-between">
              <span>Check-Out</span>
              <span>{checkOut}</span>
            </div>
            <div className="flex justify-between">
              <div>

              <span className="font-bold">Guest</span>
              </div>
              <div>
              <div className="font-bold">Adults : <span className=" font-normal">{adults}</span> </div>
              <div className="font-bold"> children: <span className=" font-normal">{children}</span> </div>
              <div className="font-bold">pets : <span className=" font-normal">{pets}</span></div>

              </div>
            </div>
          </div>
          <Separator className="my-4" />          
          <div className="space-y-2">
  <div className="flex items-center gap-4">
      <div>
        <p className="font-medium">{property.general.name}</p>       
        <p className="text-gray-500">{property.general.address}</p>
        <p className="text-gray-500">{property.general.city} ,{property.general.region} , {property.general.state}</p>
      </div>
      <p className="ml-auto font-medium">{property.rates[0]?.baseAmount} {property.rates[0]?.currency}</p>
    </div>
  </div>
        </div>
      </main>}
     
    </div>
  )
}

