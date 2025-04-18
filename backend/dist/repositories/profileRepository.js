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
exports.getProfileByUser = exports.createProfile = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createProfile = (userId, bio) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.profile.create({
        data: { bio, userId },
    });
});
exports.createProfile = createProfile;
const getProfileByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.profile.findUnique({
        where: { userId },
    });
});
exports.getProfileByUser = getProfileByUser;
