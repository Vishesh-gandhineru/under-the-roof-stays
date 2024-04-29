
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import Dashboard from "@/app/_components/UserDashboard/DashBoardComponents/Dashboard";
import Profile from "@/app/_components/UserDashboard/ProfileComponents/Profile";
import LogoutButton from "@/app/_components/LoginAndSignup/LogoutButton";
import DashboardNav from "@/app/_components/UserDashboard/DashboardNav";



function dashboard() {

  return (
    <main>
      <DashboardNav links={[{
        href: "/dashboard",
        text: "Dashboard",
        icon : "Dashboard"      
      },
      {
        href: "/Profile",
        text: "Profile",
        icon : "User"      
      },
      {
        href: "/Booking",
        text: "Booking",
        icon : "Booking"      
      }]} />
      <article>
        <section>
          <Tabs
            defaultValue="dashboard"
            className="w-full flex h-screen"
            orientation="vertical"
          >
            <TabsList className="flex flex-col px-5 py-11 items-start justify-start gap-4 bg-[#1f2937] h-[initial] rounded-none">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="Bookings">Bookings</TabsTrigger>
              <TabsTrigger value="WishList">WishList</TabsTrigger>
              <LogoutButton />
            </TabsList>
            <TabsContent value="dashboard">
             <Dashboard />
            </TabsContent>
            <TabsContent value="profile">
             <Profile />
            </TabsContent>
            <TabsContent value="Bookings">
             <Profile />
            </TabsContent>
            <TabsContent value="WishList">
             <Profile />
            </TabsContent>
          </Tabs>
        </section>
      </article>
    </main>
  );
}

export default dashboard;
