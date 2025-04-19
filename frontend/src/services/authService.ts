// src/services/auth.ts

import api from '../lib/api';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    // Add more user fields as needed
  };
}

export const register = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>('/auth/register', { email, password });
    return response.data;
  } catch (error: any) {
    console.error('Registration failed:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    console.error('Login failed:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};
