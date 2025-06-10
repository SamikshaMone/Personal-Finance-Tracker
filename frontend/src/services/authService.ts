// frontend/src/services/authService.ts

import api from './api';
import type { LoginDto, RegisterDto } from '../types'; 

interface AuthResponse {
  token: string;
}

export async function login(username: string, password: string): Promise<AuthResponse> {
  const payload: LoginDto = { email: username, password };
  const { data } = await api.post<AuthResponse>('/auth/login', payload);
  // Store user for interceptor
  localStorage.setItem('authUser', JSON.stringify({ username, token: data.token }));
  return data;
}

export async function register(name: string, email: string, password: string, confirmPassword: string): Promise<AuthResponse> {
  const payload: RegisterDto = { name, email, password, confirmPassword };
  const { data } = await api.post<AuthResponse>('/auth/register', payload);
  // Store user for interceptor
  localStorage.setItem('authUser', JSON.stringify({ username: email, token: data.token }));
  return data;
}

export function logout() {
  localStorage.removeItem('authUser');
}

