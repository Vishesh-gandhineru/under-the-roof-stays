import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";

import Dashboard from "@/app/_components/UserDashboard/Dashboard";
import Profile from "@/app/_components/UserDashboard/Profile";

function dashboard() {
  return (
    <main>
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
            </TabsList>
            <TabsContent value="dashboard">
             <Dashboard />
            </TabsContent>
            <TabsContent value="profile">
             <Profile />
            </TabsContent>
          </Tabs>
        </section>
      </article>
    </main>
  );
}

export default dashboard;
