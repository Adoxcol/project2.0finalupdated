// Import necessary modules
import { register, login } from '../services/authService'; // Adjust the import path as needed

describe('AuthService', () => {
  // Test case: Successful user registration
  test('register() creates user successfully', async () => {
    const result = await register('test@example.com', 'password123');
    expect(result.user.email).toBe('test@example.com'); // Verify email matches
    expect(result.token).toBeDefined(); // Ensure a token is generated
  });

  // Test case: Registration fails for duplicate email
  test('register() throws error for duplicate email', async () => {
    await expect(register('duplicate@example.com', 'password123')).rejects.toThrow(
      'Email already exists'
    ); // Expect an error if the email is already registered
  });

  // Test case: Successful login
  test('login() returns token on success', async () => {
    const token = await login('test@example.com', 'password123');
    expect(token).toBeDefined(); // Ensure a token is returned
  });

  // Test case: Login fails for invalid credentials
  test('login() throws error for invalid credentials', async () => {
    await expect(login('wrong@example.com', 'wrongpassword')).rejects.toThrow(
      'Invalid credentials'
    ); // Expect an error for invalid email or password
  });

  // Test case: Registration fails for invalid email format
  test('register() throws error for invalid email format', async () => {
    await expect(register('invalid-email', 'password123')).rejects.toThrow(
      'Invalid email format'
    ); // Expect an error for invalid email
  });

  // Test case: Registration fails for short password
  test('register() throws error for short password', async () => {
    await expect(register('test@example.com', 'short')).rejects.toThrow(
      'Password must be at least 8 characters'
    ); // Expect an error for a short password
  });
});