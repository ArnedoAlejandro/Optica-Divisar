import { create } from "zustand";

const stateModal = create((set) => ({
  modal: false,
  changeStateModal: () => set((state) => ({ modal: !state.bears })),
}));
