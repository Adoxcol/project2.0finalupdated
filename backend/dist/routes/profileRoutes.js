"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const profileController_1 = require("../controllers/profileController");
const router = (0, express_1.Router)();
router.post('/create', auth_1.authenticate, profileController_1.createProfileController);
router.get('/me', auth_1.authenticate, profileController_1.getProfileByUserController);
exports.default = router;
