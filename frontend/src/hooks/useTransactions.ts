
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

const API_URL = 'http://localhost:5000/api/transactions'; // Adjust as needed

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Transaction[]>(API_URL);
      setTransactions(response.data);
    } catch (err) {
      setError('Failed to fetch transactions');
    } finally {
      setLoading(false);
    }
  };

  const addTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    try {
      const response = await axios.post<Transaction>(API_URL, transaction);
      setTransactions((prev) => [...prev, response.data]);
    } catch (err) {
      setError('Failed to add transaction');
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTransactions((prev) => prev.filter((tx) => tx.id !== id));
    } catch (err) {
      setError('Failed to delete transaction');
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    error,
    addTransaction,
    deleteTransaction,
    refresh: fetchTransactions,
  };
}
