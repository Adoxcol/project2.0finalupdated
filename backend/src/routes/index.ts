import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { createNewPost, getAllPosts, getPostSummary } from '../controllers/postController'; // Import new aggregation function
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Auth routes
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

// Post routes
router.post('/posts', authenticate, createNewPost);

// Paginated route for posts
router.get('/posts', authenticate, getAllPosts); // Updated to handle pagination

// Aggregation route for summary statistics
router.get('/posts/summary', authenticate, getPostSummary); // New route for summary

export default router;