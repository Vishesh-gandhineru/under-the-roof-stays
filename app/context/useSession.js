
import { create } from "zustand";


const getSessionFromLocalStorage = JSON.parse(localStorage.getItem('Sessiontoken'));

export const useSession = create((set) => ({
    session :  getSessionFromLocalStorage || false , 
    setSession : (data) => set(() => ({ session: data })),  
}));

