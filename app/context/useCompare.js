// Code: Zustand store for compare data and session data
"use client"
import { create } from "zustand";

export const useCompare = create((set) => ({
    compareData :  [] , 
    setCompareData : (data) => set(() => ({ compareData: data })),
}));

