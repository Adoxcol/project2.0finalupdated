// auth.test.ts
import request from 'supertest';
import app from '../index';

describe('Auth Routes', () => {
  test('Validation fails for missing email', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ password: 'password123' });
    expect(response.status).toBe(400);
    expect(response.body.errors[0].message).toBe('Invalid email format');
  });

  test('Validation fails for short password', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'short' });
    expect(response.status).toBe(400);
    expect(response.body.errors[0].message).toBe('Password must be at least 8 characters');
  });
});