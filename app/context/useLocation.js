"use client"
import { create } from "zustand";



export function getLocation() {
    const location = [];


}

export const useLocation = create((set) => ({
    location : "", 
    setLocation : (data) => set(() => ({ location: data })),  
}));