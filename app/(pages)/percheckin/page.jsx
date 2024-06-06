
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/app/_components/ui/card"
import { Button } from "@/app/_components/ui/button"
import Link from "next/link";

export default function page({searchParams}) {

  const {authid} = searchParams;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://placehold.co/600x400"
            width={800}
            height={400}
            alt="Property Image"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">Welcome, John Doe</h1>
            <p className="text-gray-500 dark:text-gray-400">We're excited to have you stay with us!</p>
          </div>
          <Card>
            <CardContent className="grid gap-4 p-7">
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">Auth ID</div>
                <div className="font-medium">{authid}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">Booking ID</div>
                <div className="font-medium">ABC123</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">Guests</div>
                <div className="font-medium">2 adults</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">Check-in</div>
                <div className="font-medium">June 1, 2023</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">Check-out</div>
                <div className="font-medium">June 5, 2023</div>
              </div>
            </CardContent>
          </Card>
          <Button className="w-full" asChild><Link href="/percheckin/create-profile">Check In</Link></Button>
        </div>
      </div>
      <div className="mt-8 md:mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Property Addons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>BBQ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">Enjoy a delicious BBQ during your stay.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Meal Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">Choose from a variety of meal options.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pickup and Drop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">Get a convenient pickup and drop service.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Spa Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">Relax and unwind with our spa services.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Concierge Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">Let our concierge assist you with your needs.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fitness Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">Stay active during your stay at our fitness center.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}