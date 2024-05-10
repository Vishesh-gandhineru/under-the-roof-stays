"use client"

import { create } from "zustand";

// const getSulgFromLocalStorage = localStorage.getItem("SearchSlug");
// const getLocationSelectedFromLocalStorage = localStorage.getItem("location") ;

function getInitialSearchSlug() {
    let SearchSlugFromLocalStorage = "";
    if (typeof localStorage !== "undefined") {
        const getSearchSlugFromLocalStorage = localStorage.getItem("SearchSlug");
        SearchSlugFromLocalStorage = getSearchSlugFromLocalStorage;
    }
    return SearchSlugFromLocalStorage;
}

function getInitialLocationSelected() {
    let LocationSelectedFromLocalStorage = "";
    if (typeof localStorage !== "undefined") {
        const getLocationSelectedFromLocalStorage = localStorage.getItem("location");
        LocationSelectedFromLocalStorage = getLocationSelectedFromLocalStorage;
    }
    return LocationSelectedFromLocalStorage;

}

export const useSearchSlug = create((set) => ({
    SearchSlug : getInitialSearchSlug() || "", 
    setSearchSlug : (data) => set(() => ({ SearchSlug: data })),  
    LocationSelected : getInitialLocationSelected() || "",
    setLocationSelected : (data) => set(() => ({ LocationSelected: data })),
}));