import { useState, useEffect } from 'react';

interface User {
  username: string;
  token: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string, token: string) => {
    const userData = { username, token };
    localStorage.setItem('authUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
  };

  const isAuthenticated = !!user;

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
}

