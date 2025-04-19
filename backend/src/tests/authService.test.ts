// authService.test.ts

import { PrismaClient } from '@prisma/client';
import { login } from '../services/authService';

jest.mock('@prisma/client');

const mockedPrisma = PrismaClient as jest.Mocked<typeof PrismaClient>;

describe('AuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('register() throws error for duplicate email', async () => {
    mockedPrisma.user.findUnique.mockResolvedValue({ id: 1, email: 'duplicate@example.com', password: 'hashedpassword' });

    await expect(register('duplicate@example.com', 'password123')).rejects.toThrow('Email already exists');
  });

  test('login() throws error for invalid credentials', async () => {
    mockedPrisma.user.findUnique.mockResolvedValue(null);

    await expect(login('wrong@example.com', 'wrongpassword')).rejects.toThrow('Invalid credentials');
  });

  test('register() throws error for invalid email format', async () => {
    await expect(register('invalid-email', 'password123')).rejects.toThrow('Validation failed');
  });

  test('register() throws error for short password', async () => {
    await expect(register('test@example.com', 'short')).rejects.toThrow('Validation failed');
  });
});

function register(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}
