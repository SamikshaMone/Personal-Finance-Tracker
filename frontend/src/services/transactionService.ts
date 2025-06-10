// frontend/src/services/transactionService.ts

import api from './api';
import type { Transaction } from '../redux/slices/transactionSlice';

export async function fetchTransactions(): Promise<Transaction[]> {
  const { data } = await api.get<Transaction[]>('/transactions');
  return data;
}

export async function addTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
  const { data } = await api.post<Transaction>('/transactions', transaction);
  return data;
}

export async function updateTransaction(id: string, transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
  const { data } = await api.put<Transaction>(`/transactions/${id}`, transaction);
  return data;
}

export async function deleteTransaction(id: string): Promise<void> {
  await api.delete(`/transactions/${id}`);
}

