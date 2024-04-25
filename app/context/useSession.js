"use client"
import { create } from "zustand";

export const useSession = create((set) => ({
    session :  localStorage.getItem('Sessiontoken') || false , 
    setSession : (data) => set(() => ({ session: data })),  
}));