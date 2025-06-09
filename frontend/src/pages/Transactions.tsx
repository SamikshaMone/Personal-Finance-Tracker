import React from 'react';
import { useTransactions } from '../hooks/useTransactions';

const Transactions: React.FC = () => {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <div className="container">
      <h2>Transactions</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            <strong>{tx.title}</strong> - ₹{tx.amount} ({tx.type}) on {tx.date}
            <button onClick={() => deleteTransaction(tx.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;

