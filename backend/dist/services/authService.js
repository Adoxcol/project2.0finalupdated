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
exports.login = exports.register = void 0;
// services/authService.ts
const register = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    // Your registration logic (e.g., hashing password, saving to DB)
    return { user: { id: 1, email }, token: 'mock_token' };
});
exports.register = register;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    // Your login logic (e.g., verify credentials)
    return 'mock_token';
});
exports.login = login;
