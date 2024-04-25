import React from "react";

import { Button } from "../ui/button";
import UpcomingBooking from "./DashBoardComponents/UpcomingBooking";

const Dashboard = () => {
  return (
    <section className="p-8">
      <div className="Dashboard">
        <h1 className="text-[80px] font-bold mb-[20px]">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-100 p-8 col-span-2 rounded-[10px] flex flex-col gap-4">
            <h2 className="font-bold text-xl">Your Booking</h2>
            <p>
              Introducing Our Dynamic Orders Dashboard for Seamless Management
              and Insightful Analysis.
            </p>
            <Button>View All booking</Button>
          </div>
          <div className="bg-slate-100 p-8 rounded-[10px] flex flex-col gap-4">
            <h2 className="font-bold text-[15px]">Upcoming Booking</h2>
            <div>
                <p>Booking ID : #123456</p>
                <p>Check-in Date : 12-12-2024</p>
                <p>Booking Status : Pending</p>
            </div>
            <Button>View Booking</Button>
          </div>
          <div className="bg-slate-100 p-8 rounded-[10px] flex flex-col gap-4">
            <h2 className="font-bold text-[15px]">Profile</h2>
            <p>Name : Vishesh</p>
            <p>Address : Door 451 , India</p>
            <p>Phone : +91789456120</p>
          </div>
        </div>
        <UpcomingBooking />
      </div>
    </section>
  );
};

export default Dashboard;
