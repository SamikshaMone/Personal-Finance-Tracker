// File: FinanceTracker.API/Controllers/BudgetController.cs

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
    public class BudgetController : ControllerBase
    {
        private readonly IBudgetService _budgetService;

        public BudgetController(IBudgetService budgetService)
        {
            _budgetService = budgetService;
        }

        [HttpGet]
        public async Task<IActionResult> GetBudgets()
        {
            var budgets = await _budgetService.GetBudgetsAsync(User.Identity.Name);
            return Ok(budgets);
        }

        [HttpPost]
        public async Task<IActionResult> AddBudget(BudgetRequest request)
        {
            await _budgetService.AddBudgetAsync(User.Identity.Name, request);
            return Ok("Budget added");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBudget(int id, BudgetRequest request)
        {
            var updated = await _budgetService.UpdateBudgetAsync(User.Identity.Name, id, request);
            return updated ? Ok("Updated") : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBudget(int id)
        {
            var deleted = await _budgetService.DeleteBudgetAsync(User.Identity.Name, id);
            return deleted ? Ok("Deleted") : NotFound();
        }
    }
}

