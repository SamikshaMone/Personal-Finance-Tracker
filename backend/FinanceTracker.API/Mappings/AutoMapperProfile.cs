// File: Personal-Finance-Tracker/backend/Mappings/AutoMapperProfile.cs

using AutoMapper;
using FinanceTracker.API.DTOs;
using FinanceTracker.API.Models;

namespace FinanceTracker.API.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            // Transaction ↔ TransactionDto
            CreateMap<Transaction, TransactionDto>().ReverseMap();

            // Budget ↔ BudgetDto
            CreateMap<Budget, BudgetDto>().ReverseMap();

            // RegisterDto → ApplicationUser
            CreateMap<RegisterDto, ApplicationUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));

            // LoginDto does not need mapping as it's only used for input
        }
    }
}

