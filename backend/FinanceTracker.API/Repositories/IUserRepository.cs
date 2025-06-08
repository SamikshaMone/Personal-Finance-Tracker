using FinanceTracker.API.Models;
using System.Threading.Tasks;

namespace FinanceTracker.API.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetUserByIdAsync(string userId);
        Task<bool> UserExistsAsync(string userId);
    }
}

