import DashboardLayout from "@/app/_components/UserDashboard/DashboardLayout"
import BookingCard from "@/app/_components/UserDashboard/BookingComponets/BookingCard"
const pastBooking = () => {
  return (
    <DashboardLayout>
      <div className="mb-[20px] text-5xl uppercase  tracking-widest ">
      Past Bookings
    </div>
      <section className="grid grid-cols-3 gap-5">
        <BookingCard completed={true} cancelled={false} upcoming={false} />
        <BookingCard completed={true} cancelled={false} upcoming={false} />
        <BookingCard cancelled={true} completed={false} upcoming={false} />
        <BookingCard cancelled={true} completed={false} upcoming={false} />
        <BookingCard cancelled={true} completed={false} upcoming={false} />
        <BookingCard cancelled={true} completed={false} upcoming={false} />
       
      </section>
    </DashboardLayout>
  )
}

export default pastBooking