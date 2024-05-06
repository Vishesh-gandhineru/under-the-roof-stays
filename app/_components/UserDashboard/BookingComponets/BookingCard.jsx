
import { Badge } from "/@/app/_components/ui/badge"
import { CardContent , Card } from "@/@/app/_components/ui/card"



export default function BookingCard({completed = false , cancelled = false , upcoming = false}) {
  return (
    <Card className="w-full max-w-md">
      <div className="relative h-40 overflow-hidden rounded-t-lg">
        <img
          alt="Property Image"
          className="h-full w-full object-cover"
          height={160}
          src="https://via.placeholder.com/300"
          style={{
            aspectRatio: "400/160",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">Cozy Mountain Retreat</h3>
        </div>
      </div>
      <CardContent className="space-y-4 p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Check-in</p>
            <p className="text-base font-medium">June 1, 2023</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Check-out</p>
            <p className="text-base font-medium">June 5, 2023</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Guests</p>
            <p className="text-base font-medium">2</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total</p>
            <p className="text-base font-medium">$1,200</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {completed && <Badge variant="secondary">Booking Completed</Badge>}
          {cancelled && <Badge variant="destructive">Cancelled</Badge>}
          {upcoming && <Badge variant="default">Upcoming</Badge>}
        </div>
      </CardContent>
    </Card>
  )
}