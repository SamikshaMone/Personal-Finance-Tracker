// File: DTOs/BudgetDto.cs

namespace FinanceTracker.API.DTOs
{
    public class BudgetDto
    {
        public int Id { get; set; }
        public string Category { get; set; } = string.Empty;
        public decimal AllocatedAmount { get; set; }
        public decimal SpentAmount { get; set; }
    }

    public class BudgetRequestDto
    {
        public string Category { get; set; } = string.Empty;
        public decimal AllocatedAmount { get; set; }
    }
}

