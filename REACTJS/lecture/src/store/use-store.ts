import { create } from "zustand";

interface Props {
  counter: number;
  
  increment: () => void;
  decrement: () => void;
  increByAmount: (value: number) => void;
}

export const useCounter = create<Props>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  increByAmount: (value) => {
    set((state) => ({ counter: state.counter + value }));
  },
}));
