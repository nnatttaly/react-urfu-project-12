import { create } from "zustand";

export const useChatStore = create((set) => ({
  currentChannelId: null,
  openedModalId: null,
  setCurrentChannelId: (currentChannelId) => set({ currentChannelId }),
  setOpenedModalId: (openedModalId) => set({ openedModalId }),
}));
