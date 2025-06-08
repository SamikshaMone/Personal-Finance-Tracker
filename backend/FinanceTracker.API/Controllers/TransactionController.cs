// File: FinanceTracker.API/Controllers/TransactionController.cs

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FinanceTracker.API.Models;
using FinanceTracker.API.Services;
using System.Threading.Tasks;

namespace FinanceTracker.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionService _transactionService;

        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var transactions = await _transactionService.GetTransactionsAsync(User.Identity.Name);
            return Ok(transactions);
        }

        [HttpPost]
        public async Task<IActionResult> Add(TransactionRequest request)
        {
            await _transactionService.AddTransactionAsync(User.Identity.Name, request);
            return Ok("Transaction added");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TransactionRequest request)
        {
            var success = await _transactionService.UpdateTransactionAsync(User.Identity.Name, id, request);
            return success ? Ok("Updated") : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var success = await _transactionService.DeleteTransactionAsync(User.Identity.Name, id);
            return success ? Ok("Deleted") : NotFound();
        }
    }
}

