"use client";

import { useSession } from "@/app/context/useSession";

import React from "react";

const UserData = () => {
    const session = useSession(state => state.session);
  return (
    <div>
      <h2>First Name : {session.firstName}</h2>
      <h2>Last Name : {session.lastName}</h2>
      <h2>phone :{session.countryCode}{session.phone}</h2>
    </div>
  );
};

export default UserData;
