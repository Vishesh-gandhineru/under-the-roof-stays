
import { Separator } from "@/app/_components/ui/separator"

export default function PropertyDetailsBanner({property}) {

 const {minOccupancy , address , city , checkinFrom ,postalCode , countryCode , state ,maxOccupancy, maxAdults  , maxPets , checkoutFrom , checkoutUntil} = property;

  return (
    <div className="bg-muted rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mt-10">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <ClockIcon className="w-5 h-5" />
          <span>{minOccupancy} min occupancy</span>
        </div>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2 text-sm font-medium">
          <UsersIcon className="w-5 h-5" />
          <span>{maxOccupancy} max occupancy</span>
        </div>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2 text-sm font-medium">
          <UserIcon className="w-5 h-5" />
          <span>{maxAdults} max adults</span>
        </div>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2 text-sm font-medium">
          <PawPrintIcon className="w-5 h-5" />
          <span>{maxPets} max pets</span>
        </div>
      </div>
      <div className="flex flex-col sm:items-end gap-2 text-sm font-medium">
        <div className="flex items-center gap-2">
          <LocateIcon className="w-5 h-5" />
          <span>{address}, {city}, {state} {postalCode}, {countryCode}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          <span>Check-in from {checkinFrom}, check-out from {checkoutFrom} to {checkoutUntil}</span>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
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
    </svg>
  )
}


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function PawPrintIcon(props) {
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
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}