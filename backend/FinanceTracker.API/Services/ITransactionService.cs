using FinanceTracker.API.DTOs;
using FinanceTracker.API.Models;

namespace FinanceTracker.API.Services
{
    public interface ITransactionService
    {
        Task<IEnumerable<Transaction>> GetTransactionsAsync(string userId);
        Task<Transaction> GetTransactionByIdAsync(int id, string userId);
        Task<Transaction> CreateTransactionAsync(TransactionDto dto, string userId);
        Task<Transaction> UpdateTransactionAsync(int id, TransactionDto dto, string userId);
        Task<bool> DeleteTransactionAsync(int id, string userId);
    }
}
