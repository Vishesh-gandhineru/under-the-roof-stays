import { create } from "zustand";
import { persist , createJSONStorage  } from "zustand/middleware";

export const useAuthStore = create(persist(
    (set)=>({
        token : "",
        setToken : (token) => set((state)=>({token : token})),
    }), {
        name: "auth-storage" , storage: createJSONStorage(() => localStorage), }
))