"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const supertest_1 = __importDefault(require("supertest")); // Supertest for HTTP testing
const index_1 = __importDefault(require("../index")); // Import the Express app instance from index.ts
// Describe block for Auth Routes tests
describe('Auth Routes', () => {
    // Test case: Register with valid data
    test('POST /register with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default) // Use supertest's request to call the app
            .post('/api/auth/register') // Endpoint for registration
            .send({ email: 'test@example.com', password: 'password123' }); // Valid payload
        expect(response.status).toBe(201); // Expect HTTP 201 Created
        expect(response.body).toHaveProperty('token'); // Ensure a token is returned
    }));
    // Test case: Login with valid credentials
    test('POST /login with valid credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/api/auth/login') // Endpoint for login
            .send({ email: 'test@example.com', password: 'password123' }); // Valid payload
        expect(response.status).toBe(200); // Expect HTTP 200 OK
        expect(response.body).toHaveProperty('token'); // Ensure a token is returned
    }));
    // Test case: Validation fails for missing email
    test('Validation fails for missing email', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/api/auth/register') // Endpoint for registration
            .send({ password: 'password123' }); // Invalid payload (missing email)
        expect(response.status).toBe(400); // Expect HTTP 400 Bad Request
        expect(response.body.errors[0].message).toBe('Invalid email format'); // Check error message
    }));
    // Test case: Validation fails for short password
    test('Validation fails for short password', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/api/auth/register') // Endpoint for registration
            .send({ email: 'test@example.com', password: 'short' }); // Invalid payload (short password)
        expect(response.status).toBe(400); // Expect HTTP 400 Bad Request
        expect(response.body.errors[0].message).toBe('Password must be at least 8 characters'); // Check error message
    }));
});
