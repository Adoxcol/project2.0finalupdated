"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const postController_1 = require("../controllers/postController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// Auth routes
router.post('/auth/register', authController_1.registerUser); // Changed from '/register'
router.post('/auth/login', authController_1.loginUser); // Changed from '/login'
// Post routes
router.post('/posts', auth_1.authenticate, postController_1.createNewPost);
router.get('/posts', auth_1.authenticate, postController_1.getAllPosts);
exports.default = router;
