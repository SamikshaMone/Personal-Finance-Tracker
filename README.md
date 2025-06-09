# 💰 Personal Finance Tracker

A full-stack Personal Finance Tracker built with ASP.NET Core, React, and SQL. This application allows users to manage their income, expenses, budgets, and savings goals in one place—securely and intuitively.

---

## 📌 Project Overview

The goal of this application is to help users:
- Track income and categorize expenses
- Create and manage monthly budgets
- Visualize financial activity through reports and charts
- Stay on top of personal finance goals with reminders and summaries

---

## 🛠 Tech Stack

### Backend
- ASP.NET Core (.NET 8)
- Entity Framework Core
- MediatR & FluentValidation
- AutoMapper
- SQL Server / Azure SQL
- JWT-based Authentication

### Frontend
- React + TypeScript
- Vite (or Create React App)
- Redux Toolkit (RTK)
- Tailwind CSS
- Axios + React Router

### DevOps & Cloud
- Azure App Services (for hosting)
- Azure SQL Database
- GitHub Actions (CI/CD)

---

## 🚀 Features

- ✅ Secure user authentication (JWT)
- ✅ Add/edit/delete income & expense entries
- ✅ Real-time dashboard with monthly summaries
- ✅ Budget planning and alerts
- ✅ Visual reports (bar, pie, line charts)
- ✅ Upload receipts or attachments
- ✅ Dark/light mode toggle

---

## 📁 Project Structure
```bash
PersonalFinanceTracker/
├── Backend/
│   └── FinanceTracker.Api/
│       ├── Controllers/          # API endpoints (Income, Expense, Auth, etc.)
│       ├── Data/                 # EF Core DbContext and Seed Data
│       ├── DTOs/                 # Data Transfer Objects
│       ├── Helpers/              # Utility classes (JWT, password hashing, etc.)
│       ├── Middleware/           # Error handling, authentication middleware
│       ├── Models/               # Entity models for DB
│       ├── Profiles/             # AutoMapper configuration
│       ├── Repositories/         # Repository interfaces and implementations
│       ├── Services/             # Business logic and service layer
│       ├── Validators/           # FluentValidation rules
│       ├── Program.cs            # Application entry point
│       └── appsettings.json      # App configuration
├── Frontend/
│   └── finance-tracker-app/
│       ├── public/               # index.html and static files
│       └── src/
│           ├── assets/           # Icons, images, etc.
│           ├── components/       # Reusable UI components
│           ├── hooks/            # Custom React hooks
│           ├── pages/            # Dashboard, Budget, Reports, Auth, etc.
│           ├── redux/            # Redux Toolkit slices and store
│           ├── services/         # Axios-based API calls
│           ├── utils/            # Helper functions
│           ├── App.tsx           # Root component
│           └── index.tsx          # React app entry point
├── .gitignore                    # Git ignore rules
├── LICENSE                       # MIT License file
└── README.md                     # Project documentation

```
---
## 🧪 Local Setup

### ✅ Prerequisites
- .NET 8 SDK
- Node.js (v18+ recommended)
- SQL Server or LocalDB


### ⚙️ Backend Setup (ASP.NET Core API)
```bash
# Clone the repository
git clone https://github.com/SamikshaMone/Personal-Finance-Tracker

# Navigate to backend API folder
cd PersonalFinanceTracker/Backend/FinanceTracker.Api

# Restore NuGet packages
dotnet restore

# Apply migrations and update database
dotnet ef database update

# Run the backend API
dotnet run
```
API runs at: https://localhost:5001


### 💻 Frontend Setup (React + TypeScript)
```bash
# Open a new terminal and navigate to frontend folder
cd PersonalFinanceTracker/Frontend/finance-tracker-app

# Install dependencies
npm install

# Start the React development server
npm run dev
```
App runs at: http://localhost:3000

---
## 📸 Screenshots

🧑‍💻 Developer Notes
This project demonstrates clean architecture, proper SOLID design patterns, and frontend-backend separation for production-ready enterprise apps. Easily deployable to Azure or any cloud platform.

1. [Dashboard Home Page](Images/HomePage.png)
2. [Add Transaction Page](Images/HomePage.png)
3. [Budget Management Page](Images/HomePage.png)
4. [Reports Page](Images/HomePage.png)
5. [Settings/Profile Page](Images/HomePage.png)
---
## 🤝 Contribution Guide
- Fork the repo

- Create a feature branch (git checkout -b feature/YourFeature)

- Commit your changes

- Open a Pull Request

---
## ⚖️ License
This project is licensed under the MIT License.

---
## 🙋‍♀️ Maintained By
Samiksha Mone

.NET Full Stack Developer (2.7+ years)

📧 monesamiksha@gmail.com

🔗 [LinkedIn](https://www.linkedin.com/in/samiksha-mone-8a23b7182) | Portfolio | [GitHub](https://github.com/SamikshaMone)

---
