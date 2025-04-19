// Import necessary modules
import request from 'supertest'; // Supertest for HTTP testing
import app from '../index'; // Import the Express app instance from index.ts

// Describe block for Auth Routes tests
describe('Auth Routes', () => {
  // Test case: Register with valid data
  test('POST /register with valid data', async () => {
    const response = await request(app) // Use supertest's request to call the app
      .post('/api/auth/register') // Endpoint for registration
      .send({ email: 'test@example.com', password: 'password123' }); // Valid payload
    expect(response.status).toBe(201); // Expect HTTP 201 Created
    expect(response.body).toHaveProperty('token'); // Ensure a token is returned
  });

  // Test case: Login with valid credentials
  test('POST /login with valid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login') // Endpoint for login
      .send({ email: 'test@example.com', password: 'password123' }); // Valid payload
    expect(response.status).toBe(200); // Expect HTTP 200 OK
    expect(response.body).toHaveProperty('token'); // Ensure a token is returned
  });

  // Test case: Validation fails for missing email
  test('Validation fails for missing email', async () => {
    const response = await request(app)
      .post('/api/auth/register') // Endpoint for registration
      .send({ password: 'password123' }); // Invalid payload (missing email)
    expect(response.status).toBe(400); // Expect HTTP 400 Bad Request
    expect(response.body.errors[0].message).toBe('Invalid email format'); // Check error message
  });

  // Test case: Validation fails for short password
  test('Validation fails for short password', async () => {
    const response = await request(app)
      .post('/api/auth/register') // Endpoint for registration
      .send({ email: 'test@example.com', password: 'short' }); // Invalid payload (short password)
    expect(response.status).toBe(400); // Expect HTTP 400 Bad Request
    expect(response.body.errors[0].message).toBe('Password must be at least 8 characters'); // Check error message
  });
});