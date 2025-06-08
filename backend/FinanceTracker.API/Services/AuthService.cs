using FinanceTracker.API.DTOs;
using System.Threading.Tasks;

namespace FinanceTracker.API.Services
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(RegisterDto registerDto);
        Task<string> LoginAsync(LoginDto loginDto);
    }
}

