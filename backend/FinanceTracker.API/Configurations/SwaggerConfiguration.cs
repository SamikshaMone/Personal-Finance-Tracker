// File: Personal-Finance-Tracker/backend/FinanceTracker.API/Configurations/SwaggerConfiguration.cs

using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace FinanceTracker.API.Configurations
{
    public static class SwaggerConfiguration
    {
        public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Personal Finance Tracker API",
                    Version = "v1",
                    Description = "API documentation for the Personal Finance Tracker project"
                });

                // Enable JWT authentication in Swagger UI
                var securityScheme = new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Description = "Enter JWT Bearer token **_only_**",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer", // must be lowercase
                    BearerFormat = "JWT",
                    Reference = new OpenApiReference
                    {
                        Id = "Bearer",
                        Type = ReferenceType.SecurityScheme
                    }
                };

                c.AddSecurityDefinition("Bearer", securityScheme);

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    { securityScheme, new string[] { } }
                });
            });

            return services;
        }
    }
}

