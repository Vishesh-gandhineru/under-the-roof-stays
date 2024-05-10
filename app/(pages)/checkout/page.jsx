
import { Label } from "@/app/_components/ui/label"
import { Input } from "@/app/_components/ui/input"
import { Textarea } from "@/app/_components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/app/_components/ui/select"
import { Button } from "@/app/_components/ui/button"
import { Separator } from "@/app/_components/ui/separator"
import SelectedProperty from "@/app/_components/CheckoutComponent/SelectedProperty"
import { Suspense } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">     
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 p-8">
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
            <div className="col-span-2 flex justify-end">
              <Button size="lg" type="submit">
                Place Order
              </Button>
            </div>
          </form>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$99.99</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$104.99</span>
            </div>
          </div>
          <Separator className="my-4" />
          <Suspense>
          <SelectedProperty />
          </Suspense>
        </div>
      </main>
     
    </div>
  )
}

