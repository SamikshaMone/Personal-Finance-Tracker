import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Protect routes: if not logged in, redirect to /login
  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar visible only when authenticated */}
      {isAuthenticated && <Sidebar />}

      <div className="flex-1 flex flex-col">
        {isAuthenticated && <Navbar />}

        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/transactions"
              element={
                <PrivateRoute>
                  <Transactions />
                </PrivateRoute>
              }
            />
            <Route
              path="/budgets"
              element={
                <PrivateRoute>
                  <Budgets />
                </PrivateRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <PrivateRoute>
                  <Reports />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Catch-all */}
            <Route
              path="*"
              element={
                <Navigate
                  to={isAuthenticated ? '/dashboard' : '/login'}
                  replace
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
