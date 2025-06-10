// frontend/src/utils/authHeader.ts

/**
 * Returns an object containing the Authorization header
 * with the JWT Bearer token, if present in localStorage.
 *
 * Usage:
 *   import { authHeader } from '../utils/authHeader';
 *   axios.get('/api/transactions', { headers: authHeader() });
 */
export function authHeader(): Record<string, string> {
  // localStorage key used in authService.ts
  const stored = localStorage.getItem('authUser');
  if (!stored) {
    return {};
  }

  try {
    const { token }: { token: string } = JSON.parse(stored);
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
  } catch {
    // invalid JSON or missing token
  }

  return {};
}

