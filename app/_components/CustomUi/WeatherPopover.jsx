"use client";

import { Button } from "@/app/_components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/app/_components/ui/popover";
import { useState } from "react";
import useSWR from "swr";

export default function WeatherPopover({ property }) {
  const WeatherFetchUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${property.general.latitude}&lon=${property.general.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_AIP_KEY}`;
  const [shouldFetch, setShouldFetch] = useState(false);
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    !shouldFetch ? null : WeatherFetchUrl,
    fetcher
  );

  function handleClick() {
    setShouldFetch(true);
  }


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="rounded-full absolute top-3 w-[65px] h-[65px] right-[85px]"
          size="icon"
          variant="outline"
          onClick={handleClick}
        >
          <WindIcon className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-6 space-y-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-4xl font-bold">{data?.main?.temp} Kelvin</div>
                <div className="text-gray-500 dark:text-gray-400">
                  {data?.weather[0].description}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <WindIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  {data?.wind.speed} mph
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ThermometerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  {data?.main.humidity}%
                </span>
              </div>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
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
  );
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
  );
}

function UmbrellaIcon(props) {
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
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  );
}

function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
