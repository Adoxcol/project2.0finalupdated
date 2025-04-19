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
exports.loginUser = exports.registerUser = void 0;
const authService_1 = require("../services/authService");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { user, token } = yield (0, authService_1.register)(email, password);
        res.status(201).json({
            token,
            user: { id: user.id, email: user.email },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            const statusCode = error.message.includes('already exists') ? 409 : 400;
            res.status(statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred during registration' });
        }
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const token = yield (0, authService_1.login)(email, password);
        res.json({ token });
    }
    catch (error) {
        if (error instanceof Error) {
            const statusCode = error.message.includes('credentials') ? 401 : 400;
            res.status(statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred during login' });
        }
    }
});
exports.loginUser = loginUser;
