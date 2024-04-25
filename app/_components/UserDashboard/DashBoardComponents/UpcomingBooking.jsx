import React from 'react'

const UpcomingBooking = () => {
  return (
    <section>
        <h1 className="text-[50px] font-bold my-[20px]">Upcoming Booking</h1>
        <div className='grid grid-cols-4'>
        <div className='border rounded-[10px] p-8 w-fit bg-slate-100'>
             <p>Booking ID : #123456</p>
                <p>Check-in Date : 12-12-2024</p>
                <p>Booking Status : Upcoming</p>
        </div>
        <div className='border rounded-[10px] p-8 w-fit bg-slate-100'>
             <p>Booking ID : #123456</p>
                <p>Check-in Date : 12-12-2024</p>
                <p>Booking Status : Upcoming</p>
        </div>
        <div className='border rounded-[10px] p-8 w-fit bg-slate-100'>
             <p>Booking ID : #123456</p>
                <p>Check-in Date : 12-12-2024</p>
                <p>Booking Status : Upcoming</p>
        </div>
        <div className='border rounded-[10px] p-8 w-fit bg-slate-100'>
             <p>Booking ID : #123456</p>
                <p>Check-in Date : 12-12-2024</p>
                <p>Booking Status : Upcoming</p>
        </div>

        </div>
    </section>
  )
}

export default UpcomingBooking