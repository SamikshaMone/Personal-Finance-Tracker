using FinanceTracker.API.DTOs;
using FinanceTracker.API.Models;
using FinanceTracker.API.Repositories;

namespace FinanceTracker.API.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly ITransactionRepository _transactionRepo;

        public TransactionService(ITransactionRepository transactionRepo)
        {
            _transactionRepo = transactionRepo;
        }

        public async Task<IEnumerable<Transaction>> GetTransactionsAsync(string userId)
        {
            return await _transactionRepo.GetTransactionsByUserIdAsync(userId);
        }

        public async Task<Transaction> GetTransactionByIdAsync(int id, string userId)
        {
            var transaction = await _transactionRepo.GetTransactionByIdAsync(id);
            if (transaction == null || transaction.UserId != userId)
            {
                throw new UnauthorizedAccessException("Transaction not found or access denied.");
            }
            return transaction;
        }

        public async Task<Transaction> CreateTransactionAsync(TransactionDto dto, string userId)
        {
            var transaction = new Transaction
            {
                Amount = dto.Amount,
                Category = dto.Category,
                Date = dto.Date,
                Description = dto.Description,
                Type = dto.Type,
                UserId = userId
            };
            return await _transactionRepo.AddTransactionAsync(transaction);
        }

        public async Task<Transaction> UpdateTransactionAsync(int id, TransactionDto dto, string userId)
        {
            var transaction = await _transactionRepo.GetTransactionByIdAsync(id);
            if (transaction == null || transaction.UserId != userId)
            {
                throw new UnauthorizedAccessException("Transaction not found or access denied.");
            }

            transaction.Amount = dto.Amount;
            transaction.Category = dto.Category;
            transaction.Date = dto.Date;
            transaction.Description = dto.Description;
            transaction.Type = dto.Type;

            return await _transactionRepo.UpdateTransactionAsync(transaction);
        }

        public async Task<bool> DeleteTransactionAsync(int id, string userId)
        {
            var transaction = await _transactionRepo.GetTransactionByIdAsync(id);
            if (transaction == null || transaction.UserId != userId)
            {
                throw new UnauthorizedAccessException("Transaction not found or access denied.");
            }

            return await _transactionRepo.DeleteTransactionAsync(id);
        }
    }
}

