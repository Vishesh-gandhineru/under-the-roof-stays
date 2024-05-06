
import DashboardLayout from "@/app/_components/UserDashboard/DashboardLayout"
// import BookingCard from "@/components/BookingComponets/BookingCard"
import BookingCard from "@/app/_components/UserDashboard/BookingComponets/BookingCard"
// import { SimpleBarChart } from "@/components/AnalyticsComponents/BarChart"
// import SimpleAreaChart from "@/components/AnalyticsComponents/SimpleAreaChart"

export default function dashboard() {


  const monthSale = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    { 
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ]



  return (
    <DashboardLayout>
      <div className="mb-[20px] text-5xl uppercase  tracking-widest ">
      Dashboard
    </div>
      <div className="my-10 text-2xl uppercase tracking-widest ">
      Upcoming Booking
    </div>
      <section className="grid grid-cols-3 gap-5">
      <BookingCard completed={true} cancelled={false} upcoming={false} />
      <BookingCard completed={true} cancelled={false} upcoming={false} />
      <BookingCard cancelled={true} completed={false} upcoming={false} />
     
    </section>
    </DashboardLayout>
  )
}
