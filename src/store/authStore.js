import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      username: null,
      setAuthData: (token, username) => set({ token, username }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
