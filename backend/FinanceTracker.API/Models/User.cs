using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace FinanceTracker.API.Models
{
    public class User : IdentityUser
    {
        public ICollection<Transaction> Transactions { get; set; }
        public ICollection<Budget> Budgets { get; set; }
        public ICollection<FinancialGoal> FinancialGoals { get; set; }
    }
}
