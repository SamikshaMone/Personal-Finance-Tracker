// File: FinanceTracker.API/Controllers/ReportController.cs

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FinanceTracker.API.Services;
using System.Threading.Tasks;

namespace FinanceTracker.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReportController : ControllerBase
    {
        private readonly IReportService _reportService;

        public ReportController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet("summary")]
        public async Task<IActionResult> GetExpenseSummary()
        {
            var summary = await _reportService.GetExpenseSummaryAsync(User.Identity.Name);
            return Ok(summary);
        }

        [HttpGet("trends")]
        public async Task<IActionResult> GetTrends()
        {
            var trends = await _reportService.GetTrendsAsync(User.Identity.Name);
            return Ok(trends);
        }
    }
}

