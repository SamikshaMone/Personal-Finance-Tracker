// frontend/src/services/api.ts

import axios from 'axios';

// Replace with your actual backend URL or use environment variables
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:5001';

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach JWT token to every request if available
api.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      const { token } = JSON.parse(storedUser);
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

