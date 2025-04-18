import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { createNewPost, getAllPosts } from '../controllers/postController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Auth routes
router.post('/auth/register', registerUser);  // Changed from '/register'
router.post('/auth/login', loginUser);        // Changed from '/login'

// Post routes
router.post('/posts', authenticate, createNewPost);
router.get('/posts', authenticate, getAllPosts);

export default router;