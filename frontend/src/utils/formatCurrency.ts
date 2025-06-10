// frontend/src/utils/formatCurrency.ts

/**
 * Formats a number into an Indian Rupee currency string.
 *
 * Examples:
 *   formatCurrency(1500);        // "₹1,500.00"
 *   formatCurrency(50000.5);     // "₹50,000.50"
 *   formatCurrency(-2500);       // "-₹2,500.00"
 *
 * @param value  The numeric value to format
 * @param decimals  Number of decimal places (default: 2)
 * @returns The formatted currency string
 */
export function formatCurrency(
  value: number,
  decimals: number = 2
): string {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return formatter.format(value);
}

