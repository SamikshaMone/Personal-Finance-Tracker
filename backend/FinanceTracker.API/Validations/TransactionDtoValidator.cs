using FluentValidation;
using FinanceTracker.API.DTOs;

namespace FinanceTracker.API.Validations
{
    public class TransactionDtoValidator : AbstractValidator<TransactionDto>
    {
        public TransactionDtoValidator()
        {
            RuleFor(x => x.Type)
                .NotEmpty().WithMessage("Transaction type is required")
                .Must(type => type == "Income" || type == "Expense")
                .WithMessage("Transaction type must be either 'Income' or 'Expense'");

            RuleFor(x => x.Category)
                .NotEmpty().WithMessage("Category is required");

            RuleFor(x => x.Amount)
                .GreaterThan(0).WithMessage("Amount must be greater than zero");

            RuleFor(x => x.Date)
                .NotEmpty().WithMessage("Date is required")
                .LessThanOrEqualTo(DateTime.Now).WithMessage("Date cannot be in the future");
        }
    }
}
