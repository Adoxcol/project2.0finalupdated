var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser } from '../repositories/userRepository';
export const register = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield findUserByEmail(email);
    if (existingUser)
        throw new Error('User already exists');
    const hashedPassword = yield bcrypt.hash(password, 10);
    return createUser(email, hashedPassword);
});
export const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserByEmail(email);
    if (!user || !(yield bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
});
