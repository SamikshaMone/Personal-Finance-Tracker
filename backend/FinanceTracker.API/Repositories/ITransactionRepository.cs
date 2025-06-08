using FinanceTracker.API.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinanceTracker.API.Repositories
{
    public interface ITransactionRepository
    {
        Task<IEnumerable<Transaction>> GetAllTransactionsAsync(string userId);
        Task<Transaction> GetTransactionByIdAsync(int id, string userId);
        Task AddTransactionAsync(Transaction transaction);
        Task UpdateTransactionAsync(Transaction transaction);
        Task DeleteTransactionAsync(Transaction transaction);
        Task<decimal> GetTotalIncomeAsync(string userId);
        Task<decimal> GetTotalExpensesAsync(string userId);
        Task<Dictionary<string, decimal>> GetExpensesByCategoryAsync(string userId, DateTime month);
    }
}

