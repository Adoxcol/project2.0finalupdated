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
exports.getProfileByUserController = exports.createProfileController = void 0;
const profileService_1 = require("../services/profileService");
const createProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bio } = req.body;
        const userId = req.body.userId; // Injected by auth middleware
        const profile = yield (0, profileService_1.createProfileService)(userId, bio);
        res.status(201).json(profile);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.createProfileController = createProfileController;
const getProfileByUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userId; // Injected by auth middleware
        const profile = yield (0, profileService_1.getProfileByUserService)(userId);
        if (!profile) {
            res.status(404).json({ error: 'Profile not found' });
            return; // Ensure we don't proceed further
        }
        res.status(200).json(profile);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.getProfileByUserController = getProfileByUserController;
