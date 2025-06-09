// frontend/redux/slices/transactionSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
  notes?: string;
}

interface TransactionState {
  transactions: Transaction[];
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        tx => tx.id !== action.payload
      );
    },
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
  },
});

export const { addTransaction, deleteTransaction, setTransactions } =
  transactionSlice.actions;

export default transactionSlice.reducer;

