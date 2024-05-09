"use client"

import { create } from "zustand";

const getSulgFromLocalStorage = localStorage.getItem("SearchSlug");
const getLocationSelectedFromLocalStorage = localStorage.getItem("location");


export const useSearchSlug = create((set) => ({
    SearchSlug : getSulgFromLocalStorage || "", 
    setSearchSlug : (data) => set(() => ({ SearchSlug: data })),  
    LocationSelected : getLocationSelectedFromLocalStorage || "",
    setLocationSelected : (data) => set(() => ({ LocationSelected: data })),
}));