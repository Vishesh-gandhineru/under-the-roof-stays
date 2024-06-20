
import { Card, CardContent } from "@/app/_components/ui/card"

export default function NearByPlaces({ places }) {

 const metersTOkm = (meters) => {
    return (meters / 1000).toFixed(1);
 }

  return (
    <section>
        <h2 className="text-[30px] mt-[59.04px] mb-[14.88px]">Near by places</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {places.map((place, index) => {
            return (
                <Card key="index">
                <CardContent className="grid gap-2 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{place.type}</h3>
                    <div className="text-sm text-muted-foreground">{metersTOkm(place.distance.meters)} km</div>
                  </div>
                </CardContent>
              </Card>
            )
        })}
    </div>
    </section>
  )
}