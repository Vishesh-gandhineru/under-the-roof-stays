"use client"

import { create } from "zustand";

const getInitialSession = () => {   
        const getSessionFromLocalStorage = JSON.parse(localStorage.getItem('Sessiontoken'));
        return getSessionFromLocalStorage;  
};

export const useSession = create((set) => ({
    session: getInitialSession() || "",
    setSession: (data) => set(() => ({ session: data })),
}));



