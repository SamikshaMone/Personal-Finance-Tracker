// File: Personal-Finance-Tracker/backend/DTOs/LoginDto.cs

using System.ComponentModel.DataAnnotations;

namespace FinanceTracker.API.DTOs
{
    public class LoginDto
    {
        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}

