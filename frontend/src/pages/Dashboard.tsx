import React from 'react';
import { useTransactions } from '../hooks/useTransactions';

const Dashboard: React.FC = () => {
  const { transactions } = useTransactions();

  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Total Income: ₹{income}</p>
      <p>Total Expenses: ₹{expense}</p>
      <p>Balance: ₹{income - expense}</p>
    </div>
  );
};

export default Dashboard;

