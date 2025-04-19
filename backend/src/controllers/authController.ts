import { Request, Response } from 'express';
import { register, login } from '../services/authService';
import { registerSchema, loginSchema } from '../lib/authSchema';
import { z } from 'zod';


type RegisterRequest = Request<
  {},
  {},
  z.infer<typeof registerSchema>['body']
>;

type LoginRequest = Request<
  {},
  {},
  z.infer<typeof loginSchema>['body']
>;

export const registerUser = async (req: RegisterRequest, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const { user, token } = await register(email, password);
    res.status(201).json({
      token,
      user: { id: user.id, email: user.email },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      const statusCode = error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred during registration' });
    }
  }
};

export const loginUser = async (req: LoginRequest, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

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