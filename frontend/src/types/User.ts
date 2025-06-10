// frontend/src/types/User.ts

/**
 * Represents an authenticated user stored in localStorage.
 */
export interface User {
  /** Username or email */
  username: string;
  /** JWT bearer token */
  token: string;
}

