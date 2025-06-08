using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinanceTracker.API.Models
{
    public class FinancialGoal
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string GoalName { get; set; }

        [Required]
        public decimal TargetAmount { get; set; }

        public decimal SavedAmount { get; set; }

        public DateTime TargetDate { get; set; }

        [Required]
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}

