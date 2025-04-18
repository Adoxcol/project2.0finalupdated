import { Request, Response } from 'express';
import { register, login } from '../services/authService';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    // Input validation
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }

    const { user, token } = await register(email, password);
    res.status(201).json({ 
      token,
      user: { id: user.id, email: user.email }
    });
  } catch (error: unknown) {
    // Type-safe error handling
    if (error instanceof Error) {
      const statusCode = error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred during registration' });
    }
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }

    const token = await login(email, password);
    res.json({ token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      const statusCode = error.message.includes('credentials') ? 401 : 400;
      res.status(statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred during login' });
    }
  }
};