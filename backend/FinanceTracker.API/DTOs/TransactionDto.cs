// File: Personal-Finance-Tracker/backend/DTOs/TransactionDto.cs

using System;

namespace FinanceTracker.API.DTOs
{
    public class TransactionDto
    {
        public int Id { get; set; }
        public string Type { get; set; } = "Expense"; // or "Income"
        public string Category { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Note { get; set; } = string.Empty;
    }

    public class TransactionRequestDto
    {
        public string Type { get; set; } = "Expense";
        public string Category { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Note { get; set; } = string.Empty;
    }
}

