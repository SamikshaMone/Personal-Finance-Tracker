// frontend/src/types/Transaction.ts

/**
 * A single transaction record returned by the API.
 */
export interface Transaction {
  /** Unique identifier */
  id: number;
  /** "Income" or "Expense" */
  type: 'Income' | 'Expense';
  /** Category name (e.g., "Food", "Salary") */
  category: string;
  /** Monetary amount in INR */
  amount: number;
  /** ISO date string (e.g., "2025-06-07T00:00:00Z") */
  date: string;
  /** Optional notes/details */
  note?: string;
}

/**
 * Payload for creating or updating a transaction.
 */
export interface TransactionRequest {
  /** "Income" or "Expense" */
  type: 'Income' | 'Expense';
  /** Category name */
  category: string;
  /** Amount in INR */
  amount: number;
  /** Date string (yyyy-mm-dd) */
  date: string;
  /** Optional notes */
  note?: string;
}

