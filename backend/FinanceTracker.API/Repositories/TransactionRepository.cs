using FinanceTracker.API.Data;
using FinanceTracker.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinanceTracker.API.Repositories
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly FinanceDbContext _context;

        public TransactionRepository(FinanceDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Transaction>> GetAllTransactionsAsync(string userId)
        {
            return await _context.Transactions
                .Where(t => t.UserId == userId)
                .OrderByDescending(t => t.Date)
                .ToListAsync();
        }

        public async Task<Transaction> GetTransactionByIdAsync(int id, string userId)
        {
            return await _context.Transactions
                .FirstOrDefaultAsync(t => t.Id == id && t.UserId == userId);
        }

        public async Task AddTransactionAsync(Transaction transaction)
        {
            await _context.Transactions.AddAsync(transaction);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateTransactionAsync(Transaction transaction)
        {
            _context.Transactions.Update(transaction);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTransactionAsync(Transaction transaction)
        {
            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();
        }

        public async Task<decimal> GetTotalIncomeAsync(string userId)
        {
            return await _context.Transactions
                .Where(t => t.UserId == userId && t.Type == "Income")
                .SumAsync(t => t.Amount);
        }

        public async Task<decimal> GetTotalExpensesAsync(string userId)
        {
            return await _context.Transactions
                .Where(t => t.UserId == userId && t.Type == "Expense")
                .SumAsync(t => t.Amount);
        }

        public async Task<Dictionary<string, decimal>> GetExpensesByCategoryAsync(string userId, DateTime month)
        {
            return await _context.Transactions
                .Where(t => t.UserId == userId &&
                            t.Type == "Expense" &&
                            t.Date.Month == month.Month &&
                            t.Date.Year == month.Year)
                .GroupBy(t => t.Category)
                .Select(g => new
                {
                    Category = g.Key,
                    Total = g.Sum(x => x.Amount)
                })
                .ToDictionaryAsync(k => k.Category, v => v.Total);
        }
    }
}

