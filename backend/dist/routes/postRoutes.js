"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const postController_1 = require("../controllers/postController");
const router = (0, express_1.Router)();
// Create a new post
router.post('/create', authMiddleware_1.authenticate, postController_1.createPostController);
// Get all posts by the logged-in user
router.get('/my-posts', authMiddleware_1.authenticate, postController_1.getPostsByAuthorController);
// Add a tag to a post
router.put('/add-tag', authMiddleware_1.authenticate, postController_1.addTagToPostController);
exports.default = router;
