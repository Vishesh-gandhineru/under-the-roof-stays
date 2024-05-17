"use client"

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/app/_components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/app/_components/ui/carousel"
import useSWR from "swr";
import { useEffect , useState } from "react";

export default function WeatherCard({property}) {
    
    
    const WeatherFetchUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${property.general.latitude}&lon=${property.general.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_AIP_KEY}`;
    
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    
    const { data, error, isLoading } = useSWR(WeatherFetchUrl,fetcher);
    const kelvin = data?.main.temp;
    const celcius = kelvin - 273;
    
    const [date, setDate] = useState({
        from: null,
        to: null
    });
    
    useEffect(() => {
        const getcheckinDate = localStorage.getItem("Checkin-data");
        const getcheckoutDate = localStorage.getItem("Checkout-data");
        if (getcheckinDate && getcheckoutDate) {
            setDate({ from: new Date(getcheckinDate), to: new Date(getcheckoutDate) });
        }
    }, []);
    
    
    // var time_difference = date?.to?.getTime() - date?.from?.getTime();  
    // var days_difference = time_difference / (1000 * 60 * 60 * 24);  
  


   return (
    <>
   {data && <section>

      <Card className="w-full max-w-md">
        <CardHeader className="flex items-center justify-between">
          <div className="space-y-1 flex flex-col justify-center items-center">
            <CardTitle>Today&apos;s Weather</CardTitle>
            <CardDescription>{property.general.city} , {property.general.state}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <ThermometerIcon className="w-6 h-6" />
            <span className="text-2xl font-bold">{parseFloat(celcius).toFixed(2)}°C</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} />
            <span className="text-xl font-medium">{data?.weather[0].description}</span>
          </div>
        </CardContent>
      </Card>
      <Carousel className="w-full max-w-md mt-6" opts={{
        align: "start",
      }}>
        <CarouselContent>
          <CarouselItem className="basis-1/2">
            <Card className="w-[200px]">
              <CardContent className="flex flex-col pt-6 items-center justify-center gap-2">
                <CalendarDaysIcon className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">Tomorrow</h4>
                  <p className="text-gray-500 dark:text-gray-400">High: 70° Low: 55°</p>
                  <p className="text-gray-500 dark:text-gray-400">Partly Cloudy</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <Card className="w-[200px]">
              <CardContent className="flex flex-col pt-6 items-center justify-center gap-2">
                <CalendarDaysIcon className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">Wednesday</h4>
                  <p className="text-gray-500 dark:text-gray-400">High: 68° Low: 52°</p>
                  <p className="text-gray-500 dark:text-gray-400">Mostly Sunny</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <Card className="w-[200px]">
              <CardContent className="flex flex-col pt-6 items-center justify-center gap-2">
                <CalendarDaysIcon className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">Thursday</h4>
                  <p className="text-gray-500 dark:text-gray-400">High: 72° Low: 57°</p>
                  <p className="text-gray-500 dark:text-gray-400">Partly Cloudy</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <Card className="w-[200px]">
              <CardContent className="flex flex-col pt-6 items-center justify-center gap-2">
                <CalendarDaysIcon className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">Friday</h4>
                  <p className="text-gray-500 dark:text-gray-400">High: 75° Low: 60°</p>
                  <p className="text-gray-500 dark:text-gray-400">Sunny</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <Card className="w-[200px]">
              <CardContent className="flex flex-col pt-6 items-center justify-center gap-2">
                <CalendarDaysIcon className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">Saturday</h4>
                  <p className="text-gray-500 dark:text-gray-400">High: 73° Low: 58°</p>
                  <p className="text-gray-500 dark:text-gray-400">Partly Sunny</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <Card className="w-[200px]">
              <CardContent className="flex flex-col pt-6 items-center justify-center gap-2">
                <CalendarDaysIcon className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">Sunday</h4>
                  <p className="text-gray-500 dark:text-gray-400">High: 70° Low: 55°</p>
                  <p className="text-gray-500 dark:text-gray-400">Mostly Cloudy</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <Card className="w-[200px]">
              <CardContent className="flex flex-col pt-6 items-center justify-center gap-2">
                <CalendarDaysIcon className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">Monday</h4>
                  <p className="text-gray-500 dark:text-gray-400">High: 68° Low: 52°</p>
                  <p className="text-gray-500 dark:text-gray-400">Partly Cloudy</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>}
    </>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function SignalLowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
    </svg>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function ThermometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}