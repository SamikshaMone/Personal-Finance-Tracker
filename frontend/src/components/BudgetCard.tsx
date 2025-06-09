import React from 'react';

interface BudgetCardProps {
  category: string;
  amount: number;
  budgetLimit: number;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ category, amount, budgetLimit }) => {
  const progress = Math.min((amount / budgetLimit) * 100, 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 w-full max-w-sm">
      <h3 className="text-lg font-semibold mb-2">{category}</h3>
      <div className="h-4 w-full bg-gray-200 rounded-full mb-2">
        <div
          className="h-full bg-teal-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-600">
        ₹{amount.toLocaleString()} spent of ₹{budgetLimit.toLocaleString()}
      </p>
    </div>
  );
};

export default BudgetCard;

