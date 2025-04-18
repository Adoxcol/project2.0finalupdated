import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser } from '../repositories/userRepository';

export const register = async (email: string, password: string) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new Error('User already exists');
  
  const hashedPassword = await bcrypt.hash(password, 10);
  return createUser(email, hashedPassword);
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};