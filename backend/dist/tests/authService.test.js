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
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const authService_1 = require("../services/authService"); // Adjust the import path as needed
describe('AuthService', () => {
    // Test case: Successful user registration
    test('register() creates user successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, authService_1.register)('test@example.com', 'password123');
        expect(result.user.email).toBe('test@example.com'); // Verify email matches
        expect(result.token).toBeDefined(); // Ensure a token is generated
    }));
    // Test case: Registration fails for duplicate email
    test('register() throws error for duplicate email', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect((0, authService_1.register)('duplicate@example.com', 'password123')).rejects.toThrow('Email already exists'); // Expect an error if the email is already registered
    }));
    // Test case: Successful login
    test('login() returns token on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield (0, authService_1.login)('test@example.com', 'password123');
        expect(token).toBeDefined(); // Ensure a token is returned
    }));
    // Test case: Login fails for invalid credentials
    test('login() throws error for invalid credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect((0, authService_1.login)('wrong@example.com', 'wrongpassword')).rejects.toThrow('Invalid credentials'); // Expect an error for invalid email or password
    }));
    // Test case: Registration fails for invalid email format
    test('register() throws error for invalid email format', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect((0, authService_1.register)('invalid-email', 'password123')).rejects.toThrow('Invalid email format'); // Expect an error for invalid email
    }));
    // Test case: Registration fails for short password
    test('register() throws error for short password', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect((0, authService_1.register)('test@example.com', 'short')).rejects.toThrow('Password must be at least 8 characters'); // Expect an error for a short password
    }));
});
