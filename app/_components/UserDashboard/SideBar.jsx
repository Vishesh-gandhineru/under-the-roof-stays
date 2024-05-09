"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const SideBar = () => {

    const pathname = usePathname();
return (
    <div className="flex h-full flex-col items-start justify-start gap-4 border-r bg-gray-100/40 p-4 dark:bg-gray-800/40">
        <nav className="grid w-full gap-2 text-sm font-medium">
            <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-100 hover:bg-gray-900 dark:text-gray-100  ${pathname === '/dashboard' ? 'bg-gray-900 text-white dark:text-gray-100' : ''}`}
                href="/dashboard"
            >                
                Dashboard
            </Link>
            <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-100 hover:bg-gray-900 dark:text-gray-100  ${pathname === '/dashboard/upcoming-booking' ? 'bg-gray-900 text-white dark:text-gray-100' : ''}`}
                href="/dashboard/upcoming-booking"
            >
                Upcoming Booking
            </Link>
            <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-100 hover:bg-gray-900 dark:text-gray-100  ${pathname === '/dashboard/past-booking' ? 'bg-gray-900 text-white dark:text-gray-100' : ''}`}
                href="/dashboard/past-booking"
            >
                Past Booking
            </Link>       
           
            <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-100 hover:bg-gray-900 dark:text-gray-100  ${pathname === '/dashboard/profile' ? 'bg-gray-900 text-white dark:text-gray-100' : ''}`}
                href="/dashboard/profile"
            >
                Profile
            </Link>
        </nav>
    </div>
)
}

export default SideBar