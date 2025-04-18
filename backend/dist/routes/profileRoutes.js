"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const profileController_1 = require("../controllers/profileController");
const router = (0, express_1.Router)();
// Create or update a profile
router.post('/create', authMiddleware_1.authenticate, profileController_1.createProfileController);
// Get the profile of the logged-in user
router.get('/me', authMiddleware_1.authenticate, profileController_1.getProfileByUserController);
exports.default = router;
