// frontend/src/types/Budget.ts

/**
 * Represents a budget entry as returned by the API.
 */
export interface Budget {
  /** Unique identifier */
  id: number;
  /** Category name (e.g., "Groceries") */
  category: string;
  /** Total amount allocated for this category */
  allocatedAmount: number;
  /** Amount already spent */
  spentAmount: number;
}

/**
 * Payload for creating or updating a budget.
 */
export interface BudgetRequest {
  /** Category name */
  category: string;
  /** Amount to allocate */
  allocatedAmount: number;
}

