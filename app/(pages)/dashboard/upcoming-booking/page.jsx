
import DashboardLayout from "@/app/_components/UserDashboard/DashboardLayout"
import BookingCard from "@/app/_components/UserDashboard/BookingComponets/BookingCard"


export default function upcomingPage() {


 
  return (
    <DashboardLayout>
      <div className="mb-[20px] text-5xl uppercase  tracking-widest ">
      Upcoming Bookings
    </div>

      <section className="grid grid-cols-3 gap-5">
      <BookingCard completed={true} cancelled={false} upcoming={false} />
      <BookingCard completed={true} cancelled={false} upcoming={false} />
      <BookingCard cancelled={true} completed={false} upcoming={false} />
     
    </section>
    </DashboardLayout>
  )
}
