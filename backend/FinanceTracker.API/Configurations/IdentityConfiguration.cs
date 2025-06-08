
// File: Personal-Finance-Tracker/backend/FinanceTracker.API/Configurations/IdentityConfiguration.cs

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using FinanceTracker.Infrastructure.Models;

namespace FinanceTracker.API.Configurations
{
    public static class IdentityConfiguration
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services)
        {
            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
            {
                // Password settings
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequiredLength = 6;

                // User settings
                options.User.RequireUniqueEmail = true;
            })
            .AddEntityFrameworkStores<FinanceTrackerDbContext>()
            .AddDefaultTokenProviders();

            return services;
        }
    }
}
