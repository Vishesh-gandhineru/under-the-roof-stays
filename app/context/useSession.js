"use client"

import { create } from "zustand";

const getInitialSession = () => {   
    let sessionFromLocalStorage = "";
    if (typeof localStorage !== "undefined") {
        const getSessionFromLocalStorage = JSON.parse(localStorage.getItem('Sessiontoken'));
        sessionFromLocalStorage = getSessionFromLocalStorage;
    }
    return sessionFromLocalStorage;  
};

export const useSession = create((set) => ({
    session: getInitialSession() || "",
    setSession: (data) => set(() => ({ session: data })),
}));



