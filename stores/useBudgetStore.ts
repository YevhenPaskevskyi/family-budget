import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type BudgetStore = {
  balance: number;
  income: number;
  expense: number;
  addIncome: (amount: number) => void;
  addExpense: (amount: number) => void;
};

const storage =
  Platform.OS === 'web'
    ? createJSONStorage(() => localStorage)
    : createJSONStorage(() => AsyncStorage);

export const useBudgetStore = create<BudgetStore>()(
  persist(
    (set) => ({
      balance: 0,
      income: 0,
      expense: 0,
      addIncome: (amount) =>
        set((state) => ({
          income: state.income + amount,
          balance: state.balance + amount,
        })),
      addExpense: (amount) =>
        set((state) => ({
          expense: state.expense + amount,
          balance: state.balance - amount,
        })),
    }),
    {
      name: 'budget-storage',
      storage,
    }
  )
);